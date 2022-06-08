<template>
    <el-container class="main-layout">

        <el-aside width="200px" class="left-menu">

            <el-scrollbar>

                <el-menu :default-openeds="['1', '2']" @select="handleSelect" background-color="#545c64"
                    text-color="#fff" active-text-color="#ffd04b">

                    <el-submenu v-for="menu in menus" :key="menu.key" :index="menu.key">

                        <template slot="title">

                            <i class="el-icon-location"></i>

                            <span>{{ menu.title }}</span>
                        </template>
                        <el-menu-item v-for="item in menu.child" :key="item.key" :index="item.key">{{ item.title }}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <el-container>
            <el-header class="nav-head">
                <h1 class="nav-title">
                    标题
                </h1>
            </el-header>
            <el-main class="main-content">
                <el-row :style="'height:' + screenHeight + 'px;padding:16px;'">
                    <el-col>
                        <el-tabs v-if="dynamicTabs.length > 0" v-model="activeTab" class="maintab" type="border-card"
                            closable @edit="handleTabsEdit" :style="'height:' + (screenHeight - 40) + 'px;'">
                            <el-tab-pane v-for="item in dynamicTabs" :key="item.name" :label="item.label"
                                :name="item.name">
                                <iframe :src="item.src" :height="screenHeight - 125"
                                    style="border: none;width: 99%;"></iframe>
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            table: {
                data: Array.from(100).fill({ a: 1 }, 0)
            },
            message: "Hello Element Plus",
            screenHeight: document.body.clientHeight - 59,
            menus: [{
                title: '工具中心',
                key: '1',
                child: [{ key: '1-1', title: '日志浏览' },
                { key: '1-2', title: 'WebSocket', src: 'ws/index.html' }
                ]
            },
            { title: '学习中心', key: '2', child: [{ key: '2-1', title: 'Vue Center', src: 'vue.html' }] }

            ],
            activeTab: null,
            dynamicTabs: []
        };
    },
    mounted: function () {
        const obj = this
        for (let i = 0; i < 20; i++) {
            this.table.data.push({ name: i });
        }
        window.onresize = () => {
            return (() => {
                window.screenHeight = document.body.clientHeight - 59;
                obj.screenHeight = window.screenHeight;
            })()
        };
    },
    watch: {
        screenHeight(val) {
            // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
            if (!this.timer) {
                // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                this.screenHeight = val
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
        handleSelect: function (val, path) {
            var item = this.menus.filter(v => v.key == path[1][0])[0].child.filter(v => v.key == val)[0];
            var curTab = { name: 'tab-' + val, label: item.title, src: item.src };
            this.activeTab = curTab.name;
            if (this.dynamicTabs.filter(item => item.name == curTab.name).length == 0) {
                this.dynamicTabs.push(curTab);
            }
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
        }
    }
};
</script>