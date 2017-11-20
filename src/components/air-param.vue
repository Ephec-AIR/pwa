<template>
  <div class="air-param">
      <!--
        <ul class="air-param-list">      
        <li class="air-param-list-profil__container">
          <button>Profil</button>      
          
        </li>
        <li class="air-param-list-House__container">
          <button>Mon habitat</button>
        </li>
        <li class="air-param-list-OCR__container">
         <button>Mon OCR</button> 
        </li>
        <li class="air-param-list-Datas__container">
          <button>Mes Données</button>
        </li>
      </ul>
      -->
      <air-accordion class="air-param__accordion">
        <air-accordion-panel  title="Profil">
          <ul>
            <li>Test1</li>
            <li></li>
            <li>test2</li>
            <li>test2</li>
            <li>test3</li>
            <li>test3</li>
          </ul>
        </air-accordion-panel>      
        <air-accordion-panel title="Mon habitat">
        </air-accordion-panel>
        <air-accordion-panel title="Mon OCR">
        </air-accordion-panel>
        <air-accordion-panel title="Mes données">
        </air-accordion-panel>
      </air-accordion>
  </div>
</template>

<script>
import AirAccordion from './air-accordion';
import AirAccordionPanel from './air-accordion-panel';
  export default{
    components:{
      AirAccordion,
      AirAccordionPanel
    },
    data (){
      return {
        firstName :'John',
        lastName :'Doe',
        postalCode :'1234'
      }
    },
    computed:{
      _getUser(){
        
      }
    },
    methods: {
      }  
    }
   
</script>

<style lang="scss">
  .air-param {   
    margin : 0;
    padding : 0;
   
    display:flex;
    flex-direction : column;
      & ul {
        list-style: none;
        display: grid;
        grid-template-columns: 50% 50%;
        font-size: 1.5em;

        &>li:nth-child(even){
          color: #F74547;
        }
      }

    
  }
   .air-param-list {
      list-style: none;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -10%;
      margin-left: -100px;
      font-size: 2em; 
      width: 25%; 
      &>*{
        width : 10em;
      }
    }
    .air-param-list button{
      background: transparent;
      border : none;
      font-size : 30px;
     
    }
    .air-param-list-profil__entries{
      list-style: none;
      font-size : 20px;
      text-align: left;
      display :grid;
      grid-template-columns: 150px 50px;
    }
    .air-param-list-profil__entries>*:nth-child(even){
      color: #f34548;
    }
    
</style>