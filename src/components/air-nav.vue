<template>
  <div class="air-nav">
    <header class="air-nav__header">
      <button class="air-nav__show" ref="showNav" @click="show"></button>
      <div class="air-nav__logo-container">
        <router-link to="home" class="air-nav__logo-container-logo" href="/" aria-label="home"></router-link>
      </div>
      <div class="air-nav__username" v-if="isLoggedIn">{{username}}</div>
    </header>
    <div class="air-nav__nav-wrapper" ref="navWrapper">
      <nav class="air-nav__nav-container" role="navigation" @click="blockClicks" ref="nav">
        <section class="air-nav__banner">
          <h2 class="air-nav__banner-title">Air</h2>
        </section>
        <button class="air-nav__close" ref="hideNav" @click="hide"></button>
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
        </ul>
      </nav>
    </div>
  </div>
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
      if (!(this.$refs.navWrapper.classList.contains('air-nav--visible'))) {
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
      this.$refs.navWrapper.classList.add('air-nav--visible');
    },
    hide (evt) {
      console.log(evt);
      this.$refs.navWrapper.classList.remove('air-nav--visible');
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
    height: 60px;

    &__header {
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      width: 100%;
      height: 60px;
      padding: 0 8px;
      background: #FFF;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      z-index: 10000;
    }

    &__username {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
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

    &__show {
      padding: 0 0 0 40px;
      border: none;
      width: 24px;
      height: 24px;
      background: url(/public/images/hamburger-bold.svg) left center no-repeat;
      color: #FFF;
    }

    &__nav-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
      z-index: 10000;

      &--visible {
        pointer-events: auto;
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #000;
        opacity: 0;
        transition: opacity .3s cubic-bezier(0, 0, 0.3, 1);
        will-change: opacity;
      }
    }

    &__banner {
      display: flex;
      align-items: flex-end;
      height: 180px;
      padding: 16px;
      background: linear-gradient(45deg, #8BC34A, #558B2F);
    }

    &__banner-title {
      margin: 0;
      padding: 0;
      color: #FFF;
    }

    &__nav-container {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 75%;
      max-width: 400px;
      height: 100%;
      background: #FFF8E1;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
      transform: translateX(-102%);
      transition: transform .3s cubic-bezier(0, 0, 0.3, 1);
      will-change: transform;
    }

    &--visible &__nav-container {
      transform: none;
    }

    &--visible::before {
      opacity: 0.7;
    }

    &__close {
      position: absolute;
      top: 10px;
      left: 10px;
      border: none;
      width: 24px;
      height: 24px;
      background: url(/public/images/close.svg) center center no-repeat;
      color: #FFF;
    }

    &__nav-content {
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      overflow-x: hidden;
    }

    &__nav-link, &__nav-username {
      display: flex;
      width: 100%;
      height: 100%;
      padding: 0 8px;
      line-height: 45px;
    }

    &__nav-link {
      font-size: 20px;
      color: #01a875;
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
</style>
