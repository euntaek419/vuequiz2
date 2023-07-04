<template>
<!-- 
  <div>
    <button class="Btn2018" @click="Btn2018" :style="{ backgroundColor : Btnonoff[0], color: Btnonoff[6] }">2018</button>
    <button class="Btn2019" @click="Btn2019" :style="{ backgroundColor : Btnonoff[1], color: Btnonoff[6] }">2019</button>
    <button class="Btn2020" @click="Btn2020" :style="{ backgroundColor : Btnonoff[2], color: Btnonoff[6] }">2020</button>
    <button class="Btn2021" @click="Btn2021" :style="{ backgroundColor : Btnonoff[3], color: Btnonoff[6] }">2021</button>
    <button class="Btn2022" @click="Btn2022" :style="{ backgroundColor : Btnonoff[4], color: Btnonoff[6] }">2022</button>
    <button class="Btn2023" @click="Btn2023" :style="{ backgroundColor : Btnonoff[5], color: Btnonoff[6] }">2023</button>
  </div>
-->

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
            Btnonoff: ['','','','','','Blue','red'],
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


        // Btn2018() {
        //     if(this.Btnonoff[0] == ''){
        //         this.counter = this.counter + 1
        //         return this.Btnonoff[0] = 'Blue'
        //     }
        //     else{
        //         if(this.counter !== 0){
        //             this.counter = this.counter - 1
        //             return this.Btnonoff[0] = ''
        //         }
        //     }
        // },
        // Btn2019() {
        //     if(this.Btnonoff[1] == ''){
        //         this.counter = this.counter + 1
        //         return this.Btnonoff[1] = 'Blue'
        //     }
        //     else{
        //         if(this.counter !== 0){
        //             this.counter = this.counter - 1
        //             return this.Btnonoff[1] = '' 
        //         }
        //     }
        // },
        // Btn2020() {
        //     if(this.Btnonoff[2] == ''){
        //         this.counter = this.counter + 1
        //         return this.Btnonoff[2] = 'Blue'
        //     }
        //     else{
        //         if(this.counter !== 0){
        //             this.counter = this.counter + 1
        //             return this.Btnonoff[2] = ''
        //         }
        //     }
        // },
        // Btn2021() {
        //     if(this.Btnonoff[3] == ''){
        //         this.counter = this.counter + 1
        //         return this.Btnonoff[3] = 'Blue'
        //     }
        //     else{
        //         if(this.counter !== 0){
        //             this.counter = this.counter - 1
        //             return this.Btnonoff[3] = ''
        //         }
        //     }
        // },
        // Btn2022() {
        //     if(this.Btnonoff[4] == ''){
        //         this.counter = this.counter + 1
        //         return this.Btnonoff[4] = 'Blue'
        //     }
        //     else{
        //         if(this.counter !== 0){
        //             this.counter = this.counter - 1
        //             return this.Btnonoff[4] = ''
        //         }
        //     }
        // },
        // Btn2023() {
        //     if(this.Btnonoff[5] == ''){
        //         this.counter = this.counter + 1
        //         return this.Btnonoff[5] = 'Blue'
        //     }
        //     else{
        //         if(this.counter !== 0){
        //             this.counter = this.counter - 1
        //             return this.Btnonoff[5] = '' 
        //         }
        //     }
        // },
    }

}
</script>

<style>

</style>