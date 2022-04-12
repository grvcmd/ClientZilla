// using template from example
<template>
  <div class="row justify-content-center">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Organization ID</th>
          <th>Organization Name</th>
          <th>Organization Desc</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="organization in Organizations" :key="organization._id">
          <td>{{ organization.orgID }}</td>
          <td>{{ organization.orgName }}</td>
          <td>{{ organization.orgDesc }}</td>
            <!-- <td>
            <router-link :to="{name: 'edit', params: { id: student._id }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger mx-2">Delete</button>
          </td> -->
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