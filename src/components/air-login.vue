<template>
  <div class="air-login">
    <form class="air-login-form" @submit.prevent="login">
      <div class="air-login-form-username" :class="{'has-error': errors.has('username')}">
        <input type="text" class="air-login-form-username--input" name="username" v-model="username" v-validate:username="'required'" placeholder="identifiant">
        <p class="air-login-form-username--error error-message">{{errors.first('username')}}</p>
      </div>
      <div class="air-login-form-password" :class="{'has-error': errors.has('username')}">
        <input type="password" class="air-login-form-password--input" name="password" v-model="password" v-validate="'required'" placeholder="mot de passe">
        <p class="air-login-form-password--error error-message">{{errors.first('password')}}</p>
      </div>
      <div class="air-login-form--button">
        <button type="submit" class="air-login-form--button-login simple-button">S'identifier</button>
        <button class="air-login-form--button-register simple-button">
          <a href="https://air.ephec-ti.org/forum/register">S'enregistrer</a>
        </button>
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
    padding: 10px 15px;

    .air-login-form {
      width: 100%;
    }

    .air-login-form-username--input, .air-login-form-password--input {
      height: 30px;
      width: 100%;
      margin: 5px 0;
      padding-left: 5px;
      font-size: 16px;
      color: #444;
      border-radius: 3px;
      border: none;
    }

    .air-login-form--button {
      display: flex;
      flex-direction: column;

      &-login, &-register {
        margin: 5px 0;
        background: #01a875;
      }

      &-register > a {
        color: #FFF;
        text-decoration: none;
      }
    }

    .error-message {
      font-size: 12px;
      color: #f33636;
      margin: 5px 0;
      font-style: italic;
    }
  }

  @media (max-width: 530px) {
    .air-login {
      width: 100%;
    }
  }
</style>


