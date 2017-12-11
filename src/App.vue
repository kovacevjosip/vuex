<template>
  <div id="app" class="columns has-text-centered">
      <app-registration></app-registration>
      <app-registrations></app-registrations>
  </div>
</template>

<script>
import Registration from "./components/Registration.vue";
import Registrations from "./components/Registrations.vue";

export default {
  components: {
    appRegistration: Registration,
    appRegistrations: Registrations
  }
};
</script>

<style>
#app {
  margin: 50px;
}

.pointer {
  cursor: pointer;
  transition: opacity 0.25s ease-in-out;
  opacity: 1;
}

.pointer:hover {
  opacity: 0.5;
}

.tags .tag {
  float: right;
}
</style>
