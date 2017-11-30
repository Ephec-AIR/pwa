<template>
  <div class="air-price">
    {{gain}}
  </div>
</template>

<script>
export default {
  computed: {
    gain() {
      const gain = this.$store.getters.gain;
      return `${gain >= 0 ? '+' : ''} ${Math.round((gain * 100) / 100)} €`;
    }
  }
}
</script>


<style lang="scss">
  $text-color: rgb(255, 23, 68);

  .air-price {
    margin: 5px 0;
    padding: 5px 10px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: $text-color;
    border: 2px solid $text-color;
  }
</style>
