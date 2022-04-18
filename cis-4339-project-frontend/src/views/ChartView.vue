<template>
  <section class="container">
    <!-- <h1>Chart Examples</h1> -->
    <div class="columns">
      <div class="column">
        <h3>Number Of Applicants per Service</h3>
        <div>
          <div>
            <ApplicantsBar
              v-if="!loading && !error"
              :label="labels"
              :chart-data="applicants"
            ></ApplicantsBar>

            <!-- Start of loading animation -->
            <div class="mt-40" v-if="loading">
              <p
                class="
                  text-6xl
                  font-bold
                  text-center text-gray-500
                  animate-pulse
                "
              >
                Loading...
              </p>
            </div>
            <!-- End of loading animation -->

            <!-- Start of error alert -->
            <div class="mt-12 bg-red-50" v-if="error">
              <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
                {{ error.title }}
              </h3>
              <p class="p-4 text-lg font-bold text-red-900">
                {{ error.message }}
              </p>
            </div>
            <!-- End of error alert -->
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import axios from "axios";
    import ApplicantsBar from "../components/BarChartComponent.vue";
    
    export default {
        components: {
            ApplicantsBar
        },
        data() {
            return {
                labels: [],
                applicants: [],
                loading: false,
                error: null
            }
        },
        methods: {
            async fetchData() {
                try {
                    this.error = null;
                    this.loading = true;
                    const url = `http://localhost:3001/services`;
                    const response = await axios.get(url);
                    this.labels = response.data.map((item) => item.serviceName);
                    this.applicants = response.data.map((item) => item.numOfApplications);
                } catch (err) {
                    if (err.message) {
                        this.error = {
                            title: "Server Response",
                            message: err.message,
                        };
                    }
                    else if (err.request) {
                        this.error = {
                            title: "Unable to Reach Server",
                            message: err.message,
                        };
                    }
                    else {
                        this.error = {
                            title: "Application Error",
                            message: err.message,
                        };
                    }
                }
                this.loading = false;
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>