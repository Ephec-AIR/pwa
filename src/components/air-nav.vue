<template>
  <header class="air-nav">
    <div class="air-nav--inner">
      <div class="air-nav__logo-container">
        <router-link to="home" class="air-nav__logo-container--logo" href="/" aria-label="home"></router-link>
      </div>
      <label for="toggle_nav" class="toggle_nav--label" aria-label="toggle_nav"></label>
      <input type="checkbox" id="toggle_nav" role="button" aria-label="toggle_navigation_bar">
      <nav class="air-nav--inner__nav-container" role="navigation">
        <ul class="air-nav--inner__nav-content">
          <li>
            <router-link to="home" class="air-nav__inner__nav-link" aria-label="home">Home</router-link>
          </li>
          <li>
            <a href="https://air-forum.ephec-ti.org" class="air-nav__inner__nav-link" aria-label="forum">Forum</a>
          </li>
          <li>
            <router-link to="parameters" class="air-nav__inner__nav-link" aria-label="parameter">Parameter</router-link>
          </li>
          <li v-if="isLoggedIn" >
            <a href="#" class="air-nav__inner__nav-link" aria-label="logout" @click.prevent="logout">Deconnection</a>
          </li>
          <li v-if="isLoggedIn">
            <span class="air-nav__inner__nav-username" aria-label="username">{{username}}</span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  methods: {
    logout () {
      this.$store.dispatch('LOGOUT');
    }
  },
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ]),
    username () {
      return this.$store.state.user.username;
    }
  }
}
</script>

<style lang="scss">
  .air-nav {
    height: 80px;
    background: #FFF;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

    .air-nav__logo-container {
      display: flex;
      align-items: center;
      max-width: 200px;

      &--logo {
        display: flex;
        align-items: center;
        background: url(/public/icons/air@128x128.png) left center no-repeat;
        background-size: 48px 48px;
        height: 48px;
        padding-left: 56px;
        color: #01a875;
        font-size: 32px;
        font-weight: bold;
        text-decoration: none;

        &::after {
          content: 'Air';
        }
      }
    }

    .toggle_nav--label {
      background: url(/public/images/hamburger-bold.svg) center no-repeat no-repeat;
      width: 24px;
      display: none;
    }

    #toggle_nav {
      position: absolute;
      top: 30px;
      right: 15px;
      opacity: 0;
    }

    .air-nav--inner {
      position: relative;
      display: flex;
      height: 100%;
      max-width: 800px;
      margin: 0 auto;
    }

    .air-nav--inner__nav-container {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      background: #FFF;
      width: 100%;

      .air-nav--inner__nav-content {
        padding: 0;
        display: flex;
        list-style: none;

        li {
          margin: 5px 20px;
          padding: 5px;
        }

        .air-nav__inner__nav-link {
          font-size: 20px;
          color: #01a875;
          text-decoration: none;
        }

        .air-nav__inner__nav-username {
          font-size: 22px;
          color: #444;
        }
      }
    }
  }

  .router-link-active {
    color: green;
  }

  @media (max-width: 530px) {
    .air-nav {
      &--inner {
        justify-content: space-between;
      }

      &__logo-container {
        margin: 10px;
      }

      .toggle_nav--label {
        margin: 10px;
        display: block;
        z-index: 2;
      }

      #toggle_nav:checked~.menu-underlay {
        opacity: 0.7;
      }

      #toggle_nav:checked~.air-nav--inner__nav-container {
        transform: none;
      }
    }

    .air-nav--inner__nav-container {
      position: fixed;
      display: flex;
      justify-content: flex-start;
      align-items: unset;
      padding: 120px 0;
      background: #FFF;
      top: 0;
      right: 0;
      width: 500px;
      max-width: 70%;
      height: 100%;
      box-shadow: -4px 0 4px rgba(0, 0, 0, 0.3);
      will-change: transform;
      transform: translateX(102%);
      transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);
      z-index: 1;

      .air-nav--inner__nav-content {
        flex-direction: column;
        height: 100%;
        width: 100%;
        max-height: inherit;
        margin-top: 160px;

        li {
          margin: 7px 10px;
        }

        .air-nav__inner__nav-link {
          font-weight: bold;
        }
      }
    }
  }
</style>
