<template>
<div>
	<div class="head">
		<div class="head_2"></div>
		<!-- <group-title>rows = 3</group-title> -->
	</div>
	<div>
		<grid>

			<grid-item link="grid/uploadInfo" class="grid-center">
				<img slot="icon" src="~assets/user.png" alt=""><span>uploadinfo</span>
			</grid-item>
			<grid-item link="grid/list" class="grid-center"><i
				class="fa fa-check-square-o fa-2x icon_top icon_blue"
				aria-hidden="true"></i><br> <span>办事指南</span>
			</grid-item>
			<grid-item link="grid/element" class="grid-center"><i
				class="fa fa-car fa-2x icon_top icon_organ" aria-hidden="true"></i><br>
				<span>element</span>
			</grid-item>
		</grid>
		<grid>
			<grid-item link="" class="grid-center"><i class="fa fa-female fa-2x icon_top "
				aria-hidden="true"></i><br> <span>公厕导航</span>
			</grid-item>
			<grid-item link="" class="grid-center"><i
				class="fa fa-tree fa-2x icon_top icon_green" aria-hidden="true"></i><br>
				<span>公园广场</span>
			</grid-item>
			<grid-item link="grid/telephone" class="grid-center"><i
				class="fa fa-volume-control-phone fa-2x icon_top icon_purple"
				aria-hidden="true"></i><br> <span>联系我们</span></grid-item>
			</grid>
			<grid>
				<grid-item link="grid/timeline" class="grid-center"><i
					class="fa fa-file-excel-o fa-2x icon_top icon_green"
					aria-hidden="true"></i><br> <span
					style="font-size: 14px; line-height: 10px;">行政处罚
				</span>
			</grid-item>
			<grid-item link="../#" class="grid-center" @on-item-click="onItemClick">
				<i class="fa fa-phone fa-2x"></i><br>电话
			</grid-item>
			<grid-item  class="grid-center">
				<router-link to="grid/map"><i class="fa fa-map fa-2x"></i><br />地图</router-link>
			</grid-item>
		</grid>
		<foot></foot>
	</div>
</div>
</template>
<script>
	import {Grid, GridItem, GroupTitle} from 'vux'
	import Foot from './foot.vue'

	export default{
		components:{
			Grid,
			GridItem,
			GroupTitle,
			Foot
		},
		methods:{
			onItemClick(){
				console.log("ccccc");
			}
		}

	}
</script>

<style scoped lang="scss">
	@import '~styles/main.scss';

	.grid-center {
		display: block;
		text-align: center;
		color: #666;
	}
</style>