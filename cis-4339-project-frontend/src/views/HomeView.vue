<script>
// import child component
import HelloWorld from '../components/HelloWorld.vue'
export default {
  // register child component
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: "You really did it!"
    }
  }
}
</script>

<template>
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-5 fw-bold">ClientZilla</h1>
      <p class="lead font-weight-normal">Effectively handle your clients and services - all in one application.</p>
    </div>
    <!-- <div class="product-device box-shadow d-none d-md-block"></div>
    <div class="product-device product-device-2 box-shadow d-none d-md-block"></div> -->
  </div>
</template>

<style>
/* default styling */
/* @import "../assets/base.css"; */
</style>