<template>
  <div class="air-graph-controls">
    <section class="air-graph-controls--choices">
      <div class="air-graph-controls--choices__arrow-left"></div>
      <div class="air-graph-controls--choices__arrow-right"></div>
      <button class="controls-button air-graph-controls--choices__day" @click="getConsumptionDay">JOUR</button>
      <button class="controls-button air-graph-controls--choices__week" @click="getConsumptionWeek">SEMAINE</button>
      <button class="controls-button air-graph-controls--choices__month" @click="getConsumptionMonth">MOIS</button>
      <button class="controls-button air-graph-controls--choices__year" @click="getConsumptionYear">ANNEE</button>
    </section>
    <section class="air-graph-controls--compare" hidden>
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
    },
    mounted () {
      document.addEventListener('keydown', evt => {
        const buttons = document.querySelectorAll('.controls-button');

        switch(evt.keyCode) {
          case '38': // UP
            break;
          case '40': // DOWN
            break;
        }
      });
    }
  }
</script>

<style lang="scss">
  .air-graph-controls {
    &--choices {
      display: flex;
      flex-direction: column;
      margin: 10px 5px;

      .controls-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFF;
        font-size: 25px;
        background: none;
        border: none;
        outline: none;
        width: 170px;

        &::before, &::after {
          content: '';
          background-size: 15px 15px;
          height: 15px;
          width: 15px;
        }

        &::before {
          background: url(/public/images/arrow-left.svg) left center no-repeat;
        }

        &::after {
          background: url(/public/images/arrow-right.svg) right center no-repeat;
        }
      }

      .controls-button:focus {
        color: #01a875;
      }

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
