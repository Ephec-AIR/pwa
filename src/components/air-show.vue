<template>
  <div class="air-show">
    <h1 class="air-show--title">Bienvenue parmis nous ! </h1>
    <p class="air-show--subtitle">
      Laissez derrière vous vos veilles factures<br> de consommation électrique
      et devenez un consommacteur.
      Ensemble, influençons les habitudes de demain !
    </p>
  </div>
</template>

<script>
</script>

<style lang="scss">
  $text-color: rgba(0, 0, 0, 0.54);
  $nav-text-color: #464A3F;
  $button-color: rgb(255, 23, 68);
  $placeholder-color: rgba(255, 23, 68, 0.27);

  .air-show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 10px 20px;

    &--title {
      margin: 0;
      font-size: 36px;
      color: #FFF;
    }

    &--subtitle {
      font-size: 32px;
      font-weight: bold;
      color: $text-color;
    }
  }

  @media (max-width: 680px) {
    .air-show {
      width: 100%;

      &--title {
        font-size: 28px;
      }
    }
  }
</style>

