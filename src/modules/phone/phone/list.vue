<template>
	<div>
		<div class="head">
			<div class="head_list"></div>
		</div>
		<div v-for="(val, index) in list">
			<grid>
				<grid-item>{{index}}</grid-item>
				<grid-item>{{val}}</grid-item>
			</grid>
		</div>
	</div>
</template>
<script>
	import {Grid, GridItem} from 'vux'

	export default {
		data(){
			return {
				list:['apple','banana','organ'],
			}
		},
		components:{
			Grid,
			GridItem
		},
		methods:{

		}
	}
</script>
<style scoped lang="scss">
	@import '~styles/main.scss';

</style>