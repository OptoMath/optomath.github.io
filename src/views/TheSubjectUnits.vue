<template lang="pug">
 .button-group
      div( v-for="unit in units" :key="unit.name")
        router-link(:to="{name: 'TheUnitLessons', params: {theSubjectSlug: theSubjectSlug, theUnitSlug: unit.slug }}")
          //- AppButton(:name="subject.name" :icon="subject.icon")
          AppButton
            i(slot="icon" :class="unit.icon")
            p(slot="name") {{unit.name}}
</template>

<script>
// The subject Units display all the units of the subject
import store from "@/store/store.js";
import AppButton from "@/components/ui/AppButton.vue";

export default {
  name: "TheSubjectUnits",
  components: {
    AppButton
  },
  props: {
    theSubjectSlug: {
      type: String,
      require: true
    }
  },
  computed: {
    units() {
      return store.subjects.find(subjec => subjec.slug === this.theSubjectSlug)
        .units;
    }
  }
};
</script>

<style></style>
