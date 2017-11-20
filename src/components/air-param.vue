<template>
  <div class="air-param">
<<<<<<< HEAD
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
        </form>
      </transition>
      <transition name='fade'>
         <form action="#" method="post" name="profile" class="air-param-form--OCR" v-if='display === 2'>          
            <label for="lastnameProfile">
              N° série : <input type="text" name="serialOCR" placeholder="numéro de série">
            </label>
                       
        </form>
      </transition>  
        
    </div>
=======
    <air-accordion class="air-param__accordion">
      <air-accordion-panel title="Profil" aria-expanded="true">
        <p>Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers forensium rerum; Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, non iudicium clamans.</p>
        <p>Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut nisi impetraverint, non inmorantur.</p>
        <p>Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel sedandos omnis professio medendi torpescit, excogitatum est adminiculum sospitale nequi amicum perferentem similia videat, additumque est cautionibus paucis remedium aliud satis validum, ut famulos percontatum missos quem ad modum valeant noti hac aegritudine colligati, non ante recipiant domum quam lavacro purgaverint corpus. ita etiam alienis oculis visa metuitur labes.</p>
      </air-accordion-panel>
      <air-accordion-panel title="OCR">
        <p>Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers forensium rerum; Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, non iudicium clamans.</p>
        <p>Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut nisi impetraverint, non inmorantur.</p>
        <p>Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel sedandos omnis professio medendi torpescit, excogitatum est adminiculum sospitale nequi amicum perferentem similia videat, additumque est cautionibus paucis remedium aliud satis validum, ut famulos percontatum missos quem ad modum valeant noti hac aegritudine colligati, non ante recipiant domum quam lavacro purgaverint corpus. ita etiam alienis oculis visa metuitur labes.</p>
      </air-accordion-panel>
      <air-accordion-panel title="Test">
        <p>Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers forensium rerum; Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, non iudicium clamans.</p>
        <p>Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut nisi impetraverint, non inmorantur.</p>
        <p>Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel sedandos omnis professio medendi torpescit, excogitatum est adminiculum sospitale nequi amicum perferentem similia videat, additumque est cautionibus paucis remedium aliud satis validum, ut famulos percontatum missos quem ad modum valeant noti hac aegritudine colligati, non ante recipiant domum quam lavacro purgaverint corpus. ita etiam alienis oculis visa metuitur labes.</p>
      </air-accordion-panel>
    </air-accordion>
>>>>>>> 0c9539085ca245f60a624ccad53cfe8cc7f0c02d
  </div>
</template>

<script>
<<<<<<< HEAD
  export default{
    data (){

      return {

        display: 1  

      }

    },
    methods: {
        toggleForm(e){
         
            if(e.target.classList.contains('myParam')){
                this.display = 1
            }else{
              this.display = 2
            }
        }
      }  
    }
   
=======
  import AirAccordion from './air-accordion';
  import AirAccordionPanel from './air-accordion-panel';

  export default {
    components: {
      AirAccordion,
      AirAccordionPanel
    },
    data () {
      return {
        firstName :'John',
        lastName :'Doe',
        postalCode :'1234'
      }
    }
  }
>>>>>>> 0c9539085ca245f60a624ccad53cfe8cc7f0c02d
</script>

<style lang="scss">
  .air-param {
<<<<<<< HEAD
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: #FFD400;
        .air-param--block{
            position: absolute;
            border-radius: 5px;
            left:35%;
            top:30%;
            height:50%;
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

        }
=======
    display: flex;
    width: 100%;
>>>>>>> 0c9539085ca245f60a624ccad53cfe8cc7f0c02d
  }
</style>

