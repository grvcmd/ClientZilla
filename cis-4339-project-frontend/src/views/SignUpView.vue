<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Sign Up</h3>
            <!-- <form @submit.prevent="handleSubmitForm"> -->
            <form>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="client.firstName" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="client.lastName" required>
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input type="text" class="form-control" v-model="client.age" required>
                </div>
                <div class="form-group">
                    <label>Phone #</label>
                    <input type="text" class="form-control" v-model="client.phoneNumber">
                </div>
                <div class="form-group">
                    <label>Gender</label>
                    <br>
                    <div class="form-check form-check-inline">
                        <input type="radio" value="male" id="male" class="form-check-input" v-model="client.gender" required>
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" value="female" id="female" class="form-check-input" v-model="client.gender" required>
                        <label class="form-check-label" for="female">Female</label>
                    </div>
                </div>
                <div class="form-group">
                    <label>Number of dependencies:</label>
                    <input type="text" class="form-control" v-model="client.numOfDependants" required>
                </div> 
                <div class="form-group">
                    <label>Are you a veteran</label>
                    <br>
                    <div class="form-check form-check-inline">
                        <input type="radio" value="yes" id="yes" class="form-check-input" v-model="client.isVeteran" required>
                        <label class="form-check-label" for="yes">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" value="no" id="no" class="form-check-input" v-model="client.isVeteran" required>
                        <label class="form-check-label" for="no">No</label>
                    </div>
                </div>
                <div class="form-group">
                    <label>Are you vaccinated?</label>
                    <br>
                    <div class="form-check form-check-inline">
                        <input type="radio" value="yes" id="yes" class="form-check-input" v-model="client.isVaccinated" required>
                        <label class="form-check-label" for="yes">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" value="no" id="no" class="form-check-input" v-model="client.isVaccinated" required>
                        <label class="form-check-label" for="no">No</label>
                    </div>
                </div>

                <button class="btn btn-danger mt-3">Create</button>
            </form>
        </div>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                client: {
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    age: '',
                    gender: '',
                    isVaccinated: '', // boolean
                    isVeteran: '',  // boolean
                    numOfDependants: '',    // int
                }
            }
        }
    }

</script>