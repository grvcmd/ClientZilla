<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Organization content -->
            <h3 class="text-center">Update Organization</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Organization Name</label>
                    <input type="text" class="form-control" v-model="organization.orgName" required>
                </div>

                <div class="form-group">
                    <label>Organization Description</label>
                    <!-- <input type="text" class="form-control" v-model="organization.orgDesc" required> -->
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="organization.orgDesc" required></textarea>
                </div>

                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                // Org object
                organization: { }
            }
        },
        created() {
            let apiURL = `http://localhost:3001/organizations/${this.$route.params.id}`;

            // Fills out fields with current data
            axios.get(apiURL).then((res) => {
                this.organization = res.data;
            })
        },
        methods: {
            handleUpdateForm() {
                let apiURL = `http://localhost:3001/organizations/${this.$route.params.id}`;

                // put the new data into the db using the api url
                axios.put(apiURL, this.organization).then((res) => {
                    console.log(res)
                    this.$router.push('/view-orgs')
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>