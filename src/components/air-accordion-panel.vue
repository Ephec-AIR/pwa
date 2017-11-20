<template>
  <div class="air-accordion-panel" role="tabpanel">
    <button class="air-accordion-panel__button" @click="togglePanel" role="tab">
      {{title}}
    </button>
    <div class="air-accordion-panel__container" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    methods: {
      togglePanel (evt) {
        const customEvent = new CustomEvent('panel-change', {
          bubbles: true
        });

        this.$el.dispatchEvent(customEvent);
      },
    },
    computed: {
      content () {
        return this.$el.querySelector('.air-accordion-panel__container');
      },
      headerHeight () {
        return this.$el.querySelector('.air-accordion-panel__button').offsetHeight;
      }
    }
  }
</script>

<style lang="scss">
  $background-third-color: #D4E157;

  .air-accordion-panel {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    background: $background-third-color;
    transition: transform 0.3s ease-in, opacity 0.3s ease-in;
    will-change: transform, opacity;

    &__button {
      width: 100%;
      height : 48px;
      line-height: 48px;
      font-size: 18px;
      border: none;
      background: transparent;
      color: #777;
      border-bottom: 1px solid #444;
    }

    &__container {
      padding: 16px;
      overflow-y: auto;
      background: transparent;
    }

    .close {
      transition: opacity 0.3s ease;
      opacity: 0;
    }

    .open {
      padding: 5px;
      transition: opacity 1s ease;
      opacity: 1;
    }
  }

  .fade-enter-active,.fade-leave-active {
    transition : opacity 0.3s ease-in;
  }

  .slide-enter,.slide-leave-active {
    opacity: 0;
  }
</style>

