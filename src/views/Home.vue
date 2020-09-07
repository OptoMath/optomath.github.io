<template lang="pug">
  v-app
    img(src="../assets/images/avatar.svg")
    v-container
      v-row
        v-col(v-for="subject in subjects" :key="subject.name" cols="12")
          v-row(align="start" justify="center") 
            router-link(:to="{name: 'TheSubjectUnits', params: {theSubjectSlug: subject.slug}}")
              AppButton(class="large-button")
                  i(slot="icon" :class="subject.icon")
                  p(slot="name") {{subject.name}}
</template>

<script>
// @ is an alias to /src
import AppButton from "@/components/ui/AppButton";
import store from "@/store/store.js";
export default {
  name: "Home",
  components: {
    AppButton
  },
  data() {
    return {
      subjects: store.subjects
    };
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
