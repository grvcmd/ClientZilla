<template>
  <div class="row justify-content-center">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Program ID</th>
          <th>Program Name</th>
          <th>Program Desc</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="program in Programs" :key="program._id">
          <td>{{ program.programID }}</td>
          <td>{{ program.programName }}</td>
          <td>{{ program.programDesc }}</td>
          <td>
            <router-link :to="{name: 'program-services', params: { id: program.programID }}" class="btn btn-success ">View Services</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                Programs: []
            }
        },
        created() {
          let apiURL = `http://localhost:3001/programs/get-org-programs/${this.$route.params.id}`
          axios.get(apiURL).then(res => {
              this.Programs = res.data;
          }).catch(error => {
              console.log(error)
          }); 
        }
    }

</script>