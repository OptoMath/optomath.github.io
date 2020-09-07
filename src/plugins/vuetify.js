// src/plugins/vuetify.js
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: { disable: true },
  icons: {
    iconfont: "fa"
  }
});
