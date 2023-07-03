<template>
<div>
  <div>
    <ContentLayer></ContentLayer>
  </div>

  <div>
    <FiveBtn></FiveBtn>
  </div>
</div>
</template>

<script>
import ContentLayer from '@/components/ContentsLayer.vue'
import FiveBtn from '@/components/FiveBtn.vue'

export default {
  components: {
    ContentLayer,
    FiveBtn,
    }
}
</script>

<style>
</style>
