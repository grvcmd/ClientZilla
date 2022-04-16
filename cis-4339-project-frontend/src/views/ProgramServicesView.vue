<template>
  <div class="row justify-content-center">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Service ID</th>
          <th>Service Name</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="service in Services" :key="service._id">
          <td>{{ service.serviceID }}</td>
          <td>{{ service.serviceName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
      data() {
          return {
              Services: []
          }
      },
      created() {
        let apiURL = `http://localhost:3001/services/get-services-program/${this.$route.params.id}`
        axios.get(apiURL).then(res => {
            this.Services = res.data;
        }).catch(error => {
            console.log(error)
        }); 
      }
  }
</script>