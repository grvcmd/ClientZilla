<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Sign Up</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="client.firstName" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="client.lastName" required>
                </div>
                <div class="form-group">
                    <label>Phone #</label>
                    <input type="text" class="form-control" placeholder="XXXXXXXXXX" v-model="client.phoneNumber" required>
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input type="text" class="form-control" v-model="client.age">
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
                    <label>Are you vaccinated?</label>
                    <br>
                    <div class="form-check form-check-inline">
                        <input type="radio" value="true" id="yes" class="form-check-input" v-model="client.isVaccinated" required>
                        <label class="form-check-label" for="yes">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" value="false" id="no" class="form-check-input" v-model="client.isVaccinated" required>
                        <label class="form-check-label" for="no">No</label>
                    </div>
                </div>
                <div class="form-group">
                    <label>Are you a veteran</label>
                    <br>
                    <div class="form-check form-check-inline">
                        <input type="radio" value="true" id="yes" class="form-check-input" v-model="client.isVeteran" required>
                        <label class="form-check-label" for="yes">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" value="false" id="no" class="form-check-input" v-model="client.isVeteran" required>
                        <label class="form-check-label" for="no">No</label>
                    </div>
                </div>
                <div class="form-group">
                    <label>Number of dependencies:</label>
                    <input type="text" class="form-control" v-model="client.numOfDependants" required>
                </div> 

                <button type="submit" class="btn btn-danger mt-3">Create</button>
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
                    firstName: '',  // string
                    lastName: '',   // string
                    phoneNumber: '',    // string
                    age: '',    // number
                    gender: '', // string
                    isVaccinated: '', // boolean
                    isVeteran: '',  // boolean
                    numOfDependants: '',    // int
                }
            }
        },
        methods: {
            handleSubmitForm() {
                console.log("form submitted")

                let apiURL = 'http://localhost:3001/intakeforms';
                // convert fields from string to correct datatypes
                parseInt(this.client.age)
                parseInt(this.client.numOfDependants)

                axios.post(apiURL, this.client).then(() => {
                    //After submission, go back to the signup view
                    this.$router.push('/')

                    console.log("form send to db")

                    // Reset form fields
                    this.client = {
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                        age: '',
                        gender: '',
                        isVaccinated: '', 
                        isVeteran: '',  
                        numOfDependants: '',    
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }

</script>