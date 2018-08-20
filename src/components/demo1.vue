<template>
	<div>
		<Header></Header>
		<el-table :data="tableData3" height="500" border style="width: 100%">
			<el-table-column prop="ID" label="商品ID" width="180" >
			</el-table-column>
			<el-table-column prop="name" label="商品名" width="180">
			</el-table-column>
			<el-table-column prop="number" label="数量" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址" >
			</el-table-column>
		</el-table>
<footers></footers>

	</div>
</template>

<script>
import Header from '@/common/Header'
import Footers from '@/common/Footers'
export default {
	data() {
		return {
			tableData3: [{
				ID: '15',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				ID: '22',
				name: '123',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				ID: '32',
				name: 'fasdf',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				ID: '4',
				name: 'zzzz',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				ID: '12',
				name: 'ccc',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				ID: '52',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				ID: '63',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}]
		}
	},
	components:{
		Header,
		Footers
	}
}
</script>





























<!-- <template>
	<div>
		{{count}}
		<li v-for="(item,i) in navList" :key="i">
			<router-link :to="item.link">{{item.text}}</router-link>
		</li>
		<router-link :to="goodsDetails?productId='msg.productId'=msg.productId">
			<img src="" alt="">
		</router-link>
		<div>
		<input type="text" v-model="ruleForm.email" placeholder="账号">
		</div>
		<div>
			<input type="password" v-model="ruleForm.password" @keyup.enter="login" placeholder="密码">
		</div>
		<li>
			{{ruleForm.errMsg}}
		</li>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				count:0
				navlist:[{
					text:'我的订单',
					link: '/user/orderList'
				},
					text:'zhanghan',
					link: '/user/information'
				},
				{
					text:'123',
					link: '/user/addresslist'
				}]
			}
		},
		methods:{
			increment(){
				this.count++
			},
			login(){
				const{email,password}= this.ruleForm
				if(!email || !password){
					this.ruleForm.errMsg="123"
				}else{
					let params = {email,password}
					userLogin(params).then(res => {
						if(res.status ==='0'){
							if(this.cart.length){
								addCartBatch({productMsg:this.cart}).then(res => {
									if(res.status==='1'){
										removeStore('buycart')
									}
								}).then(this.$router.go(-1))
							}else{
								this.$router.go(-1)
							}
						}else{
							this.ruleForm.errMsg=res.msg
						}
					})
				}
			}
			regist(){
				const{email,password1,password2}=this.registered
				if(!email||!password1||!password2){
					this.ruleForm.errMsg="buweikong"
						return false
				}if(password2 !== password1){
					this.registered.errMsg="buxiangtong"
				}
				register({email,password}).then(res => {
					this.registered.errMsg = res.msg
					if(res.status === '0'){
						setTimeout(()=>{
							this.ruleForm.errMsg=''
							this.registered.errMsg=''
							this.loginPage = true
						},500)
					}
				})

				}
			}
		}
	}
</script>

-->










