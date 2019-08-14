import Vue from "vue";
import Router from "vue-router";
import VPostsView from "./components/templates/VPostsView.vue";
import VPostView from "./components/templates/VPostView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "posts",
      component: VPostsView
    },
    {
      path: "/posts/:id",
      name: "post",
      component: VPostView
    }
  ]
});
