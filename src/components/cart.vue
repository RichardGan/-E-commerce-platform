<template>
<div>
	<Header></Header>
	<el-table
    :data="tableData3"
    height="500"
    border
    style="width: 100%">
		<el-table-column
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      prop="date"
      label="商品信息"
      width="600">
    </el-table-column>
    <el-table-column
      prop="name"
      label="单价"
      width="180">
    </el-table-column>
    <el-table-column
      prop="number"
      label="数量">
    </el-table-column>
		<el-table-column
      prop="address"
      label="总计">
    </el-table-column>
		<el-table-column
      prop="address"
      label="删除">
    </el-table-column>
  </el-table>
	<Footers></Footers>
	</div>
</template>
<script>
import Header from '@/common/Header'
import Footers from '@/common/Footers'
export default {
	name:'cart',
	components:{
		Header,
		Footers
	},
	 data() {
      return {
        tableData3: [{
          date: 'iphone',
					name: '8000',
					number: '1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: 'beats',
					name: '2000',
					number: '1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: 'mp4',
					name: '1000',
					number: '1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: 'macbook',
					name: '10000',
					number: '1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: 'ipad',
					name: '2400',
					number: '1',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
}
</script>
<style scoped>
	

</style>















	<!-- <div class="cart">
		<div class="cart-header">
			<div class="cart-header-title">购物清单</div>
			<div class="cart-header-main">
				<div class="cart-info">商品信息</div>
				<div class="cart-price">价格</div>
				<div class="cart-count">数量</div>
				<div class="cart-cost">小记</div>
				<div class="cart-delete">删除</div>
			</div>
		</div>
		<div class="cart-content">
			<div class="cart-content-main" v-for="(item, index) in cartList" :key="item.id">
				<div class="cart-info">
					<span>{{ productDictList[item.id].name }}</span>
				</div>
				<div class="cart-price">¥ {{productDictList[item.id].cost }}</div>
				<div class="cart-count">
					<span class="cart-control-minus" @click="handleCount(index,-1)">-</span>{{item.count}}
					<span class="cart-control-add" @click="handleCount(index,+1)">+</span>
				</div>
				<div class="cart-cost">¥ {{ productDictList[item.id].cost * item.count}}</div>
				<div class="cart-delete">
					<span class="cart-control-delete" @click="handleDelete(index)">删除</span>
				</div>
			</div> -->
			<!-- <div class="cart-empty" v-if="!cartList.length">购物车为空</div> -->
		<!-- </div>
		<div class="cart-footer" v-show="cartList.length">
			<div class="cart-footer-desc">
				共计<span>{{countAll}}</span>件商品
			</div>
			<div class="cart-footer-desc">
				总额<span>¥{{costAll - promotion }}</span>
				<br>
			</div>
			<div class="cart-footer-desc">
				<div class="cart-control-order" @click="handleOrder">现在结算</div>
			</div>
		</div>
	</div>

<script>
	
</script>
<style scoped>
	.cart{
        margin: 32px;
        background: #fff;
        border: 1px solid #dddee1;
        border-radius: 10px;
    }
	

    .cart-header-title{
        padding: 16px 32px;
        border-bottom: 1px solid #dddee1;
        border-radius: 10px 10px 0 0;
        background: #f8f8f9;
    }
    .cart-header-main{
        padding: 8px 32px;
        overflow: hidden;
        border-bottom: 1px solid #dddee1;
        background: #eee;
        overflow: hidden;
    }
</style> -->