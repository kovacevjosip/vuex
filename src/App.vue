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
  },
  data() {
    return {}
  },
  computed: {
    unregisteredUsers() {
      return this.users.filter(user => {
        return !user.registered;
      });
    }
  },
  methods: {
    userUnregistered(registration) {
      const user = this.users.find(user => {
        return user.id === registration.userId;
      });
      user.registered = false;
      this.registrations.splice(this.registrations.indexOf(registration), 1);
    }
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
