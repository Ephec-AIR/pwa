<template>
  <div class="air-graph-controls">
    <section class="air-graph-controls--choices">
      <button class="air-graph-controls--choices__day simple-button" @click="getConsumptionDay">JOUR</button>
      <button class="air-graph-controls--choices__week simple-button" @click="getConsumptionWeek">SEMAINE</button>
      <button class="air-graph-controls--choices__month simple-button" @click="getConsumptionMonth">MOIS</button>
      <button class="air-graph-controls--choices__year simple-button" @click="getConsumptionYear">ANNEE</button>
    </section>
    <section class="air-graph-controls--compare">
      <button class="simple-button">COMPARER</button>
    </section>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    methods: {
      ...mapActions({
        getConsumptionDay: 'GET_CONSUMPTION_DAY',
        getConsumptionWeek: 'GET_CONSUMPTION_WEEK',
        getConsumptionMonth: 'GET_CONSUMPTION_MONTH',
        getConsumptionYear: 'GET_CONSUMPTION_YEAR',
      })
    }
  }
</script>

<style lang="scss">
  .air-graph-controls {
    &--choices {
      display: flex;
      flex-direction: column;
      margin: 10px 5px;

      &__day, &__week, &__month, &__year {
        background: #00C853;
        margin: 5px 0;
      }
    }

    &--compare {
      button {
        background: #FF3D00;

      }
    }
  }
</style>
