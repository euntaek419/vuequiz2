<template>
  <div class="content">
    <div><h2>Sub</h2></div>
      <button @click="showLayer(temp)">Back</button>

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
      ...mapState(['temp']),
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