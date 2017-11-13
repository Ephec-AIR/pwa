<template>
  <div class="air-show">
    <h1 class="air-show--title">Bienvenue sur AIR !</h1>
    <p class="air-show--subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut et orci vestibulum, aliquet nunc vitae, tincidunt enim.
      Duis tincidunt justo eget lectus ornare, id euismod sem lacinia.
    </p>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .air-show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 10px 20px;

    &--title {
      font-size: 36px;
      color: #FFF;
    }

    &--subtitle {
      font-size: 32px;
      font-weight: bold;
      color: #01a875;
    }
  }

  @media (max-width: 530px) {
    .air-show {
      width: 100%;
    }
  }
</style>

