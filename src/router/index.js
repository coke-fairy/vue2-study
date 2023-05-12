import Vue from 'vue';
import VueRouter from 'vue-router';
import LayerMain from '@/views/LayerMain';
import ViewContent from '@/views/ViewContent';
import ViewContent2 from '@/views/ViewContent2';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayerMain,
    children: [
      {
        path: '/content',
        name: 'content',
        component: ViewContent,
      },
      {
        path: '/content2',
        name: 'content2',
        component: ViewContent2,
        // beforeEach 전처리 후처리 특정 위치에 작성도 가능
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 모든곳 전처리 (권한 같은것)
router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.name === from.name) {
    console.log('동일페이지');
  } else {
    next();
  }
  // 로그인이 안 됐다면 강제로 보내거나
  // next("/")
});

// 후처리
router.afterEach(() => {});

export default router;
