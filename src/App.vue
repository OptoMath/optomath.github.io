<template lang="pug">
  .app
    AppHeader
    router-view(:key="$router.path")
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>
<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.14.0/css/all.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font-size: 16px;
}

a {
  text-decoration: none;
}

.button-group {
  display: flex;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, 15rem);
  column-gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1rem;
}
</style>
