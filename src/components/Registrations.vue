<template>
  <div id="registrations" class="column is-half">
      <div class="summary">
          <h3 class="title">Registrations: {{ total }}</h3>
      </div>
      <hr>
      <div class="tags has-addons" v-for="(registration, index) in registrations" :key="index">
          <span class="tag">{{ registration.name }}</span>
          <span class="tag">{{ registration.date }}</span>
          <span @click="unregister(registration)"  class="tag is-danger pointer">(Unregister)</span>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    total() {
      return this.$store.state.registrations.length;
    },
    registrations() {
      return this.$store.state.registrations;
    }
  },
  methods: {
    unregister(registration) {
      const user = this.$store.state.users.find(user => {
        return user.id === registration.userId;
      });
      user.registered = false;
      this.$store.state.registrations.splice(this.$store.state.registrations.indexOf(registration), 1);
    }
  }
};
</script>

