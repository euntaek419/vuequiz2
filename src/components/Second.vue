<template>
	<div class="content">
		<div><h2>Second</h2></div>
		<button @click="showLayer('Sub')">Sub</button>
		<button @click="closeLayer()">Back</button>
	</div>
</template>
<script>
import {mapActions} from 'vuex'

export default {

	methods:{
		...mapActions(['setPageName','closePageName']),
		showLayer(param) {
			this.setPageName(param);
		},
		closeLayer() {
			this.closePageName();
		}
	},
}
</script>
<style>
.content {
	position: fixed;
	width:300px;
	height:100%;
	left:0;
	background: #442222;
}
</style>