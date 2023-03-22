<template>
  <div class="main">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://www.alexandrecanijo.com' + this.$route.path,
        },
      ],
    };
  },
};
</script>
