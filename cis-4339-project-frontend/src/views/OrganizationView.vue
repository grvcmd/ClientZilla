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
            <!-- <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger mx-2">Delete</button> -->
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
        
    }
    
}
</script>