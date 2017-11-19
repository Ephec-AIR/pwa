<template>
  <div class="air-accordion-panel" >
    <button class="air-accordion-panel__button" @click.prevent="togglePanel" >
      {{title}}
    </button>
    <div class="air-accordion-panel__container" id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    data () {
      return {
        index : 0,
        open : false
      }
    },
    methods: {
      togglePanel () {
        this.open = !this.open;
        this.managePanel();
      },
      managePanel() {
        if (this.open) {
          this.$el.querySelector(".air-accordion-panel__container").classList.remove('close');
          this.$el.querySelector(".air-accordion-panel__container").classList.add('open');
        } else {
          this.$el.querySelector(".air-accordion-panel__container").classList.remove('open');
          this.$el.querySelector(".air-accordion-panel__container").classList.add('close');
        }

        this.$parent.movePanels();
      }
    },
    computed: {
      _headerHeight () {
          return this.$el.querySelector('button').offsetHeight;
      },
      _contentHeight () {
          return this.$el.querySelector('.air-accordion-panel__container').offsetHeight;
      }
    },
    mounted () {
      this.managePanel();
    }
  }
</script>
<style lang="scss">
  $background-first-color: #DBEB41;
  $background-second-color: #C0ED70;
  $background-third-color: #C7E967;

  .air-accordion-panel {
    position: absolute;
    width: 100%;
    font-family: Nunito;
    display: flex;
    flex-direction: column;
    overflow-y : auto;
    transition: transform 0.3s ease-in, opacity 0.3s ease-in;
    background: transparent;

    & button {
      width: 100%;
      height : 48px;
      line-height: 48px;
      border: none;
      font-size: 48px;
      text-align: left;
      background: transparent;
      border-bottom: 1px solid #000;
    }

    .close {
      transition: opacity 0.3s ease;
      opacity: 0;
    }

    .open {
      transition: opacity 1s ease;
      opacity: 1;
    }
  }



  .fade-enter-active,.fade-leave-active{
      transition : opacity 0.3s ease-in;
  }

  .slide-enter,.slide-leave-active{
     opacity:0;
  }
</style>

