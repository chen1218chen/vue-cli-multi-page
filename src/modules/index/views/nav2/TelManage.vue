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
		<el-table :data="telephones" border highlight-current-row v-loading="loading" style="width: 100%;" :row-class-name="tableRowClassName">
			<el-table-column type="expand">
				<template scope="props">
					<el-form label-position="left" inline class="demo-table-expand">
						<el-form-item label="单位名称">
							<span>{{ props.row.name }}</span>
						</el-form-item>
						<el-form-item label="经度">
							<span>{{ props.row.lon.number }}</span>
						</el-form-item>
						<el-form-item label="纬度">
							<span>{{ props.row.lat.number }}</span>
						</el-form-item>
						<el-form-item label="联系电话">
							<span>{{ props.row.telephone }}</span>
						</el-form-item>
						<el-form-item label="描述">
							<span>{{ props.row.description }}</span>
						</el-form-item>
						<el-form-item label="地址">
							<span>{{ props.row.address }}</span>
						</el-form-item>
					</el-form>
				</template>
			</el-table-column>
			<el-table-column type="index" width="60">

			</el-table-column>
			<el-table-column prop="name" label="姓名" width="200" sortable>
			</el-table-column>
			<el-table-column prop="lon.number" label="经度" width="150" sortable>
			</el-table-column>
			<el-table-column prop="lat.number" label="纬度" width="150"></el-table-column>
			<el-table-column prop="telephone" label="联系电话" width="150">
				<template scope="scope">
					<i class="fa fa-phone"></i>
					<!-- <el-icon name="time"></el-icon> -->
					<span style="margin-left: 10px">{{ scope.row.telephone }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="description" label="描述" width="100" sortable>
				<template scope="scope">
					<el-popover trigger="hover" placement="top">
						<p>姓名: {{ scope.row.name }}</p>
						<p>地址: {{ scope.row.address }}</p>
						<p>电话：{{scope.row.telephone}}</p>
						<p>描述：{{scope.row.description}}</p>
						<div slot="reference" class="name-wrapper">
							<el-tag>{{ scope.row.name }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column prop="address" label="地址" min-width="200" sortable>
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="50">
				<template scope="scope">
					<el-button @click.native.prevent="deleteRow(scope.$index, telephones)"
					type="text" size="small"> 删除 </el-button>
				</template>
			</el-table-column>
		</el-table>

	</section>
</template>
<script>
	import { getTelephone } from 'api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				telephones: [
				]
			}
		},
		methods: {
			//获取info列表
			getInfo: function () {
				let para = {
					name: this.filters.name
				};
				this.loading = true;
				//NProgress.start();
				getTelephone(para).then((res) => {
					// console.dir(res.data.telephones);
					this.telephones = res.data.telephones;
					this.loading = false;
					//NProgress.done();
				});
			},
			tableRowClassName:function(row, index) {
				if (index === 1) {
					return 'info-row';
				} else if (index === 3) {
					return 'positive-row';
				}
				return '';
			},
			deleteRow(index, rows) {
				console.dir(rows);
				rows.splice(index, 1);
			}
		},
		mounted:function() {
			this.$nextTick(function(){
				this.getInfo();
			})
		}
	}

</script>

<style scoped>
	.demo-table-expand {
		font-size: 0;
	}
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>