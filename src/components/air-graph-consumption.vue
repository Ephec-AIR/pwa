<template>
  <div class="consumption-type">
    <div class="consumption-now">
      <input
        type="checkbox"
        id="consumption-now"
        class="consumption-checkbox consumption-now--checkbox"
        data-graph="now"
        data-position="0"
        v-model="checked['now']"
        @change="show($event, '0', 'now')"
      />
      <label for="consumption-now" class="consumption-label consumption-now--label">
        Ma consommation
      </label>
    </div>
    <div class="consumption-before">
      <input
        type="checkbox"
        id="consumption-before"
        class="consumption-checkbox consumption-before--checkbox"
        data-graph="before"
        data-position="1"
        v-model="checked['before']"
        @change="show($event, '1', 'before')"
      />
      <label for="consumption-before" class="consumption-label consumption-before--label">
        Ma consommation d'avant
      </label>
    </div>
    <div class="consumption-users">
      <input type="checkbox"
        id="consumption-users"
        class="consumption-checkbox consumption-users--checkbox"
        data-graph="average"
        data-position="2"
        v-model="checked['average']"
        @change="showAndFetchAverageIfNeeded($event, '2', 'average')"
      />
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
        return this.$store.consumptionLabelType;
      },
      checked () {
        return this.$store.getters.checkedCheckbox;
      },
    }
  }
</script>

<style lang="scss">
  $text-color: rgba(0, 0, 0, 0.74);
  $graph-now-color: #d70206;
  $graph-before-color: #f05b4f;
  $graph-average-color: #f4c63d;

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

    .consumption-checkbox:checked~.consumption-now--label::before {
      background: $graph-now-color;
    }

    .consumption-checkbox:checked~.consumption-before--label::before {
      background: $graph-before-color;
    }

    .consumption-checkbox:checked~.consumption-users--label::before {
      background: $graph-average-color;
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

  @media (max-width: 800px) {
    .consumption-type {
      flex-direction: row;
      justify-content: center;
      max-width: none;
    }

    .consumption-type .consumption-label {
      font-size: 10px;
    }
  }
</style>


