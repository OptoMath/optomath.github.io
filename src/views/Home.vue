<template lang="pug">
  .home
    img(src="../assets/images/avatar.svg")
    .button-group
      AppButton(name="Geometry" icon="fas fa-shapes" slug="geometry")
      AppButton(name="Algebra 2" icon="fas fa-superscript" slug="algrebra-2")
</template>

<script>
// @ is an alias to /src
import AppButton from "@/components/ui/AppButton.vue";

export default {
  name: "Home",
  components: {
    AppButton
  }
};
</script>

<style lang="scss" scoped>
img {
  // center image
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 400px;
  padding: 12px;
}
</style>