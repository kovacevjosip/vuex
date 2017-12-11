<template>
  <div id="registration" class="column is-half">
      <h3 class="title">Register here</h3>
      <hr>
      <div class="tags has-addons" v-for="(user, index) in users" :key="index">
          <span class="tag">{{ user.name }}</span>
          <span @click="registerUser(user)" class="tag is-success pointer">Register</span>
      </div>
  </div>
</template>

<script>
export default {
  props: ["users"],
  methods: {
    registerUser(user) {
      user.registered = true;
      this.$emit("userRegistered", user);
    }
  }
};
</script>
