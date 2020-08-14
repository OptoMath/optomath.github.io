<template lang="pug">
  .geometry
    h2  Geometry
    .button-group
      div(v-for="unit in units" :key="unit.names")
        AppButton(:name="unit.name" :icon="unit.icon" :slug="unit.slug")
    router-view
</template>

<script>
import AppButton from "@/components/ui/AppButton.vue";
import Store from "@/store/store.js";
export default {
  name: "Geometry",
  components: {
    AppButton
  },
  data() {
    return {
      units: Store.subjects[0].units
    };
  }
};
</script>

<style lang="scss" scoped>
.geometry {
  h2 {
    text-align: center;
    font-size: 1rem;
    color: #1bffb8;
    text-shadow: -6px -3px 0.5px #1bffb717;
  }
}
</style>
