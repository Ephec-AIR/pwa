<template>
  <div class="air-param">
      <ul class="air-param-list">
        <li class="air-param-list-profil__container">
          Profil
          <ul class="air-param-list-profil__datas">
            <li>
             <span class="air-param-list-profil-firstname__title">Nom</span>{{firstName}}
            </li>
            <li>
              <span  class="air-param-list-profil-lastname__title">Prenom</span>    {{lastName}}
            </li>
            <li>
              <span class="air-param-list-profil-postalCode__title">Code Postal</span>   {{postalCode}}
            </li>
          </ul>
        </li>
        <li class="air-param-list-House__container">
          Mon Habitat
        </li>
        <li class="air-param-list-OCR__container">
          Mon OCR
        </li>
        <li class="air-param-list-Datas__container">
          Mes Données
        </li>
      </ul>
  </div>
</template>

<script>
  export default{
    data (){
      return {
        firstName :'John',
        lastName :'Doe',
        postalCode :'1234'
      }

    },
    methods: {
      }  
    }
   
</script>

<style lang="scss">
  .air-param {
    height: 100%;
    display: flex;
    flex-direction: row;
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
    }

    .air-param-list li{
      margin-bottom: 10%;
    }





    .air-param-list-profil__titles{
      list-style: none;
      font-size : 20px;
    }


    .air-param-list-profil__datas li{
      font-size : 20px;
      color : #F34548;
      font-style: bold;
      list-style: none;
      
    }

    .air-param-list-profil__datas li span{
      font-size : 20px;
      color : black;
      font-style: bold;
     
      
    }

    .air-param-list-profil-firstname__title{
       margin-right : 30%;
    }

    .air-param-list-profil-lastname__title{
      margin-right: 20%;
    }

    .air-param-list-profil-postalCode__title{
      margin-right: 7%;
    }

    
</style>


