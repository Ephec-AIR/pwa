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
          <input type="text" name="postalCode" v-model="user.postalCode" class="air-param__profile-postalcode" placeholder="code postal...">
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
        this.$store.dispatch('UPDATE_PROFILE', this.user.postalCode)
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
      height: 30px;
      width: 100%;
      margin: 5px 0;
      padding-left: 5px;
      font-size: 16px;
      color: $text-color;
      border-radius: 3px;
      border: none;
    }
  }
</style>

