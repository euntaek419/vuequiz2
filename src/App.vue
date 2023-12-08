<template>
<div>
  <div>
    <ContentLayer></ContentLayer>
  </div>

  <div>
    <FiveBtn></FiveBtn>
  </div>

  <div style="margin-top: 100px;">
    <Table></Table>
  </div>
</div>
</template>

<script>
import ContentLayer from '@/components/ContentsLayer.vue'
import FiveBtn from '@/components/FiveBtn.vue'
import Table from '@/components/Table'

export default {
  components: {
    ContentLayer,
    FiveBtn,
    Table
    }
}
</script>

<style>
</style>
