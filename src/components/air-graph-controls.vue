<template>
  <div class="air-graph-controls">
    <section class="air-graph-controls--choices">
      <div class="air-graph-controls--choices__container">
        <div class="air-graph-controls--choices__left-arrow"></div>
        <button class="controls-button air-graph-controls--choices__day" @click="getConsumptionDay">JOUR</button>
        <div class="air-graph-controls--choices__right-arrow"></div>
      </div>
      <div class="air-graph-controls--choices__container">
        <button class="controls-button air-graph-controls--choices__week" @click="getConsumptionWeek">SEMAINE</button>
      </div>
      <div class="air-graph-controls--choices__container">
        <button class="controls-button air-graph-controls--choices__month" @click="getConsumptionMonth">MOIS</button>
      </div>
      <div class="air-graph-controls--choices__container">
        <button class="controls-button air-graph-controls--choices__year" @click="getConsumptionYear">ANNEE</button>
      </div>
    </section>
    <section class="air-graph-controls--compare" hidden>
      <button class="simple-button">COMPARER</button>
    </section>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    data () {
      return {
        index: 0
      }
    },
    methods: {
      ...mapActions({
        getConsumptionDay: 'GET_CONSUMPTION_DAY',
        getConsumptionWeek: 'GET_CONSUMPTION_WEEK',
        getConsumptionMonth: 'GET_CONSUMPTION_MONTH',
        getConsumptionYear: 'GET_CONSUMPTION_YEAR',
      })
    },
    mounted () {
      document.querySelector('.air-graph-controls--choices__day').focus();
      document.addEventListener('keydown', evt => {
        const DELTAY = 41;
        const FULL_DELTAY = 3 * 41;
        const buttons = Array.from(document.querySelectorAll('.controls-button'));
        const selectedButton = document.querySelector('.controls-button:focus');
        const leftArrow = document.querySelector('.air-graph-controls--choices__left-arrow');
        const rightArrow = document.querySelector('.air-graph-controls--choices__right-arrow');
        let index = buttons.indexOf(selectedButton);

        switch(evt.keyCode) {
          case 38: // UP
            index = index - 1;
            break;
          case 40: // DOWN
            index = index + 1;
            break;
          default:
            break;
        }

        if (index < 0) {
          index = buttons.length - 1;
        } else if (index >= buttons.length) {
          index = 0;
        }

        leftArrow.style.transform = `translateY(${index * DELTAY}px)`;
        rightArrow.style.transform = `translateY(${index * DELTAY}px)`;
        buttons[index].focus();
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

      &__container {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .controls-button {
        color: #FFF;
        font-size: 25px;
        background: none;
        border: none;
        outline: none;
        width: 150px;

        &:focus {
           color: #01a875;
        }
      }

      &__left-arrow, &__right-arrow{
        background-size: 15px 15px;
        height: 15px;
        width: 15px;
        transition: transform .3s cubic-bezier(0, 0, 0.3, 1);
        will-change: transform;
      }

      &__left-arrow {
        background: url(/public/images/arrow-left.svg) left center no-repeat;
      }

      &__right-arrow {
        background: url(/public/images/arrow-right.svg) right center no-repeat;
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
