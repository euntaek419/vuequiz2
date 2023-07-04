<template>
  <div>
    <span v-for="(item, index) in list" :key="item">
      <button @click="BtnClicked(index)" :style="{ backgroundColor : Btnonoff[index], color : 'red' }"> {{ item }} </button>
    </span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            Btnonoff: ['','','','','','Blue'],
            counter:0,
            list:[2018,2019,2020,2021,2022,2023],
        }
    },
    methods:{
        BtnClicked(index) {
            if(this.Btnonoff[index] == ''){
                this.counter = this.counter + 1
                return this.Btnonoff[index] = 'Blue'
            }
            else{
                if(this.counter !== 0){
                    this.counter = this.counter - 1
                    return this.Btnonoff[index] = ''
                }
            }
        },
    }

}
</script>

<style>

</style>