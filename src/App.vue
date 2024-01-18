<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { computed, inject, ref, watch } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Sunny, Moon, UserFilled } from '@element-plus/icons-vue'
import { store } from './components/store'
import type { IRequest, Privileges } from './interfaces/net'
import { useIcon } from './utils/useIcon'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const navs = ref<Array<Privileges>>(new Array())
const login = ref(true)

const isLogin = computed({
  get() {
    return login.value
  },
  set(value: boolean) {
    login.value = value
  }
})

const router = useRouter()
function handleCommand(index: string, indexPath: Array<string>, item: any): void {
  // let group = navs.value.filter(v=>v.key=indexPath[0])[0]
  // let path = group.child.filter(y=>y.key==index)[0].path
  // router.push(path)
}

function routeStyle() {}

const api = inject<IRequest>('api')
api?.get<Array<Privileges>>('/user/menu').then((result) => {
  navs.value = result.data
})
</script>

<template>
  <el-container>
    <el-header height="50px" :class="isLogin ? 'nav-header' : ''">
      <div
        style="display: flex; align-items: center; justify-content: space-between"
        v-show="isLogin"
      >
        <div class="nav-top">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
          <span class="nav-item nav-item-active">产品名称</span>
          <RouterLink to="/" class="home-a">控制台</RouterLink>
        </div>
        <div style="display: flex; align-items: center">
          <el-switch
            v-model="isDark"
            @change="toggleDark"
            style="color: var(--color-background-mute)"
            :active-action-icon="Moon"
            :inactive-action-icon="Sunny"
          ></el-switch>
          <el-dropdown trigger="hover" @command="handleCommand">
            <el-icon class="avatar">
              <UserFilled />
            </el-icon>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="fa fa-sign-out" command="exit" style="color: orangered">
                退出系统
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container style="height: calc(100vh - 100px)">
      <el-container>
        <el-aside>
          <!-- 侧边栏-菜单 -->
          <el-scrollbar>
            <el-menu
              default-active="/"
              :default-openeds="['nav0', 'nav1', 'nav2']"
              class="menu-left"
              @select="handleCommand"
              router
            >
              <el-sub-menu v-for="item in navs" :index="item.key">
                <template #title>
                  <el-icon>
                    <component :is="useIcon(item.icon)"></component>
                  </el-icon>
                  <span>{{ item.title }}</span>
                </template>
                <el-menu-item v-for="subitem in item.child" :index="subitem.path">
                  {{ subitem.title }}
                </el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-scrollbar>
        </el-aside>

        <!-- 主内容 -->
        <el-main v-loading="store.loading">
          <RouterView :key="$route.fullPath" />
        </el-main>
      </el-container>
    </el-container>
    <el-footer height="50px" class="nav-footer">
      <span>Copyright © 2009-{{ $moment().format('YYYY') }} 寰宇通信 版权所有</span>
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
  background-color: var(--color-background-main);
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
  color: var(--color-invert);
}

.menu-left {
  height: calc(100vh - 100px);
}
</style>
@/utils/request
