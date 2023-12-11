<template>
<div>
  <div>
    <ContentsLayer></ContentsLayer>
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
import ContentsLayer from '@/components/ContentsLayer'
import FiveBtn from '@/components/FiveBtn'
import Table from '@/components/Table'

export default {
  components: {
    ContentsLayer,
    FiveBtn,
    Table
    }
}
</script>

<style>
</style>
