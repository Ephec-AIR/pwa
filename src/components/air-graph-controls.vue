<template>
  <div class="air-graph-controls">
    <section class="air-graph-controls--choices">
      <div class="air-graph-controls--choices__container">
        <div class="air-graph-controls--choices__left-arrow" @click="selectChoice($event, -1)"></div>
        <button
          class="controls-button air-graph-controls--choices__day"
          data-type="day"
          @click="onClick($event, 'day')">
          JOUR
        </button>
        <div class="air-graph-controls--choices__right-arrow" @click="selectChoice($event, 1)"></div>
      </div>
      <div class="air-graph-controls--choices__container">
        <button class="controls-button air-graph-controls--choices__week"
          data-type="week"
          @click="onClick($event, 'week')">
          SEMAINE
        </button>
      </div>
      <div class="air-graph-controls--choices__container">
        <button
          class="controls-button air-graph-controls--choices__month"
          data-type="month"
          @click="onClick($event, 'month')">
          MOIS
        </button>
      </div>
      <div class="air-graph-controls--choices__container">
        <button
          class="controls-button air-graph-controls--choices__year"
          data-type="year"
          @click="onClick($event, 'year')">
          ANNEE
        </button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        RESPONSIVE_WIDTH: 800,
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
        if (this.viewportWidth <= this.RESPONSIVE_WIDTH) {
          this.buttons.forEach((b, index) => {
            b.classList.add('air-graph-controls--choices__focus');
            if (index === this.index) {
              b.style.opacity = 1;
              return;
            }
            b.style.opacity = 0;
          });
        } else {
          this.buttons.forEach((b, index) => {
            b.style.opacity = 1;
            if (index === this.index) {
              b.classList.add('air-graph-controls--choices__focus');
              return;
            }
            b.classList.remove('air-graph-controls--choices__focus');
          });
        }
      },
      getConsumption (type) {
        this.fetchAndSaveConsumption(type)
          .then(_ => {
            const checkboxes = document.querySelectorAll('.consumption-checkbox');
            checkboxes.forEach(checkbox => {
              this.$store.commit('SET_GRAPH_TO_SHOW', {graph: checkbox.dataset.graph, position: checkbox.dataset.position, toShow: checkbox.checked});
            });
          });
      },
      fetchAndSaveConsumption (type) {
        return new Promise ((resolve, reject) => {
          const averageButtonChecked = document.querySelector('.consumption-users--checkbox').checked;
          this.$store.dispatch('GET_CONSUMPTION', {type}).then((consumption => {
            this.$store.commit('CONSUMPTION_LABEL_TYPE', type);
            this.$store.commit('SAVE_CONSUMPTION', {consumption});

            if (averageButtonChecked) {
              this.$store.dispatch('GET_AVERAGE', {type}).then(average => {
                this.$store.commit('SAVE_AVERAGE', {average});
                resolve();
              });
            } else {
              resolve();
            }
          }));
        });
      },
      onClick (evt, type) {
        this.index = this.buttons.findIndex(b => b === evt.target);
        this.moveArrows();
        this.getConsumption(type);
      },
      moveIndex (evt, increment) {
        this.lastIndex = this.index;
        this.index += increment;

        if (this.index < 0) {
          this.index = this.buttons.length - 1;
        } else if (this.index >= this.buttons.length) {
          this.index = 0;
        }

        this.getConsumption(this.buttons[this.index].dataset.type);
        this.buttons[this.index].focus();
      },
      selectChoice (evt, increment) {
        if (this.viewportWidth > this.RESPONSIVE_WIDTH) return;
        this.moveIndex(evt, increment);
        this.moveChoicesWhenResponsive();
      },
      moveChoicesWhenResponsive () {
        this.buttons.forEach((b, index) => {
          if (index === this.index) {
            this.buttons[index].style.opacity = 1;
            return;
          }
          this.buttons[index].style.opacity = 0;
        });
      },
      moveArrows () {
        this.buttons.forEach((b, index) => {
          if (index === this.index) {
            this.buttons[index].classList.add('air-graph-controls--choices__focus');
            return;
          }
          this.buttons[index].classList.remove('air-graph-controls--choices__focus');
        });

        this.leftArrow.style.transform = `translateY(${this.index * this.DELTAY}px)`;
        this.rightArrow.style.transform = `translateY(${this.index * this.DELTAY}px)`;
      },
      onKeyDown (evt) {
        this.selectedButton = document.querySelector('.controls-button:focus');
        this.index = this.buttons.indexOf(this.selectedButton);
        this.lastIndex = this.index;

        switch(evt.keyCode) {
          case 38: // UP
            this.moveIndex(evt, -1)
            break;
          case 40: // DOWN
            this.moveIndex(evt, 1);
            break;
          default:
            break;
        }

        if (this.viewportWidth > this.RESPONSIVE_WIDTH) {
          this.moveArrows();
        } else {
          this.moveChoicesWhenResponsive();
        }
      }
    },
    mounted () {
      this.index = 2;
      this.buttons = Array.from(document.querySelectorAll('.controls-button'));
      this.leftArrow = document.querySelector('.air-graph-controls--choices__left-arrow');
      this.rightArrow = document.querySelector('.air-graph-controls--choices__right-arrow');

      window.addEventListener('resize', _ => this.onResize());
      document.querySelector('.air-graph-controls--choices__month').focus();
      document.querySelector('.air-graph-controls--choices__month').style.opacity = 1;
      document.addEventListener('keydown', this.onKeyDown);
      this.moveArrows();
      this.getConsumption('month');
      this.onResize();
    }
  }
</script>

<style lang="scss">
  $text-color: rgba(0, 0, 0, 0.54);
  $nav-text-color: #464A3F;
  $button-color: rgb(255, 23, 68);
  $placeholder-color: rgba(255, 23, 68, 0.27);

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
        margin: 5px 0;
      }
    }

    &--choices .air-graph-controls--choices__focus {
        color: $text-color;
    }
  }

  @media (max-width: 800px) {
    .air-graph-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
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
      transform: translate(0) !important;
    }

    .air-graph-controls--choices__right-arrow {
      transform: translate(0) !important;
    }
  }
</style>
