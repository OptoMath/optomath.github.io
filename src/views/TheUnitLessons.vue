<template lang="pug">
div
  //- h2 The subject slug is {{theSubjectSlug}}
  //- h2 The unit Slug is {{theUnitSlug}}
  .button-group
      div( v-for="lesson in lessons" :key="lesson.name")
        router-link(:to="{name: 'TheLessonDetails', params: {theSubjectSlug: theSubjectSlug, theUnitSlug: theUnitSlug, theLessonSlug: lesson.slug}}")
          AppButton
            i(slot="icon" :class="lesson.icon")
            p(slot="name") {{lesson.name}}
</template>

<script>
// the unit lessons display all the lessons of the unit

import store from "@/store/store.js";
import AppButton from "@/components/ui/AppButton.vue";

export default {
  name: "TheUnitLessons",
  components: {
    AppButton
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
