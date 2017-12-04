<template>
  <div class="air-param">
<<<<<<< HEAD
  
    <air-accordion class="air-param__accordion">
  
      <air-accordion-panel title="Profil">
  
        <p>Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers
  
          forensium rerum; Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, non iudicium clamans.</p>
  
  
  
        <p>Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut nisi impetraverint,
  
          non inmorantur.</p>
  
  
  
        <p>Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel sedandos omnis professio medendi torpescit, excogitatum est adminiculum sospitale nequi amicum perferentem similia videat, additumque est cautionibus paucis
  
          remedium aliud satis validum, ut famulos percontatum missos quem ad modum valeant noti hac aegritudine colligati, non ante recipiant domum quam lavacro purgaverint corpus. ita etiam alienis oculis visa metuitur labes.</p>
  
      </air-accordion-panel>
  
      <air-accordion-panel title="OCR">
  
        <p>Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers
  
          forensium rerum; Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, non iudicium clamans.</p>
  
  
  
        <p>Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut nisi impetraverint,
  
          non inmorantur.</p>
  
  
  
        <p>Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel sedandos omnis professio medendi torpescit, excogitatum est adminiculum sospitale nequi amicum perferentem similia videat, additumque est cautionibus paucis
  
          remedium aliud satis validum, ut famulos percontatum missos quem ad modum valeant noti hac aegritudine colligati, non ante recipiant domum quam lavacro purgaverint corpus. ita etiam alienis oculis visa metuitur labes.</p>
  
      </air-accordion-panel>
  
      <air-accordion-panel title="Test">
  
        <p>Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers
  
          forensium rerum; Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, non iudicium clamans.</p>
  
  
  
        <p>Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut nisi impetraverint,
  
          non inmorantur.</p>
  
  
  
        <p>Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel sedandos omnis professio medendi torpescit, excogitatum est adminiculum sospitale nequi amicum perferentem similia videat, additumque est cautionibus paucis
  
          remedium aliud satis validum, ut famulos percontatum missos quem ad modum valeant noti hac aegritudine colligati, non ante recipiant domum quam lavacro purgaverint corpus. ita etiam alienis oculis visa metuitur labes.</p>
  
      </air-accordion-panel>
  
    </air-accordion>
  
=======
    <air-accordion class="air-param__accordion">
      <air-accordion-panel title="Sync" aria-expanded="true">
        <form class="air-param__sync" @submit.prevent="sync">
          <input type="text" name="serial" v-model="user.serial" class="air-param__sync-serial" placeholder="serial...">
          <input type="text" name="secret" v-model="user.secret" class="air-param__sync-secret" placeholder="secret...">
          <button type="submit" class="air-param__sync-button simple-button" tabindex="0">Synchroniser</button>
        </form>
      </air-accordion-panel>
      <air-accordion-panel title="Profil">
        <form class="air-param__profile" @submit.prevent="update">
          <div class="air-param__profile-inputs">
            <input type="text" name="postalCode" v-model="user.postalCode" class="air-param__profile-postalcode" placeholder="code postal...">
            <select name="supplier" v-model="user.supplier" class="air-param__profile-supplier">
              <option value="EDF Luminus">EDF Luminus</option>
              <option value="Engie Electrabel">Engie Electrabel</option>
              <option value="Eni">Eni</option>
              <option value="Essent">Essent</option>
              <option value="Lampiris">Lampiris</option>
            </select>
          </div>
          <button type="submit" class="air-param__profile-button simple-button" tabindex="0">Mettre à jour</button>
        </form>
      </air-accordion-panel>
    </air-accordion>
>>>>>>> de101d2dacecfacd5b898fcec84c83e9a0ddb8e2
  </div>
</template>

<script>
  import AirAccordion from './air-accordion';
<<<<<<< HEAD
  
  import AirAccordionPanel from './air-accordion-panel';
  
  export default {
  
    components: {
  
      AirAccordion,
  
      AirAccordionPanel
  
    },
  
    data() {
  
      return {
  
        firstName: 'John',
  
        lastName: 'Doe',
  
        postalCode: '1234'
  
=======
  import AirAccordionPanel from './air-accordion-panel';

  export default {
    components: {
      AirAccordion,
      AirAccordionPanel
    },
    data () {
      return {
        serial: '',
        secret: ''
      }
    },
    computed: {
      user () {
        return this.$store.state.user;
>>>>>>> de101d2dacecfacd5b898fcec84c83e9a0ddb8e2
      }
  
  
  
    },
<<<<<<< HEAD
  
    methods: {}
  
=======
    methods: {
      sync () {
        this.$store.dispatch('SYNC', this.user);
      },
      update () {
        console.log(this.user.supplier)
        this.$store.dispatch('UPDATE_PROFILE', {postalCode: this.user.postalCode, supplier: this.user.supplier})
      }
    }
>>>>>>> de101d2dacecfacd5b898fcec84c83e9a0ddb8e2
  }
</script>

<style lang="scss">
  $text-color: rgba(0, 0, 0, 0.74);
  $nav-text-color: #464A3F;
  $button-color: rgb(255, 23, 68);
  $placeholder-color: rgba(255, 23, 68, 0.27);

  .air-param {
<<<<<<< HEAD
  
    margin: 0;
  
    padding: 0;
  
    font-family: Nunito;
  
    display: flex;
  
    flex-direction: column;
  
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
  
    &>* {
  
      width: 10em;
  
=======
    display: flex;
    justify-content: center;
    width: 100%;

    &__sync, &__profile {
      display: flex;
      flex-direction: column;
    }

    &__sync input, &__profile input {
      height: 40px;
      width: 100%;
      margin: 5px 0;
      padding-left: 5px;
      font-size: 14px;
      color: $text-color;
      border-radius: 3px;
      border: 1px solid #777;
    }

    &__sync-button, &__profile-button {
      padding: 10px 25px;
    }

    &__profile-inputs {
      display: flex;
      align-items: center;
    }

    &__profile-postalCode, &__profile-supplier {
      margin: 5px
>>>>>>> de101d2dacecfacd5b898fcec84c83e9a0ddb8e2
    }
  
  }
  
  
  
  .air-param-list button {
  
    background: transparent;
  
    border: none;
  
    font-size: 30px;
  
    font-family: Nunito;
  
  }
  
  
  
  .air-param-list-profil__entries {
  
    list-style: none;
  
    font-size: 20px;
  
    text-align: left;
  
    display: grid;
  
    grid-template-columns: 150px 50px;
  
  }
  
  
  
  .air-param-list-profil__entries>*:nth-child(even) {
  
    color: #f34548;
  
  }
</style>

<<<<<<< HEAD

=======
>>>>>>> de101d2dacecfacd5b898fcec84c83e9a0ddb8e2
