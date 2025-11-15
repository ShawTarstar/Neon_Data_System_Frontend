<script setup>
//引入views/layout/index.vue命名为Layout
import Layout from "@/views/layout/index.vue";
import { ElConfigProvider } from 'element-plus'
</script>

<template>
  <!-- <Layout></Layout> -->
  <router-view></router-view>
</template>

<style>
html,
body,
#app {
  height: 100%;
  min-height: 100vh; /* 确保至少撑满整个视窗高度 */
  margin: 0;
  padding: 0;
}
h1{
  color: #fff;
}
.el-button--primary {
  background-color: #093e89 !important;
  border-color: #093e89 !important;
  color: #fff !important;
}

.el-button--primary:hover {
  background-color: #144fa2 !important;
  border-color: #222 !important;
}
.el-button--danger {
  background-color: #89097e !important;
  border-color: #000 !important;
  color: #fff !important;
}

.el-button--danger:hover {
  background-color: #9d1e92 !important;
  border-color: #222 !important;
}
.el-button--success {
  background-color: #125c4d !important;
  border-color: #125c4d !important;
  color: #fff !important;
}

.el-button--success:hover {
  background-color: #2e8f7c !important;
  border-color: #2e8f7c !important;
}
.el-menu {
  background-color: #000 !important; /* 整个菜单背景变黑 */
  color: #fff !important;            /* 菜单文字变白 */
}

/* 鼠标悬停或选中时的菜单项 */
.el-menu-item:hover,
.el-sub-menu__title:hover {
  background-color: #222 !important;
}

/* 当前激活菜单项高亮 */
.el-menu-item.is-active {
  background-color: #333 !important;
  color: #fff !important;
}
/* 普通文字 */
.el-menu-item,
.el-sub-menu__title {
  color: #fff !important;
}

/* 悬停 */
.el-menu-item:hover,
.el-sub-menu__title:hover {
  background-color: #222 !important;
  color: #fff !important;
}

/* 激活状态 */
.el-menu-item.is-active {
  background-color: #333 !important;
  color: #fff !important;
}
.e1-table__inner{
  border: none !important;
}
.el-table,
.el-table__expanded-cell {
  background-color: #000 !important;
  /* color: #fff !important; */
  border-radius: 20px;
  border: none !important;
}
/* 修改表头背景与文字颜色 */
.el-table th {
  background-color: #111 !important;
  color: #fff !important;
  border: none !important;
}

/* 修改单元格背景与文字颜色 */
.el-table td {
  background-color: #000 !important;
  color: #fff !important;
  border: none !important;
}

/* 悬停行效果 */
.el-table__body tr:hover > td {
  background-color: #222 !important;
}
.el-table__border,
.el-table--border::after,
.el-table--border::before,
.el-table__inner-wrapper::before,
.el-table__inner-wrapper::after {
  display: none !important;
  border: none !important;
}
/* 表单整体背景 + 字体颜色 */
.el-form {
  color: #fff !important;            /* 白色字体 */
  border-radius: 12px;               /* 可选：圆角 */
}

/* 修改表单项标签颜色 */
.el-form-item__label {
  color: #fff !important;
}

/* 修改输入框内文字、边框 */
.el-input__wrapper {
  background-color: #111 !important; /* 深灰输入框 */
  border: 1px solid #333 !important;
  color: #fff !important;
  box-shadow: none !important; /* 去掉内部阴影 */
}
.el-input__wrapper::before,
.el-input__wrapper::after {
  border-color: #000 !important;   /* 普通状态边框 */
}

.el-input__inner {
  color: #fff !important;
}

.el-input__inner::placeholder {
  color: #aaa !important;
}

/* hover 与 focus 效果 */
.el-input__wrapper:hover,
.el-input__wrapper.is-focus {
  border-color: #000000 !important;
  background-color: #000000 !important;
}
/* ========== Dialog 全局暗色主题 ========== */

/* 对话框主体背景与字体颜色 */
.el-dialog {
  background-color: #111 !important;   /* 黑色背景 */
  color: #fff !important;              /* 白色文字 */
  border-radius: 12px !important;      /* 圆角效果 */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8) !important; /* 深色阴影 */
}

/* 标题栏样式 */
.el-dialog__header {
  background-color: #000 !important;
  border-bottom: 1px solid #333 !important;
  color: #fff !important;
}

/* 标题文字 */
.el-dialog__title {
  color: #fff !important;
  font-weight: bold !important;
}

/* 内容区域 */
.el-dialog__body {
  background-color: #111 !important;
  color: #ddd !important;
}

/* 底部按钮区 */
.el-dialog__footer {
  background-color: #000 !important;
  border-top: 1px solid #333 !important;
  text-align: right;
}

/* 按钮样式（配合暗色） */
.el-dialog__footer .el-button {
  background-color: #111 !important;
  border: 1px solid #333 !important;
  color: #fff !important;
}

.el-dialog__footer .el-button:hover {
  background-color: #222 !important;
  border-color: #666 !important;
}

/* 关闭按钮（右上角 X）颜色 */
.el-dialog__headerbtn .el-dialog__close {
  color: #ccc !important;
}

.el-dialog__headerbtn .el-dialog__close:hover {
  color: #fff !important;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #f3f3f3 !important;
}
.el-radio__input.is-checked .el-radio__inner {
  background-color: #b52df9 !important; /* 黑色背景 */
  border-color: #000 !important;      /* 黑色边框 */
}
.el-radio__label{
  color:#9b9b9b !important;
}

</style>
