<template>
  <div class="logo">
    <h1>alexandre<span>canijo</span>.com</h1>
    <h2>web developer @ work</h2>
  </div>
</template>

<script>
export default {
  name: 'AcLogo',
};
</script>

<style lang="scss">
.logo {
  h1 {
    font-size: 1.9rem;
    line-height: 3rem;
    font-weight: bold;

    span {
      color: #c75000;
    }
  }

  h2 {
    font-size: 1rem;
    line-height: 2rem;
    font-weight: bold;
  }
}

@media (min-width: $tablet) {
  .logo {
    h1 {
      font-size: 4rem;
      line-height: 6rem;
    }

    h2 {
      font-size: 2rem;
      line-height: 3rem;
    }
  }
}
</style>
