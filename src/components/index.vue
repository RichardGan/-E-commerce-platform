<template>
  <div>
  <Header></Header>
  <img src="@/assets/logo.jpg" style="height:300px;width:350px;margin: auto">

  
  <el-carousel  style="height:768px;width:1366px">
    <el-carousel-item v-for="item in imgList" :key="item" style="height:768px;width:1366px;margin: auto" >
     <div> <img :src="item" style="margin-left: 300px"></div>
   </el-carousel-item>
 </el-carousel>


 <!-- <el-footer>
  <el-menu
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  > 
  <el-menu-item>欢迎来到生合易</el-menu-item>
</el-menu>

</el-footer>  -->
<!-- <div class="footer">
    <div class="tag">
      <a href="javascript:;">简体 |</a>
      <a href="javascript:;">繁体 |</a>
      <a href="javascript:;">English |</a>
      <a href="javascript:;">常见问题 |</a></div>
<div class="cop"><p>Copyright © 2004-2017  xx.com 版权所有</p></div>
</div> -->
<Footers></Footers>
</div>
</template>

<script>
import Footers from '@/common/Footers'
import Header from '@/common/Header'
  export default {
    name: 'index',
    data () {
      return {
        imgList:[
        require('@/assets/11.jpg'),
        require('@/assets/22.jpg'),
        require('@/assets/33.jpg')]
      }
    },
    components:{
      Footers,
      Header
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .footer {
    padding: 50px 0 20px;
    background: #fff;
    margin-top: 20px;
  }

  .tag {
    display: flex;
    justify-content: center;
  }
     a {
      height: 14px;
      padding: 0 10px;
      line-height: 14px;
    }
    a + a {
      border-left: 1px solid #666;
    }
  

  .cop {
    text-align: center;
    margin: 10px 0;
  }
</style>
