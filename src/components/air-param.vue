<template>
  <div class="air-param">
    <div class="air-param--block">
      <ul class="param-list">
        <li><button class="myParam" @click="toggleForm">Mes paramètres</button></li>
        <li><button class ="OCR" @click="toggleForm">OCR</button></li>
      </ul>
      <transition name='fade'>
        <form action="#" method="post" name="profile" class="air-param-form--profile" v-if='display === 1'>          
            <label for="lastnameProfile">
              Nom : <input type="text" name="lastnameProfile" placeholder="Nom">
            </label>
            <label for="firstnameProfile">
                Prénom : <input type="text" name = "firstnameProfile" placeholder="Prénom">
            </label>
            <label for="mailProfile">
                Mail: <input type="text" name="mailProfile" placeholder="Mail"> 
            </label>
            <p id="log" class="log">{{log}}</p> 
            <button class="saveProfilButton" type="submit" @click.prevent ="confirmSubmit">Sauvegarder</button>
         </form>
      
         <form action="#" method="post" name="profile" class="air-param-form--OCR" v-if='display === 2'>          
            <label for="lastnameProfile">
              N° série : <input type="text" name="serialOCR" placeholder="numéro de série">
            </label>
             <p id="log" class="log">{{log}}</p> 
              <button class="saveOCRButton" type="submit" @click.prevent ="confirmSubmit">Sauvegarder</button>          
        </form>
      </transition>  
      
    </div>
  </div>
</template>

<script>
  export default{
    data (){

      return {

        display: 1 ,
        log :'' 

      }

    },
    methods: {
        toggleForm(e){
         
            if(e.target.classList.contains('myParam')){
                this.display = 1
            }else{
              this.display = 2
            }

            this.log ='';
        },
        confirmSubmit(evt){
          if(evt.target.innerText === 'Sauvegarder'){
            this.log = "Sauvegarde confirmer";
          }
        }
      }  
    }
   
</script>

<style lang="scss">
  .air-param {
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: #FFD400;
        .air-param--block{
            position: absolute;
            border-radius: 5px;
            left:35%;
            top:30%;
            height:60%;
            width: 50%;
            margin: auto;
            border: 1px solid black;
            box-shadow: 10px 5px 5px black;
            background-color: #FFF;
            .param-list{
              display : flex;
              list-style: none;
               & li {
                 margin:auto;

                 & button{  

                 border: none;
                 background-color: #01a875;
                 margin : auto;
                 border-radius : 5px;
                 transition: transform 0.2s ease-in,background-color 0.2s ease-in;
                 transform : scale(1.5);

                 &:hover{
                   transform : scale(2);
                   z-index: 1;
                   background-color: red;
                 }

                 }
               }    
               
            }
 
            form{
            position: relative;
            display: flex;
            flex-direction: column;
            top:10px;
            height: 100%;
            width: 100%; 
            margin: auto;
            padding : 10px;
                input{
                    text-align: center;
                    border-radius: 5px;
                    width: 100%;
                    height: 30px;
                    margin-left: auto;
                    margin-right:auto;
                    margin-top: 15px;
                    
                }
        

                    
        }

        .fade-enter-active, .fade-leave-active {
          transition: opacity 0.5s ease-in,transform 0.5s ease-in;
        }

        .fade-enter, .fade-leave-active{
          opacity: 0;
          transform: translateY(50px);
          z-index: 1;
          
        }

        .saveProfilButton{
          border: none;
          background-color: #01a875;
          margin : auto;
          border-radius : 5px;
          position: absolute;
          top : 65%;
          left : 45%;
          transition: transform 0.2s ease-in,background-color 0.2s ease-in;
          transform : scale(1.5);
          &:hover{
            transform : scale(2);
            z-index: 1;
            background-color: red;
          }
        }

        .saveOCRButton{
          border: none;
          background-color: #01a875;
          margin : auto;
          border-radius : 5px;
          position: absolute;
        
          top : 65%;
          left : 45%;
          transition: transform 0.2s ease-in,background-color 0.2s ease-in;
          transform : scale(1.5);
          &:hover{
            transform : scale(2);
            z-index: 1;
            background-color: red;
          }
        }

        .log{
          z-index: 2;
        }

        }
  }
</style>

