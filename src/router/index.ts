import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import TheWelcome from '@/components/TheWelcome.vue';
import PageView from '@/views/PageView.vue';
import AboutView from '@/views/AboutView.vue';
import VModelView from '@/views/demo/VModelView.vue';
import TextSplitView from '@/views/TextSplitView.vue';
import IFrameView from '@/views/demo/IFrameView.vue';
import ShellTerminalView from '@/views/demo/ShellTerminalView.vue';
import FlexLayoutView from '@/views/demo/FlexLayoutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageView,
      props: { child: HomeView, msg: 'You did it!' }
    },
    { path: '/split', component: PageView, props: { child: TextSplitView } },
    {
      path: '/demo/vmodel',
      component: PageView,
      props: { child: VModelView }
    },
    {
      path: '/demo/iframe/:id',
      component: PageView,
      props: { child: IFrameView }
    },
    { path: '/demo/shell', component: PageView, props: { child: ShellTerminalView } },
    { path: '/demo/flex', component: PageView, props: { child: FlexLayoutView } },
    {
      path: '/welcome',
      name: 'welcome',
      component: PageView,
      props: {
        child: TheWelcome
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PageView,
      props: {
        child: AboutView
      }
    }
  ]
});

export default router;
