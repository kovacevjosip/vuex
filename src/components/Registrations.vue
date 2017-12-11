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
  props: ["registrations"],
  methods: {
    unregister(registration) {
      this.$emit("userUnregistered", registration);
    }
  },
  computed: {
    total() {
      return this.registrations.length;
    }
  }
}
</script>

