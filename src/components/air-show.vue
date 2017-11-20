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
    }
  }
</style>

