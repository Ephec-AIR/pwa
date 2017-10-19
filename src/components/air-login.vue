<template>
  <form @submit.prevent="login">
    <input type="text" class="air-login-form-username" v-model="username">
    <input type="password" class="air-login-form-password" v-model="password">
    <div class="air-login--button">
      <button type="submit" class="air-login-form--button-login">Se connecter</button>
      <a href="https://air-forum.ephec-ti.org/register" class="air-login-form--button-register">s'enregistrer</a>
    </div>
  </form>
</template>

<script>
import Vue from 'vue';
import {mapActions} from 'vuex';

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('LOGIN');
    }
  }
}
</script>

<style lang="scss">

</style>


