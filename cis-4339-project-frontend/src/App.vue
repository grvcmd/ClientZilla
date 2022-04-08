<script >
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div>
    <!-- NAV BAR-->
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand float-left" href="">
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
            <router-link class="nav-link" to="">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">Sign Up</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">TBA</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">About</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <HelloWorld msg="You did it!"></HelloWorld>
    </div>
  </div>
</template>


<style>
/*
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
*/
</style>
