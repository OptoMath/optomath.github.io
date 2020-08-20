<template lang="pug">
.the-lesson-details
  //- h2 The subject slug is {{theSubjectSlug}}
  //- h2 The unit Slug is {{theUnitSlug}}
  div
    h1 {{lesson.name}}
    iframe(width="400" height="250" :src="lesson.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
// the unit lessons display all the lessons of the unit

import store from "@/store/store.js";
import AppButton from "@/components/ui/AppButton.vue";

export default {
  name: "TheLessonDetails",
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

<style lang="scss" scoped>
.the-lesson-details {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

iframe {
  // background: rgb(0,255,120);
margin: 0;
border: solid 4px;
border-image: linear-gradient(90deg, rgba(0,255,120,1) 0%, rgba(0,149,255,1) 100%) 30;
}

</style>
