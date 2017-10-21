<template>
  <header class="air-nav">
    <div class="air-nav--inner">
      <nav class="air-nav--inner__nav-container" role="navigation">
        <ul class="air-nav--inner__nav-content">
          <li>
            <router-link to="/home" class="air-nav__inner__nav-link" aria-label="home">Home</router-link>
          </li>
          <li>
            <a href="https://air-forum.ephec-ti.org" class="air-nav__inner__nav-link" aria-label="forum">Forum</a>
          </li>
          <li>
            <router-link to="/parameters" class="air-nav__inner__nav-link" aria-label="parameter">Parameter</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

}
</script>


<style lang="scss">
  .air-nav--inner__nav-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #FFF;
    width: 100%;

    .air-nav--inner__nav-content {
      margin: 0;
      padding: 0;
      max-height: 80px;
      display: flex;
      list-style: none;

      li {
        margin: 5px 10px;
        padding: 5px;
      }

      .air-nav__inner__nav-link {
        font-size: 16px;
        color: #37474F;
        text-decoration: none;
      }
    }
  }
</style>
