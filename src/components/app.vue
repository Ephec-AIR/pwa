<template>
  <div class="main">
    <air-nav></air-nav>
    <router-view>
      <!-- router views -->
    </router-view>
    <air-toast :message="toast.message" :duration="toast.duration" v-show="message"></air-toast>
  </div>
</template>

<script>
  import Vue from 'vue';
  import AirNav from './air-nav';
  import AirToast from './air-toast';

  export default {
    components: {
      AirNav,
      AirToast
    },
    data () {
      return {
      }
    },
    computed: {
      toast () {
        return this.$store.state.toast;
      }
    }
  }
</script>

<style lang="scss">
  .main {
    height: 100%;
  }
</style>

