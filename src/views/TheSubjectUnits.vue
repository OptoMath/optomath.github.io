<template lang="pug">
.the-subject-units
  .button-group
    AppTitle
      i(slot="icon" class="fas fa-undo")
      p(slot="name") {{subject.name}}

  .button-group
    div( v-for="unit in units" :key="unit.name")
      router-link(:to="{name: 'TheUnitLessons', params: {theSubjectSlug: theSubjectSlug, theUnitSlug: unit.slug }}")
        //- AppButton(:name="subject.name" :icon="subject.icon")
        AppButton(class="small-button")
          i(slot="icon" :class="unit.icon")
          p(slot="name") {{unit.name}}
</template>

<script>
// The subject Units display all the units of the subject
import store from "@/store/store.js";
import AppButton from "@/components/ui/AppButton.vue";
import AppTitle from "@/components/ui/AppTitle.vue";

export default {
  name: "TheSubjectUnits",
  components: {
    AppButton,
    AppTitle
  },
  props: {
    theSubjectSlug: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      subject: store.subjects.find(
        subject => subject.slug === this.theSubjectSlug
      )
    };
  },
  computed: {
    units() {
      return store.subjects.find(subjec => subjec.slug === this.theSubjectSlug)
        .units;
    }
  }
};
</script>

<style lang="scss" scoped></style>
