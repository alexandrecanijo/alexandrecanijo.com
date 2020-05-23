<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
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
