<template>
  <div class="air-nav" ref="airnav">
    <div class="air-nav__nav-wrapper">
      <header class="air-nav__header">
        <div class="air-nav__logo-container">
          <router-link to="home" class="air-nav__logo-container-logo" href="/" aria-label="home">
            <picture class="air-nav__logo-container-logo__picture">
              <source srcset="/public/icons/air@128x128.webp 1X" type="image/webp" class="air-nav__logo-container-logo__picture">
              <img src="/public/icons/air@128x128.png" alt="bulb" class="air-nav__logo-container-logo__picture">
            </picture>
          </router-link>
        </div>
        <nav class="air-nav__nav-container" role="navigation" ref="nav">
          <ul class="air-nav__nav-content">
            <li>
              <router-link to="home" class="air-nav__nav-link" aria-label="home">Accueil</router-link>
            </li>
            <li>
              <a href="https://air.ephec-ti.org/forum/" class="air-nav__nav-link" aria-label="forum">Communauté</a>
            </li>
            <li>
              <router-link to="parameters" class="air-nav__nav-link" aria-label="parameter">Paramètres</router-link>
            </li>
            <li v-if="isLoggedIn" >
              <a href="#" class="air-nav__nav-link" aria-label="logout" @click.prevent="logout">Deconnexion</a>
            </li>
          </ul>
        </nav>
        <div class="air-nav__username" v-if="isLoggedIn">{{username}}</div>
        <button class="air-nav__show" aria-label="show side-nav" ref="showNav" @click="toggle"></button>
      </header>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ]),
    username () {
      return this.$store.state.user.username;
    }
  },
  methods: {
    toggle () {
      this.$refs.airnav.classList.toggle('air-nav--visible');
      document.querySelector('.router-view').classList.toggle('router-view--translate');
    },
    logout () {
      this.$store.dispatch('LOGOUT');
    }
  }
}
</script>

<style lang="scss">
  $background-first-color: #FFE803;
  $background-second-color: #C0ED70;
  $background-third-color: #D4E157;
  $banner-color: #83a93f;
  $text-color: rgba(0, 0, 0, 0.54);
  $nav-text-color: #464A3F;
  $button-color: rgb(255, 23, 68);
  $placeholder-color: rgba(255, 23, 68, 0.27);
  $header-height: 60px;

  .air-nav {
    flex-shrink: 0;
    height: $header-height;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      top: 0;
      width: 100%;
      height: $header-height;
      padding: 0 8px;
      background: #FFF;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      pointer-events: auto;
      z-index: 100000;
    }

    &__username {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 100%;
      border-left: 1px solid rgba(0, 0, 0, 0.3);
      font-size: 16px;
      color: rgba(0, 0, 0, 0.8);
      background: rbga(165, 165, 165, 0.2);
      text-transform: uppercase;
    }

    &__logo-container {
      display: flex;
      align-items: center;
      max-width: 200px;
      height: 100%;

      &-logo {
        display: flex;
        align-items: center;
        //background: url(/public/icons/air@128x128.webp) left center no-repeat;
        //background-size: 48px 48px;
        height: 48px;
        //padding-left: 56px;
        color: $nav-text-color;
        font-size: 32px;
        font-weight: bold;
        text-decoration: none;

        &::after {
          content: 'Air';
        }
      }

      &-logo__picture {
        height: 100%;
      }
    }

    &__show {
      padding: 0 0 0 40px;
      border: none;
      width: 24px;
      height: 24px;
      background: url(/public/images/hamburger-bold.svg) left center no-repeat;
      color: #FFF;
      display: none;
    }

    &__nav-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
      z-index: 100000;
    }

    &__nav-wrapper::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.4);
      opacity: 0;
      will-change: opacity;
      transition: opacity .3s cubic-bezier(0,0,.3,1);
    }

    &--visible &__nav-wrapper::before {
      pointer-events: auto;
      opacity: 1;
    }

    &__nav-container {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      background: #FFF;
      transition: opacity .3s cubic-bezier(0, 0, 0.3, 1),
        transform .5s cubic-bezier(0, 0, 0.3, 1);
      will-change: transform;
    }

    &--visible &__nav-container {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }

    &__nav-content {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &__nav-link, &__nav-username {
      display: flex;
      width: 100%;
      height: 100%;
      padding: 0 16px;
    }

    &__nav-link {
      font-size: 20px;
      color: $nav-text-color;
      text-decoration: none;
    }

    &__nav-username {
      font-size: 22px;
      color: #444;
    }
  }

  .router-link-active {
    color: green;
  }

  @media (max-width: 680px) {
    .air-nav {
      //height: 120px;

      &__show {
        display: block;
      }

      &__nav-container {
        position: absolute;
        top: $header-height;
        left: 0;
        width: 100%;
        height: 200px;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-200px);
      }

      &__nav-content {
        flex-direction: column;
      }

      &__nav-content li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.8);
      }

      &__nav-link {
        display: flex;
        align-items: center;
      }

      &__username {
        border: none;
      }
    }
  }
</style>
