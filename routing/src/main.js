import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./components/pages/TeamsList.vue";
import UsersList from "./components/pages/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/pages/NotFound.vue";
import TeamsFooter from "./components/pages/TeamsFooter.vue";
import UsersFooter from "./components/pages/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      name: "teams",
      path: "/teams",
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: "/users",
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log("Before enter");
        console.log(to, from);
        next();
      },
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});
router.beforeEach(function (to, from, next) {
  console.log(to, from);
  if (to.meta.needsAuth) {
    next();
  } else {
    next();
  }
  next();
});

const app = createApp(App);
app.use(router);
app.mount("#app");
