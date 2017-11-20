<template>
  <div class="air-login">
    <form class="air-login-form" @submit.prevent="login">
      <div class="air-login-form-username" :class="{'has-error': errors.has('username')}">
        <input type="text" class="air-login-form-username--input" aria-label="username" name="username" v-model="username" v-validate:username="'required'" placeholder="identifiant">
        <p class="air-login-form-username--error error-message">{{errors.first('username')}}</p>
      </div>
      <div class="air-login-form-password" :class="{'has-error': errors.has('username')}">
        <input type="password" class="air-login-form-password--input" aria-label="password" name="password" v-model="password" v-validate="'required'" placeholder="mot de passe">
        <p class="air-login-form-password--error error-message">{{errors.first('password')}}</p>
      </div>
      <div class="air-login-form--button">
        <button type="submit" aria-label="submit login form" class="air-login-form--button-login simple-button">S'identifier</button>
      </div>
    </form>
    <button class="air-login-form--button-register simple-button">
      <a href="https://air.ephec-ti.org/forum/register">S'enregistrer</a>
    </button>
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
  $text-color: rgba(0, 0, 0, 0.54);
  $nav-text-color: #464A3F;
  $button-color: rgb(255, 23, 68);
  $placeholder-color: rgba(255, 23, 68, 0.27);

  .air-login {
    display: flex;
    flex-direction: column;
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
      color: $text-color;
      border-radius: 3px;
      border: none;
    }

    .air-login-form--button {
      display: flex;
      flex-direction: column;

      &-login, &-register {
        width: 100%;
        margin: 5px 0;
        background: $button-color;
      }

      &-register > a {
        color: #FFF;
        text-decoration: none;
      }
    }

    .error-message {
      font-size: 12px;
      color: $button-color;
      margin: 5px 0;
      font-style: italic;
    }
  }

  ::-webkit-input-placeholder {
    color: $placeholder-color;
  }
  ::-moz-placeholder {
    color: $placeholder-color;
  }

  @media (max-width: 680px) {
    .air-login {
      width: 100%;
    }
  }
</style>


