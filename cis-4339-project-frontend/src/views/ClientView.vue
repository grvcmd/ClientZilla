// using the same template as before
<template>
  <div class="row justify-content-center">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Full Name</th>
          <th>Date Created</th>
          <th>Products</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="client in Clients" :key="client._id">
          <td>{{ client.clientName }}</td>
          <td>{{ client.clientDate }}</td>
          <td>{{ client.clientProducts }}</td>
          <!-- <td>
            <router-link :to="{name: 'program-services', params: { id: program.programID }}" class="btn btn-success ">View Services</router-link>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>