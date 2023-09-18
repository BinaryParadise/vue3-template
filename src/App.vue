<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { computed, ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Moon,
  Sunny
} from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const isd = ref(false)
const navs = ref([{ title: '菜单选项1', key: 'nav1', path: '/nav1' }, { title: '菜单选项2', key: 'nav2', path: '/nav2' }])
const login = ref(true)

const isLogin = computed({
  get() {
    return login.value
  },
  set(value: boolean) {
    login.value = value
  }
})

function handleCommand() {

}

function routeStyle() {

}
</script>

<template>
  <el-container>
    <el-header height="50px" :class="isLogin ? 'nav-header' : ''">
      <div style="display:flex;align-items:center;justify-content: space-between;" v-show="isLogin">
        <div class="nav-top">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
          <span class="nav-item nav-item-active">产品名称</span>
          <RouterLink to="/" class="home-a">控制台</RouterLink>
        </div>
        <div style="display: flex;align-items:center;">
          <el-switch v-model="isDark" @change="toggleDark" :active-action-icon="Moon"
            :inactive-action-icon="Sunny"></el-switch>
          <el-dropdown size="mini" trigger="click" @command="handleCommand">
            <el-icon>
              <UserFilled />
            </el-icon>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="fa fa-sign-out" command="exit" style="color:orangered;">
                退出系统
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container style="height:calc(100vh - 100px);">
      <el-container>
        <el-aside>
          <!-- 侧边栏-菜单 -->
          <el-scrollbar>
            <el-menu default-active="nav1" class="menu-left">
              <el-sub-menu index="nav1">
                <template #title>
                  <el-icon>
                    <location />
                  </el-icon>
                  <span>{{ "菜单1" }}</span>
                </template>
                <el-menu-item>功能选项1</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-scrollbar>
        </el-aside>

        <!-- 主内容 -->
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
    <el-footer height="50px" class="nav-footer">
      <span>Copyright © 2009-{{ $moment().format("YYYY") }} 公司名称 版权所有</span>
    </el-footer>
  </el-container>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 0rem;
}

.home-a {
  color: var(--vt-c-white-soft);
  margin-left: 1rem;
}

.home-a :hover {
  color: var(--vt-c-white);
  background-color: transparent !important;
}

.nav-header {
  border-bottom: solid 1px var(--color-border);
  background-color: var(--color-background-mute);
}

.nav-footer {
  border-top: solid 1px var(--color-border);
  background: var(--color-background-soft);
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-top {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  height: 50px;
  color: #fff;
  text-align: center;
  align-items: center;
}

.nav-item {
  margin: 0;
  padding: 0px 8px;
  vertical-align: baseline;
  display: inherit;
  font-size: 15px;
  flex-shrink: 0;
}

.nav-item-active {
  font-weight: bold;
}


.nav-item a {
  text-decoration: none;
  color: #fff;
}

.nav-item a:visited {
  text-decoration: none;
  color: #fff;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 32px;
}

.menu-left {
  height: calc(100vh - 100px);
}
</style>
