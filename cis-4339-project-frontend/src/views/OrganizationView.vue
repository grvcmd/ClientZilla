// using template from example
<template>
  <div class="row justify-content-center">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Org ID</th>
          <th>Org Name</th>
          <th>Org Desc</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="organization in Organizations" :key="organization._id">
          <td>{{ organization.orgID }}</td>
          <td>{{ organization.orgName }}</td>
          <td>{{ organization.orgDesc }}</td>
          <td>
            <router-link :to="{name: 'org-programs', params: { id: organization.orgID }}" class="btn btn-success ">View Programs</router-link>
            <router-link :to="{name: 'edit-org', params: { id: organization.orgID }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deleteOrganization(organization.orgID)" class="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

//Going to import axios to call backend api 
 
<script>
    import axios from "axios";
export default {
    data (){
        return {
            Organizations:[]
        }
    },
    created(){
        let apiURL = 'http://localhost:3001/organizations';
        axios.get(apiURL).then(res =>{
            this.Organizations = res.data;
        }).catch(error =>{
            console.log(error)
        });     
    },
    methods: {
        deleteOrganization(id){
            let apiURL = `http://localhost:3001/organizations/${id}`;
            let indexOfArrayItem = this.Organizations.findIndex(i => i.orgID === id);

            if (window.confirm("Do you really want to delete?")) {
              //call to backend
                axios.delete(apiURL).then(() => {
                  //remove one element from Students array object to update data
                    this.Organizations.splice(indexOfArrayItem, 1);
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
}
</script>