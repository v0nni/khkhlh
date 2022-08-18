import Vue from "vue";

import { router } from "./_helpers/router";
import App from "./app/App";

// setup fake backend
import { configureFakeBackend } from "./_helpers/fake-backend";
configureFakeBackend();

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
