<template>

</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                intakeForm: {
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