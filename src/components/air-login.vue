<template>
  <div class="air-login">
    <form @submit.prevent="login">
      <div class="air-login-form-username" :class="{'has-error': errors.has('username')}">
        <input type="text" class="air-login-form-username--input" name="username" v-model="username" v-validate:username="'required'">
        <p class="air-login-form-username--error error-message">{{errors.first('username')}}</p>
      </div>
      <div class="air-login-form-password" :class="{'has-error': errors.has('username')}">
        <input type="password" class="air-login-form-password--input" name="password" v-model="password" v-validate="'required'">
        <p class="air-login-form-password--error error-message">{{errors.first('password')}}</p>
      </div>
      <div class="air-login-form--button">
        <button type="submit" class="air-login-form--button-login">Se connecter</button>
        <a href="https://air-forum.ephec-ti.org/register" class="air-login-form--button-register">s'enregistrer</a>
      </div>
    </form>
  </div>
</template>

<script>
import Constant from 'src/constants';
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
      this.$validator.validateAll();
      if (!this.errors.any()) {
        this.$store.dispatch('LOGIN', {username: this.username, password: this.password});
      }
    }
  }
}
</script>

<style lang="scss">
  .air-login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;

    .error-message {
      font-size: 12px;
      color: #f33636;
      margin: 5px 0;
      font-style: italic;
    }
  }


</style>


