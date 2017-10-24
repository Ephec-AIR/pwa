<template>
  <div class="air-not-found">
    <h1 class="air-not-found--title">Page non trouvée !</h1>
    <p class="air-not-found--subtitle">La page que vous essayez d'accéder n'existe pas.<p/>
  </div>
</template>

<style lang="scss">
  .air-not-found {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #333;
    color: #FFF;

    &--title {
      margin: 0;
      font-size: 45px;
    }

    &--subtitle {
      margin: 0;
      font-size: 25px;
      font-style: italic;
    }
  }
</style>
