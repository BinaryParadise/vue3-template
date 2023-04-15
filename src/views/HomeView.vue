<template>
  <div id="main_app" lang="zh-cn">
    <el-container class="main-layout">
      <el-aside width="var(--menu-width)" class="left-menu">
        <el-container>
          <el-header height="var(--menu-top)">
            <el-row>
              <el-col class="top-title">
                <span>这里修改系统标题</span>
              </el-col>
              <el-col style="margin: 12px 0px;">
                <el-container>
                  <el-image src="img/user.jpg" style="border-radius: 50px;border: 1px solid #FFFFFF;height: 50px;">
                  </el-image>
                  <el-row class="profile_info">
                    <el-col style="font-size: 12px;margin-top: 4px;">欢迎使用</el-col>
                    <el-col style="margin-top: 8px;color: #b2e2ee">管理员</el-col>
                  </el-row>
                </el-container>
              </el-col>
            </el-row>
          </el-header>
          <el-main :style="'height:calc(100vh - var(--menu-top));padding: 0px !important;border: none;'">
            <el-scrollbar>
              <el-menu :default-openeds="['1', '2']" @select="handleSelect" background-color="#2A3F54" text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu v-for="menu in menus" :key="menu.key" :index="menu.key">
                  <template slot="title">
                    <i class="el-icon-menu"></i><span>{{ menu.title }}</span>
                  </template>
                  <el-menu-item v-for="item in menu.child" :key="item.key" :index="item.key">
                    <i class="el-icon-document"></i>
                    <template slot="title">
                      <span>{{ item.title }}</span>
                    </template>
                  </el-menu-item>
                </el-submenu>
              </el-menu>
            </el-scrollbar>
          </el-main>
        </el-container>

      </el-aside>
      <el-container class="main-container">
        <el-header class="nav-head" height='var(--nav-top)'>
          <h1 class="nav-title">
            标题
          </h1>
        </el-header>
        <el-main class="main-content" style="padding:12px;height: 100%;" :v-loading="true">
          <el-tabs v-if="dynamicTabs.length > 0" v-model="activeTab" class="maintab" type="border-card"
            style="height: calc(100vh - var(--nav-top) - 26px)" closable @edit="handleTabsEdit">
            <el-tab-pane v-for="item in dynamicTabs" :key="item.name" :label="item.label" :name="item.name">
              <!--Tab Content-->
              <keep-alive>
                <component :is="item.component" style="height:100%"></component>
              </keep-alive>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BaseMixin from '../components/BaseMixin.vue'

export default {
  name: "HomeView",
  mixins: [BaseMixin],
  data: function () {
    return {
      table: {
        data: Array.from(100).fill({ a: 1 }, 0)
      },
      message: "Hello Element Plus",
      menus: [{
        title: '工具中心',
        key: '1',
        child: [
          { key: '1-1', title: '日志浏览' },
        ]
      },
      {
        title: '图书馆', key: '2',
        child: [
          { key: '2-1', title: '生命周期', component: () => import('../views/LifecycleView.vue') },
          { key: '2-2', title: '表格', src: '/table', component: () => import('../views/TableView.vue') },
          { key: '2-3', title: '继承', component: () => import('../views/ExtendView.vue') },
          { key: '2-4', title: '网格', src: '/grid', component: () => import('../views/GridView.vue') },
          { key: '2-5', title: '日历', component: () => import('../views/CalendarView.vue') },
          { key: '2-7', title: '插件', component: () => import('@/views/PluginView.vue') },
          { key: '2-8', title: 'WebSocket', component: () => import('../views/WebSocketView.vue') }
        ]
      },
      {
        title: '其它', key: '3',
        child: [
          { key: '3-1', title: '迈阿密风云（崭新出厂）', src: 'vue.html', data: 'js/component/ex.table.vue' },
          { key: '3-2', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-3', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-4', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-5', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-6', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-7', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-8', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-9', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-10', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-11', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-12', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-13', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-14', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-15', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-16', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-17', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
          { key: '3-18', title: '列表', src: 'vue.html', data: 'js/component/ex.list.vue' },
        ]
      }
      ],
      activeTab: null,
      dynamicTabs: []
    }
  },
  mounted: function () {
    for (let i = 0; i < 20; i++) {
      this.table.data.push({ name: i });
    }
    window.onresize = this.sizeChanged();
    this.sizeChanged();
  },
  watch: {
    screenHeight(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenHeight = val;
        this.timer = true
        let that = this
        setTimeout(function () {
          // 打印screenWidth变化的值
          console.log(that.screenHeight)
          that.timer = false
        }, 400)
      }
    }
  },
  methods: {
    sizeChanged: function () {
    },
    handleSelect: function (val, path) {
      var item = this.menus.filter(v => v.key == path[1][0])[0].child.filter(v => v.key == val)[0];
      var curTab = { ...item, name: val, label: item.title };
      if (this.dynamicTabs.filter(item => item.name == curTab.name).length == 0) {
        this.dynamicTabs.push(curTab);
      }
      this.activeTab = curTab.name;
    },
    handleTabsEdit: function (val, action) {
      if (action == "remove") {
        var olds = this.dynamicTabs;
        this.dynamicTabs = olds.filter(item => item.name != val);
        if (val == this.activeTab) {
          var old_idx = olds.indexOf(olds.filter(item => item.name == val)[0]);
          this.activeTab = this.dynamicTabs[Math.min(this.dynamicTabs.length - 1, old_idx)].name;
        }
      }
    },
    getTabData: function () {
      return this.dynamicTabs.filter(item => item.key == this.activeTab)[0].data;
    }
  }
}

</script>