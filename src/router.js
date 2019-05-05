import Vue from 'vue';
import Router from 'vue-router';

import FilmsView from '@/views/FilmsView';
import FilmInfo from '@/views/FilmInfo';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'films',
      component: FilmsView
    },
    {
      path: '/film-info',
      name: 'filmInfo',
      component: FilmInfo,
      props: true
    }

  ]
})

export default router;
