<template>
  <div>
    <el-menu
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item>
      <router-link to="/">
      欢迎来到生合易
      </router-link>
      </el-menu-item>
    <el-menu-item>
      <router-link to="mall">现货商城</router-link>
    </el-menu-item>
    <el-menu-item style="float:right">
      <router-link to="demo1">demo1</router-link>
    </el-menu-item>
    <el-menu-item style="float:right">
      <!-- <a href="@/components/login">de</a> -->
      <router-link to="login">登陆</router-link>
    </el-menu-item>
    <el-menu-item style="float:right">
      <router-link to="cart">购物车</router-link>
    </el-menu-item>
  </el-menu>
</div>
</template>
<script>
  export default{

  }
</script>


  
