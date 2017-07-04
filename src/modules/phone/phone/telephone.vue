<template>
	<el-row><el-col :span="24">
		<div class="head"><div class="head_contactUS"></div></div>
		<!--列表-->
		<template>
			<el-table :data="telephones" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column prop="name" label="姓名" width="100" sortable>
				</el-table-column>
			<!-- 	<el-table-column prop="lon.number" label="经度" width="150" sortable>
			</el-table-column>
			<el-table-column prop="lat.number" label="纬度" width="150"></el-table-column> -->
				<el-table-column prop="telephone" label="联系电话" width="130"></el-table-column>
			<!-- 	<el-table-column prop="description" label="描述" width="300" sortable>
		</el-table-column> -->
			<!-- <el-table-column prop="address" label="地址" min-width="200" sortable>
			</el-table-column> -->
			<el-table-column prop="" label="详情">
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
	</el-table>
</template>

</el-col></el-row>
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
					this.telephones = res.data.telephones;
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

<style scoped lang="scss">
	@import '~styles/main.scss';

	.grid-center {
		display: block;
		text-align: center;
		color: #666;
	}
</style>