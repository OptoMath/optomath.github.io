<template lang="pug">
  .app
    AppHeader
    router-view
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>
<style lang="scss">
@import url('https://use.fontawesome.com/releases/v5.14.0/css/all.css');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.button-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, 25rem);
  column-gap: 1rem;
  justify-content: center;
  padding-bottom: 1rem;
}
</style>
