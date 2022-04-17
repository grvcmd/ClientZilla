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
          <th>Age</th>
          <th>Gender</th>
          <th>SSN</th>
          <th>Vaccinated</th>
          <th>Veteran</th>
          <th>Number of Dependants</th>
          <th>Client ID</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="intakeForm in intakeForms" :key="intakeForm._id">
          <td>{{ intakeForm.orgsWorkedWith}}</td>
          <td>{{ intakeForm.firstName}}</td>
          <td>{{ intakeForm.lastName}}</td>
          <td>{{ intakeForm.phoneNumber}}</td>
          <td>{{ intakeForm.age}}</td>
          <td>{{ intakeForm.gender}}</td>
          <td>{{ intakeForm.ssn}}</td>
          <td>{{ intakeForm.isVaccinated}}</td>
          <td>{{ intakeForm.isVeteran}}</td>
          <td>{{ intakeForm.numOfDependants}}</td>
          <td>{{ intakeForm.clientID}}</td>
          <td>{{ intakeForm.createdAt}}</td>
          <td>{{ intakeForm.updatedAt}}</td>
          <!-- <td>
            <router-link :to="{name: 'program-services', params: { id: program.programID }}" class="btn btn-success ">View Services</router-link>
          </td> -->
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
    }
}
</script>


