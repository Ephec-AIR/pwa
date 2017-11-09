<template>
  <div class="air-tips">
    <div class="air-tips--logo" @click="toggleTips"></div>
    <div class="air-tips-box">
      <h2 class="air-tips-box--title">Conseil du jour</h2>
      <p class="air-tips-box--content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent in nulla scelerisque neque varius rutrum vitae vel leo.
        Phasellus eget lorem quam. Fusce ultrices pretium ex eu rutrum.
        Praesent leo erat, condimentum at consequat eget, malesuada ac arcu.
        Sed vehicula tortor dui, eu viverra enim feugiat eu.
        Donec vitae magna a ipsum condimentum ultricies.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showTips: false
      }
    },
    methods: {
      toggleTips () {
        document.querySelector('.air-tips-box').classList.toggle('air-tips-box--hide');
      }
    }
  }
</script>

<style lang="scss">
  .air-tips {
    position: relative;

    &--logo {
      position: absolute;
      top: 2px;
      left: 5px;
      background: url(/public/images/bulb.png) left top no-repeat;
      background-size: contain;
      height: 5vw;
      width: 100%;
    }

    &-box {
      opacity: 1;
      max-width: 350px;
      padding: 5px 15px;
      border-radius: 5px;
      margin-left: 35px;
      background: #FFF;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      transform:  translateX(0);
      transition: opacity .3s cubic-bezier(0, 0, 0.3, 1),
        transform .5s cubic-bezier(0, 0, 0.3, 1);

      &--hide {
        opacity: 0;
        transform: translateX(-50px);
      }

      &--title {
        text-align: center;
        margin: 7px 0;
        font-size: 18px;
        color: #777;
      }

      &--content {
        margin: 0;
        font-size: 15px;
      }
    }
  }
</style>


