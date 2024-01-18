import Mock from 'mockjs'

Mock.mock('/api/user/menu', 'get', {
    code: 0,
    data: [
        { title: '菜单选项1', icon: 'HomeFilled', key: 'nav0', child: [{ title: '功能选项1', path: '/', key: 'fun1' }, { title: '功能选项2', key: 'fun2', path: '/welcome' }] },
        { title: '演示', icon: 'Option', key: 'nav1', child: [{ title: 'v-model', path: '/demo/vmodel', key: 'fun1' }, { title: '功能选项2', key: 'fun2', path: '/welcome' }] },
        { title: '菜单选项2', icon: 'Operation', key: 'nav2', child: [{ title: '功能选项2', path: '/about', key: 'fun3' }] }],
    msg: null
})