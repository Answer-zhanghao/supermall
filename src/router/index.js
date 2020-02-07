import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home = () => import("../views/home/Home");
const Shop = () => import("../views/shopcart/Shop");
const Category = () => import("../views/category/Category");
const Profile = () => import("../views/profile/Profile");
const routes = [
  {
    path: "",
    redirect:'/home'
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/profile",
    component: Profile
  }
];
export default new Router({
  routes,
  mode:'history'
});
