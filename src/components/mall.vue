<template>
  <div>
    <Header></Header>
    <div class="product">
    <div class="product-desc">
        <router-link
        class="haha"
        v-for="item of names"
        :key="item.id"
        to="detail"
        >
        <img class="product-img" :key="item.id" :src="item.image" alt="">
        </router-link>

    </div>
    </div>
  </div>
</template>
<script>
import Header from '@/common/Header'
import axios from 'axios'
export default {
  name:'mall',
  data () {
    return {
      names: []
    }
  },
  components:{
    Header
  },
  methods:{
    getProductInfo () {
      axios.get('api/product.json')
        .then(this.getProductInfoSucc)
    },
    getProductInfoSucc (res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.names = data.names
        // console.log(data.names)
        // console.log(res)
      }
    }
  },
  mounted(){
    this.getProductInfo()
  }
}
</script>
<style scoped>
  .product{
        margin: 32px;
        padding: 32px;
        background: #fff;
        border: 1px solid #dddee1;
        border-radius: 10px;
        overflow: hidden;
    }
  .product-desc{
        background: #fff;
        margin: 32px;
        padding: 32px;
        border: 1px solid #dddee1;
        border-radius: 10px;
        text-align: center;
        overflow: auto;
    }
    .product-img {
      display: inline-block;
        width: 15%;
        margin: 20px 20px;
        padding: 20px;
        border: 1px solid #dddee1;
    }
</style>
