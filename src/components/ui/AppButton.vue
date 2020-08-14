<template lang="pug">
  router-link(:to="'/' + slug")
    button(class="center")
      i(:class="icon")
      p {{name.toLocaleUpperCase() }}
</template>

<script>
export default {
  name: "AppButton",
  props: ["icon", "name", "slug"]
};
</script>

<style lang="scss" scoped>
button {
  // need more work in with
  width: 25rem;
  height: auto;
  // min-width: 20rem;
  // need more work in with
  position: relative;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-right: 1rem;
  // flex: 1 1 20rem;
  // flex: 0 1 20rem;
  // height: 150px;
  background: white;
  border: 0px solid black;
  /* top-left | top-right | bottom-right | bottom-left */
  border-radius: 10px;
  box-shadow: 0px 15px 0px 0px rgba(141, 141, 141, 0.1);
  transition: box-shadow 0.1s ease-in, top 0.1s;
  i {
    flex: 2;
    font-size: 3rem;
    color: #1bffb8;
    border-radius: 50px;
    background: #fbfbfb;
    padding: 20px;
    margin-left: 5px;
    margin-right: 5px;
    box-shadow: inset 0px 1px 1px 1px rgba(141, 141, 141, 0.1);
  }
  p {
    flex: 10;
    color: #1bffb8;
    font-size: 1rem;
  }
}
button:hover {
  box-shadow: inset 0px 2px 0px 1px lightgray;
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
  top: 2px;
}
</style>
