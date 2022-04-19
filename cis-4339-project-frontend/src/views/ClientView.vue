// using the same template as before
<template>
  <div class="row justify-content-center">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Orgs Worked With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Client ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="intakeForm in intakeForms" :key="intakeForm._id">
          <td>{{intakeForm.orgsWorkedWith.join(', ')}}</td>
          <td>{{ intakeForm.firstName}}</td>
          <td>{{ intakeForm.lastName}}</td>
          <td>{{ intakeForm.phoneNumber}}</td>
          <td>{{ intakeForm.clientID}}</td>
          <td>
            <router-link :to="{name: 'edit-client', params: { id: intakeForm.clientID }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deleteClient(intakeForm.clientID)" class="btn btn-danger mx-2">Delete</button>
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

// importing axios to call our backend api "intakeforms"
<script>
  import axios from "axios";
  export default {
    data(){
        return{
            intakeForms:[]
        }
    },
      // calling our backend to display to frontend
    created(){
        let apiURL = 'http://localhost:3001/intakeforms';
        axios.get(apiURL).then(res =>{
            this.intakeForms = res.data;
        }).catch(error =>{
            console.log(error)
        });
    },
    methods: {
      deleteClient(id){
          let apiURL = `http://localhost:3001/intakeforms/${id}`;
          let indexOfArrayItem = this.intakeForms.findIndex(i => i.clientID === id);

          if (window.confirm("Do you really want to delete?")) {
            //call to backend
              axios.delete(apiURL).then((res) => {
                    console.log(res)
                    this.intakeForms.splice(indexOfArrayItem, 1);
                }).catch(error => {
                    console.log(error)
                });
          }
      }
    }
  }
</script>


