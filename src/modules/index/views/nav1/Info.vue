<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getInfo">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="infos" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="100" sortable>
				</el-table-column>
				<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
				</el-table-column>
				<el-table-column prop="picturePath" label="地址" width="250"></el-table-column>
				<el-table-column prop="age" label="年龄" width="100" sortable>
				</el-table-column>
				<el-table-column prop="dateTime" label="时间" width="120" sortable>
				</el-table-column>
				<el-table-column prop="addr" label="地址" min-width="180" sortable>
				</el-table-column>
			</el-table>
		</template>

	</section>
</template>
<script>
	import { getInfoList } from 'api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				infos: [
				]
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取info列表
			getInfo: function () {
				let para = {
					name: this.filters.name
				};
				this.loading = true;
				//NProgress.start();
				getInfoList(para).then((res) => {
					//console.dir(res.data);
					this.infos = res.data.infos;
					this.loading = false;
					//NProgress.done();
				});
			}
		},
		mounted:function() {
			this.getInfo();
		}
	};

</script>

<style scoped>

</style>