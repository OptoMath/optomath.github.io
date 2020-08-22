<template lang="pug">
  .app
    AppHeader
    .container
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

.container {
  max-width: 800px;
  margin: 0 auto;
}

.button-group {
  display: flex;
  column-gap: 1rem;
  row-gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1rem;
  margin: 10px 0px;
}

.background-buttons-container {
  margin-top: 1rem;
  overflow: auto;
  height: 100vh;
  background-color: #e7eaf7;
  border-radius: 40px 40px 0px 0px;
  -moz-border-radius: 40px 40px 0px 0px;
  -webkit-border-radius: 40px 40px 0px 0px;
  border: 0px solid #000000;
}

@media screen and (min-width: 800px) {
  .background-buttons-container {
    margin: 0px 100px;
  }
}
</style>
