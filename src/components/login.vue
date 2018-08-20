<template>
	<div>
		<Header></Header>
		<el-row>
			<el-col :span="10" :offset="7">
				<el-tabs v-model="activeName" style="margin-top:200px">
					<el-tab-pane label="登录" name="login">
                        <el-form :model="loginForm" :rules="rules" label-width="100px" ref="loginForm">
                            <el-form-item label="用户名" prop="email">
                                <el-input v-model="loginForm.email"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input v-model="loginForm.password" type="password"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                                <el-button @click="resetForm('loginForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>

                    <el-tab-pane label="注册" name="register">
                        <Register></Register>
                    </el-tab-pane>


				</el-tabs>
			</el-col>
		</el-row>
		<Footers style="margin-top:300px"></Footers>
	</div>
</template>

<script>
	import Register from '@/components/register'
	import Header from '@/common/Header'
	import Footers from '@/common/Footers'
	export default{
		data(){
			return{
				activeName:'login',
				loginForm:{
					email:'',
					password:''
				},
				rules:{
					email:[
					{ required: true, message: '用户名不能少', trigger: 'blur'},
                    { min: 6, max: 20, message: '用户名在6到20位之间', trigger: 'blur'}
					],
					password:[
					{required:true ,message:'请输入密码', trigger: 'blur'}
					]
				}
			}
		},
		methods:{
			resetForm(formName){
				this.$refs[formName].resetFields();
			}
			// submitForm(formName){
			// 	this.$refs[formName].validate((valid) => {
			// 		if(valid){
			// 			let opt = this.loginForm;
			// 			api.userLogin(opt)
			// 			.then({data}) =>{
			// 				if(data.info===false){
			// 					this.$message({
			// 						type:'info'
			// 						message:'账号不存在'
			// 					});
			// 					return ;
			// 				}
			// 				if(data.success){
			// 					this.$message({
			// 						type: 'success'
			// 						message:'登陆成功'
			// 					})
			// 					let token =data.token;
			// 					let email = data.email;
			// 					this.$store.dispatch('UserLogin',token);
			// 					this.$store.dispatch('email',email);
			// 					let redirectUrl = decodeURIComponent(this.$route.query.redirect || '/');
			// 					this.$router.push({
			// 						path: redirectUrl
			// 					});
			// 				}else{
			// 					this.$message({
			// 						type: 'info',
			// 						message: '密码错误'
			// 					});
			// 				}
			// 			}
			// 		}
			// 	})
			// }
		},
		components:{
			Register,
			Header,
			Footers
		}
	}
</script>










