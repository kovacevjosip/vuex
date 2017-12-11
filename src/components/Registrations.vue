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
// import { mapGetters } from 'vuex';

export default {
  computed: {
    // mapGetters(['registrations', 'totalRegistrations'])
    total() {
      return this.$store.getters.totalRegistrations;
    },
    registrations() {
      return this.$store.getters.registrations;
    }
  },
  methods: {
    unregister(registration) {
      const user = this.$store.state.users.find(user => {
        return user.id === registration.userId;
      });
      user.registered = false;
      this.$store.state.registrations.splice(this.registrations.indexOf(registration), 1);
    }
  }
};
</script>

