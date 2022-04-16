<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Organization Registration</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Organization Name</label>
                    <input type="text" class="form-control" v-model="organization.orgName" required>
                </div>
                <div class="form-group">
                    <label>Organization Description</label>
                    <!-- <input type="text" class="form-control" v-model="organization.orgDesc" required> -->
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="organization.orgDesc" required></textarea>
                </div>
                <div class="form-group">
                    <label>Choose an ID number for your Organization</label>
                    <input type="text" class="form-control" v-model="organization.orgID" required>
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
                organization: {
                    orgID: '',
                    orgName: '',
                    orgDescription: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                this.errors = [];

                // Validate that orgName is > 2 letters
                if (this.organization.orgName.length < 2){
                    this.errors.push("Organization name must be longer than 2 letters");
                };
                // Validate that orgDesc > 20 letters
                if (this.organization.orgDesc.length < 20) {
                    this.errors.push("Organization description must be longer than 20 letters");
                };

                // if there are no errors, submit the form
                if (this.errors.length === 0) {

                    parseInt(this.organization.orgID)

                    console.log("client form submitted")

                    let apiURL = 'http://localhost:3001/organizations';

                    axios.post(apiURL, this.organization).then(() => {
                        //After submission, go back to the orgsignup view
                        this.$router.push('/view-orgs')

                        console.log("form send to db")

                        // Reset form fields
                        this.organization = {
                            orgID: '',
                            orgName: '',
                            orgDescription: ''
                        }
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }

</script>