<template>
  <div class="row justify-content-center">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Service ID</th>
          <th>Service Name</th>
          <th>Service Desc</th>
        </tr>
      </thead>
      <tbody>
       <!-- <tr v-for="program in Programs" :key="program._id">
          <td>{{ program.programID }}</td>
          <td>{{ program.programName }}</td>
          <td>{{ program.programDesc }}</td>
          <td>
            <router-link :to="{name: 'program-services', params: { id: program.programID }}" class="btn btn-success ">View Services</router-link>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>