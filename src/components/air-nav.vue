<template>
  <header class="air-nav">
    <div class="air-nav--inner">
      <nav class="air-nav--inner__nav-container">
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

</style>
