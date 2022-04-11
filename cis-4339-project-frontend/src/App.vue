
<template>
  <div>
    <!-- NAV BAR-->
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand float-left" href="/">
          <img 
            alt="Vue logo"
            src="./assets/logo.svg"
            width="30"
            height="30"
            class="d-inline-block align-text-top"
          />
          ClientZilla
        </a>
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">Sign Up</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view-orgs">Organizations</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">About</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <RouterView></RouterView>
    </div>

  </div>
</template>


<style>

</style>
