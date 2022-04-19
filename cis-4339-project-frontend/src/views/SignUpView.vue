<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Client Registration</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Organizations you have worked with</label>
                    <input type="text" class="form-control" placeholder="Org 1, Org 2, Org 3" v-model="client.orgsWorkedWith">
                </div>
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
                    <label>Number of dependants:</label>
                    <input type="text" class="form-control" v-model="client.numOfDependants" required>
                </div> 

                <!-- If there are anything in the error list - display those errors. -->
                <p v-if="errors.length">
                    <br>
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }} </li>
                    </ul>
                </p>
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
                errors: [],
                client: {
                    orgsWorkedWith: [], //array
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
                this.errors = [];

                // Validate entered phone # is 10 digits long
                if (this.client.phoneNumber.length < 10){
                    this.errors.push("Phone number must be 10 digits long");
                };
                // Validate that age is > 18
                if (parseInt(this.client.age) < 18) {
                    this.errors.push("You must be older than 18 to sign up as a client.")
                }

                // if there are no errors, submit the form
                if (this.errors.length === 0) {

                    console.log("form submitted")

                    let apiURL = 'http://localhost:3001/intakeforms';
                    // convert fields from string to correct datatypes
                    parseInt(this.client.age)
                    parseInt(this.client.numOfDependants)

                    axios.post(apiURL, this.client).then(() => {
                        //After submission, go back to the signup view
                        this.$router.push('/view-clients')

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
                    });
                }
            }
        }
    }

</script>