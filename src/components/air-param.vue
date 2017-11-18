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
    methods: {
      }  
    }
   
</script>

<style lang="scss">

  .air-param {   
    margin : 0;
    padding : 0;
    font-family : Nunito;
    display:flex;
    flex-direction : column;
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
      font-family: Nunito;
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


