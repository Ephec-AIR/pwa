<template>
  <div class="air-param">
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
  </div>
</template>

<script>
  import AirAccordion from './air-accordion';
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
      }
    },
    methods: {
      sync () {
        this.$store.dispatch('SYNC', this.user);
      },
      update () {
        this.$store.dispatch('UPDATE_PROFILE', {postalCode: this.user.postalCode, supplier: this.user.supplier})
      }
    }
  }
</script>

<style lang="scss">
  $text-color: rgba(0, 0, 0, 0.74);
  $nav-text-color: #464A3F;
  $button-color: rgb(255, 23, 68);
  $placeholder-color: rgba(255, 23, 68, 0.27);

  .air-param {
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
    }
  }
</style>
