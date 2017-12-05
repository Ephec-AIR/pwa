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
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    background: #FFF;
    will-change: transform;
    &__button {
      width: 100%;
      height : 48px;
      line-height: 48px;
      font-size: 18px;
      font-weight: 500;
      border: none;
      border-bottom: 2px solid #848383;
      border-radius: 0px;
      background: #FFF;
      color: #444;
      outline: none;
    }
    &__container {
      padding: 16px;
      overflow-y: auto;
    }
  }
</style>