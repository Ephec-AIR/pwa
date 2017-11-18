<template>
  <div  class="air-accordion-panel" >
      <button class="air-accordion-panel__button" @click.prevent="togglePanel">
          {{title}}
      </button>
        <div class="air-accordion-panel__container" id="content" v-bind:class="{close:!open}">
          <slot></slot> 
        </div>    
  </div>
</template>
<script>

export default {
    props: ['title'],
    data() {
      return{
        index : 0,
        open : false
      }
    },
    methods:{
      togglePanel(){
          this.open = !this.open
          this.$parent.movePanels();
          }
    },
  computed : {
      _headerHeight(){
          return this.$el.querySelector('button').offsetHeight;
      },
      _contentHeight(){
          return this.$el.querySelector('.air-accordion-panel__container').offsetHeight;
      },
      
    },
    mounted(){
        
    }
}
</script>
<style lang="scss">
  .air-accordion-panel{
      position: absolute;  
      width: 100%;
      font-family: Nunito;
      display: flex;
      flex-direction: column;
      overflow-y : auto;
      & button{
          width: 100%;
          height : 48px;
          line-height: 48px;
          border: none;
          font-size: 48px;
          text-align: left;
          background: transparent;
          border-bottom: 1px solid #444;  
          &:focus{
              background: #333;
          }
      }
  }

  .close{
      opacity: 0;
  }

  .slide-enter-active,.slide-leave-active{
      transition : max-height 0.3s ease-in;
  }

  .slide-enter,.slide-leave-active{
     max-height: 0;
      visibility: hidden;
  }
</style>


