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
       <tr v-for="student in Students" :key="student._id">
          <td>{{ student.firstName }}</td>
          <td>{{ student.lastName }}</td>
          <td>{{ student.studentID }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.phoneNumber }}</td>
            <!-- <td>
            <router-link :to="{name: 'edit', params: { id: student._id }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger mx-2">Delete</button>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

//Going to 