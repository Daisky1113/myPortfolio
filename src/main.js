import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import vueSmoothScroll from "vue-smooth-scroll";

Vue.use(vueSmoothScroll);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
