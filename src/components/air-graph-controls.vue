<template>
  <div class="air-graph-controls">
    <section class="air-graph-controls--choices">
      <div class="air-graph-controls--choices__container">
        <div class="air-graph-controls--choices__left-arrow" @click="selectChoice(-1)"></div>
        <button class="controls-button air-graph-controls--choices__day" @focus="getConsumptionDay">JOUR</button>
        <div class="air-graph-controls--choices__right-arrow" @click="selectChoice(1)"></div>
      </div>
      <div class="air-graph-controls--choices__container">
        <button class="controls-button air-graph-controls--choices__week" @focus="getConsumptionWeek">SEMAINE</button>
      </div>
      <div class="air-graph-controls--choices__container">
        <button class="controls-button air-graph-controls--choices__month" @focus="getConsumptionMonth">MOIS</button>
      </div>
      <div class="air-graph-controls--choices__container">
        <button class="controls-button air-graph-controls--choices__year" @focus="getConsumptionYear">ANNEE</button>
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
        DELTAY: 41,
        viewportWidth: 0,
        lastIndex: 0,
        index: 0,
        buttons: null,
        leftArrow: null,
        rightArrow: null,
        selectedButton: null
      }
    },
    methods: {
      onResize () {
        this.viewportWidth = window.innerWidth;
      },
      ...mapActions({
        getConsumptionDay: 'GET_CONSUMPTION_DAY',
        getConsumptionWeek: 'GET_CONSUMPTION_WEEK',
        getConsumptionMonth: 'GET_CONSUMPTION_MONTH',
        getConsumptionYear: 'GET_CONSUMPTION_YEAR',
      }),
      onTouchStart (evt) {
        if (!(evt.target.classList.contains('air-graph-controls'))) {
          return;
        }

        this.startX = evt.touches[0].pageX;
      },
      onTouchMove (evt) {

      },
      onTouchEnd (evt) {

      },
      moveIndex (increment) {
        this.lastIndex = this.index;
        this.index += increment;

        if (this.index < 0) {
          this.index = this.buttons.length - 1;
        } else if (this.index >= this.buttons.length) {
          this.index = 0;
        }

        this.buttons[this.index].focus();
      },
      selectChoice (increment) {
        if (this.viewportWidth > 530) return;
        this.moveIndex(increment);
        this.moveChoicesWhenResponsive();
      },
      moveChoicesWhenResponsive () {
        this.buttons[this.lastIndex].style.opacity = 0;
        this.buttons[this.index].style.opacity = 1;
      },
      moveArrows () {
        this.leftArrow.style.transform = `translateY(${this.index * this.DELTAY}px)`;
        this.rightArrow.style.transform = `translateY(${this.index * this.DELTAY}px)`;
      },
      onKeyDown (evt) {
        this.selectedButton = document.querySelector('.controls-button:focus');
        this.index = this.buttons.indexOf(this.selectedButton);
        this.lastIndex = this.index;

        switch(evt.keyCode) {
          case 38: // UP
            this.moveIndex(-1)
            break;
          case 40: // DOWN
            this.moveIndex(1);
            break;
          default:
            break;
        }

        if (this.viewportWidth > 530) {
          this.moveArrows();
        } else {
          this.moveChoicesWhenResponsive();
        }
      }
    },
    mounted () {
      this.buttons = Array.from(document.querySelectorAll('.controls-button'));
      this.leftArrow = document.querySelector('.air-graph-controls--choices__left-arrow');
      this.rightArrow = document.querySelector('.air-graph-controls--choices__right-arrow');

      window.addEventListener('resize', _ => this.onResize());
      document.querySelector('.air-graph-controls--choices__day').focus();
      document.querySelector('.air-graph-controls--choices__day').style.opacity = 1;
      document.addEventListener('keydown', this.onKeyDown)
      this.onResize();
    }
  }
</script>

<style lang="scss">
  .air-graph-controls {
    &--choices {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
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

  @media (max-width: 530px) {
    .air-graph-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 50px;

      &__choices {

      }
    }

    .air-graph-controls--choices__container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .controls-button {
      opacity: 0;
    }

    .air-graph-controls--choices__left-arrow {
      transform: translate(0);
    }

    .air-graph-controls--choices__right-arrow {
      transform: translate(0);
    }
  }
</style>
