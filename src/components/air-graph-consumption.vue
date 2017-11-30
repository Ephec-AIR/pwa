<template>
  <div class="consumption-type">
    <div class="consumption-now">
      <input type="checkbox" id="consumption-now" class="consumption-checkbox consumption-now--checkbox" data-graph="now" data-position="0" @change="show($event, '0', 'now')">
      <label for="consumption-now" class="consumption-label consumption-now--label">
        Ma consommation
      </label>
    </div>
    <div class="consumption-before">
      <input type="checkbox" id="consumption-before" class="consumption-checkbox consumption-before--checkbox" data-graph="before" data-position="1" @change="show($event, '1', 'before')">
      <label for="consumption-before" class="consumption-label consumption-before--label">
        Ma consommation d'avant
      </label>
    </div>
    <div class="consumption-users">
      <input type="checkbox" id="consumption-users" class="consumption-checkbox consumption-users--checkbox" data-graph="average" data-position="2" @change="showAndFetchAverageIfNeeded($event, '2', 'average')">
      <label for="consumption-users" class="consumption-label consumption-users--label">
        La moyenne des utilisateurs
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      show (evt, position, graph) {
        this.$store.commit('SET_GRAPH_TO_SHOW', {graph, position, toShow: evt.target.checked});
      },
      showAndFetchAverageIfNeeded (evt, position, graph) {
        const checked = evt.target.checked;
        if (checked) {
          this.$store.dispatch('GET_AVERAGE').then(average => {
            this.$store.commit('SAVE_AVERAGE', {average});
          });
        }
        this.show(evt, position, graph);
      }
    },
    computed: {
      type () {
        //console.log(this.$store.consumptionLabelType)
        return this.$store.consumptionLabelType;
      }
    }
  }
</script>

<style lang="scss">
  $text-color: rgba(0, 0, 0, 0.74);

  .consumption-type {
    display: flex;
    flex-direction: column;
    max-width: 350px;

    .consumption-now, .consumption-before, .consumption-users {
      margin: 5px 0;
      display: flex;
      align-items: center;
    }

    .consumption-checkbox {
      opacity: 0;
    }

    .consumption-checkbox:checked~.consumption-label::before {
      background: #FFF;
    }

    .consumption-label {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: $text-color;

      &::before {
        content: '';
        display: block;
        height: 14px;
        width: 14px;
        margin: 0 5px;
        border: 3px solid #FFF;
        border-radius: 2px;
        background: none;
      }
    }
  }

  @media (max-width: 680px) {
    .consumption-type {
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
</style>


