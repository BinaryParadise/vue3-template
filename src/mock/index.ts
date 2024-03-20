import Mock from 'mockjs';

Mock.mock('/api/user/menu', 'get', {
  code: 0,
  data: [
    {
      title: '开发者工具',
      icon: 'HomeFilled',
      key: 'nav1',
      child: [
        { title: '文本拆分', path: '/split', key: 'split' },
        { title: 'JSON', key: 'json', path: '/json' },
        { title: 'v-model', path: '/demo/vmodel', key: 'fun1' }
      ]
    },
    {
      title: '菜单选项2',
      icon: 'Operation',
      key: 'nav2',
      child: [
        { title: '功能选项2', path: '/about', key: 'fun3' },
        { title: 'iframe1', path: '/demo/iframe/1', key: 'fun4' },
        { title: 'iframe2', path: '/demo/iframe/2', key: 'fun5' }
      ]
    }
  ],
  msg: null
});
