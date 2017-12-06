<template>
  <div class="air-tips">
    <div class="air-tips--logo__container" @click="toggleTips">
      <div class="air-tips--logo"></div>
    </div>
    <div class="air-tips-box-container">
      <div class="air-tips-box-ripple air-tips-box-ripple--hide"></div>
      <div class="air-tips-box air-tips-box--hide">
        <h2 class="air-tips-box--title">Conseil du jour</h2>
        <p class="air-tips-box--content">
          {{tip}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Constant from '../constants';
  import idbKeyVal from 'idb-keyval';

  export default {
    data () {
      return {
        showTips: false,
        tip: ''
      }
    },
    methods: {
      toggleTips () {
        const ripple = document.querySelector('.air-tips-box-ripple');
        const tipsBox = document.querySelector('.air-tips-box');

        const rippleTransitionEnd = evt => {
          tipsBox.classList.remove('air-tips-box--hide');
          evt.target.removeEventListener('transitionend', rippleTransitionEnd);
        }

        const tipsBoxTransitionEnd = evt => {
          ripple.classList.add('air-tips-box-ripple--hide');
          evt.target.removeEventListener('transitionend', tipsBoxTransitionEnd);
        }

        if (tipsBox.classList.contains('air-tips-box--hide')) {
          ripple.classList.remove('air-tips-box-ripple--hide');
          ripple.addEventListener('transitionend', rippleTransitionEnd);
        } else {
          tipsBox.classList.add('air-tips-box--hide');
          tipsBox.addEventListener('transitionend', tipsBoxTransitionEnd);

        }
      }
    },
    mounted () {
      fetch(`${Constant.API_URL}/tip`)
        .then(response => response.json())
        .then(async response => {
          this.tip = response.tip;
          await idbKeyVal.set('tip', response.tip);
        })
        .catch(async err => {
          try {
            const tip = await idbKeyVal.get('tip');
            this.tip = tip;
          } catch (e) {
            console.log(e);
          }
          console.error(err);
        });
    }
  }
</script>

<style lang="scss">
  $text-color: rgba(0, 0, 0, 0.54);
  $nav-text-color: #464A3F;
  $button-color: rgb(255, 23, 68);
  $placeholder-color: rgba(255, 23, 68, 0.27);

  .air-tips {
    position: absolute;
    top: 10px;
    left: 10px;
    margin: 0 10px 10px 0;
    z-index: 2;
    pointer-events: none;

    &--logo__container {
      margin-bottom: 5px;
      position: relative;
      border-radius: 50%;
      background: $button-color;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
      height: 40px;
      width: 40px;
      pointer-events: auto;
    }

    &--logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url(/public/images/bulb.webp) center center no-repeat;
      background-size: contain;
      height: 70%;
      width: 100%;
    }

    &-box {
      position: relative;
      opacity: 1;
      padding: 5px 15px;
      border-radius: 5px;
      background: #FFF;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      transition: opacity .2s cubic-bezier(0, 0, 0.3, 1);
      will-change: opacity;

      &-container {
        position: relative;
        max-width: 292px;
        overflow: hidden;
      }

      &-ripple {
        position: absolute;
        top: -392px;
        left: -392px;
        height: 850px;
        width: 850px;
        border-radius: 50%;
        transform-origin: 50% 50%;
        transform: scale(1);
        opacity: 1;
        background: #FFF;
        transition: opacity .5s cubic-bezier(0, 0, 0.3, 1),
          transform .5s cubic-bezier(0, 0, 0.3, 1);
        will-change: opacity, transform;
        backface-visibility: hidden;

        &--hide {
          opacity: 0;
          transform: scale(0.01);
        }
      }

      &--hide {
        opacity: 0;
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


