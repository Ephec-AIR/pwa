<template>
  <header class="air-nav">
    <div class="air-nav-inner">
      <div class="air-nav__logo-container">
        <router-link to="home" class="air-nav__logo-container-logo" href="/" aria-label="home"></router-link>
      </div>
      <nav class="air-nav__nav-container" role="navigation" @click="blockClicks" ref="nav">
        <button class="air-nav__close" ref="hideNav"></button>
        <ul class="air-nav__nav-content">
          <li>
            <router-link to="home" class="air-nav__nav-link" aria-label="home">Home</router-link>
          </li>
          <li>
            <a href="https://air.ephec-ti.org/forum/" class="air-nav__nav-link" aria-label="forum">Forum</a>
          </li>
          <li>
            <router-link to="parameters" class="air-nav__nav-link" aria-label="parameter">Parametres</router-link>
          </li>
          <li v-if="isLoggedIn" >
            <a href="#" class="air-nav__nav-link" aria-label="logout" @click.prevent="logout">Deconnection</a>
          </li>
          <li v-if="isLoggedIn">
            <span class="air-nav__nav-username" aria-label="username">{{username}}</span>
          </li>
        </ul>
      </nav>
      <button class="air-nav__show" ref="showNav"></button>
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex';
import Constants from 'src/constants';

export default {
  data () {
    return {
      viewportWidth: 0,
      width: 0,
      treshold: 0,
      dragging: false,
      open: false,
      startX: 0,
      currentX: 0,
      deltaX: 0
    }
  },
  methods: {
    onResize () {
      this.viewportWidth = window.innerWidth;
      this.width = this.$refs.nav.getBoundingClientRect().width;
      this.treshold = this.width * 0.25;
    },
    findCandidate (evt) {
      if (evt.touches && evt.touches.length) {
        return evt.touches[0];
      }

      if (evt.changedTouches && evt.changedTouches.length) {
        return evt.changedTouches[0];
      }

      return evt;
    },
    onTouchStart (evt) {
      if (!(this.$refs.nav.classList.contains('air-nav--visible'))) {
        return;
      }

      this.dragging = true;
      this.startX = this.findCandidate(evt).pageX;
      this.currentX = this.startX;
      requestAnimationFrame(this.updatePosition);
    },
    onTouchMove (evt) {
      if (!this.dragging) {
        return;
      }

      this.currentX = this.findCandidate(evt).pageX;
      this.deltaX = this.currentX - this.startX;
    },
    onTouchEnd (evt) {
      if (!this.dragging) {
        return;
      }

      this.dragging = false;
      const screenX = Math.min(0, this.currentX - this.startX);
      this.$refs.nav.style.transform = '';

      if (screenX < 0) {
        this.hide();
      }
    },
    updatePosition () {
      if (!this.dragging) {
        return;
      }

      requestAnimationFrame(this.updatePosition);

      const screenX = Math.min(0, this.currentX - this.startX);
      this.$refs.nav.style.transform = `translateX(${screenX}px)`;
    },
    show (evt) {
      this.$refs.nav.classList.add('air-nav--underlay');
      this.$refs.nav.classList.add('air-nav--visible');
    },
    hide (evt) {
      this.$refs.nav.classList.remove('air-nav--visible');
    },
    blockClicks (evt) {
      evt.stopPropagation();
    },
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
  },
  mounted () {
    window.addEventListener('resize', _ => this.onResize());
    document.querySelector('.main').addEventListener('click', this.hideNav);
    //this.$refs.nav.addEventListener('click', this.blockClicks);
    this.$refs.nav.addEventListener('touchstart', this.onTouchStart);
    this.$refs.nav.addEventListener('touchmove', this.onTouchMove, {passive: false});
    this.$refs.nav.addEventListener('touchend', this.onTouchEnd);
    this.onResize();
  },
  destroyed () {
    window.removeEventListener('resize', _ => this.onResize());
    document.querySelector('.main').removeEventListener('click', this.hideNav);
  }
}
</script>

<style lang="scss">
  .air-nav {
    height: 80px;
    background: #FFF;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

    &--show {
      border: none;
      width: 24px;
      background: url(/public/images/hamburger-bold.svg) left center no-repeat;
      color: #FFF;
      display: none;
    }

    &--inner--close {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      width: 24px;
      height: 24px;
      background: url(/public/images/close.svg) center center no-repeat;
      color: #FFF;
      display: none;
    }

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
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;

        li {
          margin: 5px 20px;
          padding: 5px;
        }

        .air-nav__inner__nav-link, .air-nav__inner__nav-username {
          display: flex;
          width: 100%;
          height: 100%;
          padding: 0 8px;
          line-height: 40px;
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
      .air-nav--inner__nav-container {
        position: fixed;
        display: flex;
        justify-content: flex-start;
        align-items: unset;
        padding: 82px 0;
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

          li {
            margin: 0;
          }

          .air-nav__inner__nav-link {
            font-weight: bold;
          }
        }
      }

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

      .air-nav--visible {
        transform: none;
      }
    }


  }
</style>
