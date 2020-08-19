<template lang="pug">
div
  //- h2 The subject slug is {{theSubjectSlug}}
  //- h2 The unit Slug is {{theUnitSlug}}
  h1 {{lesson.name}}
  h2 {{lesson.slug}}
  i(:class="lesson.icon")
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
    },
    theLessonSlug: {
      type: String,
      require: true
    }
  },
  computed: {
    lesson() {
      // return store.subjects.find(subjec => subjec.slug === this.theSubjectSlug)
      //   .units;

      return store.subjects
        .find((subject) => subject.slug === this.theSubjectSlug)
        .units.find((unit) => unit.slug === this.theUnitSlug)
        .lessons.find((lesson) => lesson.slug === this.theLessonSlug);
    }
  }
};
</script>

<style></style>
