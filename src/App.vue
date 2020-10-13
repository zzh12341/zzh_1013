<template>
<el-container class="container-warp">
  <!-- 头部 -->
  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown @command="langToggle">
      <i class="el-icon-setting" style="margin-right: 15px">切換語言</i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item  command="zh">中文</el-dropdown-item>
        <el-dropdown-item  command="en">英文</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>

  <el-container  class="container-content">
    <!-- 侧边菜单 -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">人员</template>
            <el-menu-item index="/">列表页面</el-menu-item>
            <el-menu-item index="/addMylist">新增页面</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="/tabs">同行报价</el-menu-item>
            <el-menu-item index="/echartsList">echarts</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- 内容 -->
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  import i18n from './lib/i18n'
  export default {
    data() {
      return {
      }
     
    },
    methods: {
      langToggle(lang){
        localStorage.setItem('$i18n', JSON.stringify(lang));
        i18n.locale = lang
      }
    },
  };
</script>

<style>
  html body{
    margin: 0;
    padding: 0;
  }
  .container-content{
    height: 92vh;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

