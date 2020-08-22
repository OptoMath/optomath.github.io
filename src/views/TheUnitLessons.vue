<template lang="pug">
.the-unit-lessons
  .button-group
    AppTitle
      i(slot="icon" class="fas fa-undo")
      p(slot="name") {{unitName}}
  .button-group
    div( v-for="lesson in lessons" :key="lesson.name")
      router-link(:to="{name: 'TheLessonDetails', params: {theSubjectSlug: theSubjectSlug, theUnitSlug: theUnitSlug, theLessonSlug: lesson.slug}}")
        AppButton(class="small-button")
          i(slot="icon" :class="lesson.icon")
          p(slot="name") {{lesson.name}}
</template>

<script>
// the unit lessons display all the lessons of the unit

import store from "@/store/store.js";
import AppButton from "@/components/ui/AppButton.vue";
import AppTitle from "@/components/ui/AppTitle.vue";

export default {
  name: "TheUnitLessons",
  components: {
    AppButton,
    AppTitle
  },
  props: {
    theSubjectSlug: {
      type: String,
      require: true
    },
    theUnitSlug: {
      type: String,
      require: true
    }
  },
  computed: {
    unitName() {
     return store.subjects
        .find(subject => subject.slug === this.theSubjectSlug)
        .units.find(unit => unit.slug === this.theUnitSlug).name;
    },
    lessons() {
      // return store.subjects.find(subjec => subjec.slug === this.theSubjectSlug)
      //   .units;
      return store.subjects
        .find(subject => subject.slug === this.theSubjectSlug)
        .units.find(unit => unit.slug === this.theUnitSlug).lessons;
    }
  }
};
</script>

<style></style>
