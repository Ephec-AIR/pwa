<template>
    <div class="air-accordion">
        <slot></slot>
    </div>
</template>
<script>
export default{
    props : ['title'],
    data(){
        return {
            selectedIndex : 0,
            panels :[]
        }
    },
    methods:{
        movePanels(){
          let baseY = 0;
          this.panels.forEach((panel)=>{
              panel.$el.style.transform = `translateY(${baseY + panel._headerHeight * panel.index}px)`;
              
              if(panel.open){
                  baseY += panel._contentHeight;                
              }
          });
        }
    },
    mounted (){
      this.panels = this.$children;
      this.panels.forEach((panel,i)=> {
        panel.index = i;     
      }); 
      this.movePanels();          
    },
    
}

</script>
<style lang="scss">

    .air-accordion{
        font-family: Nunito;
        position : relative;
        width : 800px;
        max-width:800px;
        top : 15vh;
        margin : auto;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-family: Nunito;
        
    }

</style>
