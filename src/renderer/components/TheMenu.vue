<template>
  <div class="sider">
    <img class="logo" src="../assets/logo.png" alt="" />
    <div class="menu">
      <router-link class="menu-item" v-for="(item, index) in menu" :key="index" :to="item.link"
        ><icon :type="item.icon" /><span class="title">{{ item.title }}</span></router-link
      >
    </div>
    <div class="setting-bar">
      <span class="setting-btn" title="设置" @click="goSetting"><SettingOutlined /></span>
      <link-url class="setting-info" title="仓库" :url="repositoryUrl"><GithubOutlined /></link-url>
      <link-url class="setting-info" title="文档" :url="docsUrl"><GlobalOutlined /></link-url>
      <span class="setting-info" @click="toggleTheme"
        ><a-tooltip :title="theme.title">
          <icon-font :type="theme.icon" /> </a-tooltip
      ></span>
    </div>
  </div>
</template>
<script lang="tsx">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { RocketOutlined, CoffeeOutlined, BulbOutlined, SettingOutlined, GithubOutlined, GlobalOutlined, ToolOutlined, BuildOutlined, LikeOutlined } from '@ant-design/icons-vue';
import LinkUrl from '~/components/LinkUrl.vue';
import config from '@/config';
import IconFont from './IconFont.vue';
import useTheme from '~/hooks/useTheme';
export default defineComponent({
  components: {
    icon: (prop) => <prop.type style={{ fontSize: '16px' }} />,
    SettingOutlined,
    GithubOutlined,
    GlobalOutlined,
    LinkUrl,
    IconFont
  },
  setup() {
    const router = useRouter();
    const menu = [
      // {
      //   title: '项目模板',
      //   link: '/template',
      //   icon: <CoffeeOutlined />
      // },
      {
        title: '一键部署',
        link: '/deploy',
        icon: <RocketOutlined />
      },
      // {
      //   title: '实用工具',
      //   link: '/tools',
      //   icon: <ToolOutlined />
      // },
      // {
      //   title: '组件管理',
      //   link: '/components',
      //   icon: <BuildOutlined />
      // },
      // {
      //   title: '常用推荐',
      //   link: '/recommend',
      //   icon: <LikeOutlined />
      // },
      {
        title: '关  于',
        link: '/about',
        icon: <BulbOutlined />
      }
    ];
    const isDevelopment = process.env.NODE_ENV !== 'production';
    if (isDevelopment) {
      menu.push({
        title: '测试',
        link: '/demo',
        icon: <BulbOutlined />
      });
    }
    const goSetting = () => router.push('/setting');
    const { theme, toggleTheme } = useTheme();
    return {
      menu:Object.freeze(menu),
      goSetting,
      repositoryUrl: config.repositoryUrl,
      docsUrl: config.docsUrl,
      toggleTheme,
      theme
    };
  }
});
</script>
<style lang="less" scoped>
@sider-bg: #f0f0f0;
.sider {
  flex: 0 0 200px;
  overflow-y: auto;
  padding: 12px;
  background-color: @sider-bg;
  position: relative;
  .logo {
    width: 80px;
    display: block;
    margin: 30px auto;
  }
}
.menu {
  .menu-item {
    display: flex;
    text-align: left;
    line-height: 2.4;
    font-size: 13px;
    color: @text-color;
    margin: 10px auto;
    border-radius: 6px;
    outline: none;
    text-decoration: none;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2em;
    &.router-link-active {
      background: linear-gradient(120deg, @primary-secondary-color, @primary-color);
      color: #eee !important;
    }
    &:hover {
      color: @primary-color;
    }
    .title {
      width: 5em;
      display: inline-block;
      text-align-last: justify;
      margin-left: 1em;
      letter-spacing: 3px;
      // margin-left: 8px;
    }
  }
}
.setting-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  & > span {
    margin: 8px;
    cursor: pointer;
    color: #999;
    transition: color 0.5s ease;
    &:hover {
      color: @primary-color;
    }
  }
}
@media (prefers-color-scheme: dark) {
  .sider {
    background-color: #171718;
  }
  .menu {
    .menu-item {
      color: #aaa;
    }
  }
}
</style>
