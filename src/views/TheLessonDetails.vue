<template lang="pug">
.the-lesson-details
  .button-group
    AppTitle
      i(slot="icon" class="fas fa-undo")
      p(slot="name") {{lesson.name}}
  .frame-container
    iframe(width="300" height="200" :src="lesson.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  .button-group(class="large-button")
    AppTitle(class="large-button")
      i(slot="icon" class="fas fa-link")
      p(slot="name") link 1

</template>

<script>
// the unit lessons display all the lessons of the unit

import store from "@/store/store.js";
import AppButton from "@/components/ui/AppButton.vue";
import AppTitle from "@/components/ui/AppTitle.vue";


export default {
  name: "TheLessonDetails",
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
        .find(subject => subject.slug === this.theSubjectSlug)
        .units.find(unit => unit.slug === this.theUnitSlug)
        .lessons.find(lesson => lesson.slug === this.theLessonSlug);
    }
  }
};
</script>

<style lang="scss" scoped>

  .frame-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
    iframe {
  // background: rgb(0,255,120);
  border: solid 4px;
  border-image: linear-gradient(
      90deg,
      rgba(0, 255, 120, 1) 0%,
      rgba(0, 149, 255, 1) 100%
    )
    30;
}
  }
  

</style>
