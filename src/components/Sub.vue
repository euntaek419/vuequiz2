<template>
  <div class="content">
    <div><h2>Sub</h2></div>
    <div v-if="num == 1">
      <button @click="showLayer('First')">Back</button>
    </div>

    <div v-if="num == 2">
     <button @click="showLayer('Second')">Back</button>
    </div>

  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    methods:{
        ...mapActions(['setPageName']),
        showLayer(param) {
            this.setPageName(param);
        },
    },

    computed: {
      ...mapState(['num']),
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