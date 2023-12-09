<template>
    <div>
      <div class="table-container">
        <div class="wrapper">
          <div class="btn-box">
            <span>
                실거래가
            </span>
            <span class="sort-btn">
              <button @click="all">전체</button>
              <button @click="buy">매매</button>
              <button @click="rent">전/월세</button>
            </span>
          </div>
          <div class="thead-tr">
            <span class="thbox contract">계약일</span>
            <span class="thbox deal">거래</span>
            <span class="thbox price">가격</span>
            <span class="thbox floor">층</span>
          </div>

          <div v-for="(value,i) in sorted" :key="i">
            
            <div class="tbody-tr">
                <span class="tdbox" v-if="i === 0 || sorted[i - 1].계약년 !== value.계약년">
                    <em v-if="i === 0 || sorted[i - 1].계약년 !== value.계약년">{{ value.계약년 }}</em>
                </span>
                <span class="tdbox" style="border : none;">
                </span>


                <span
                    class="tdbox col5" 
                    style="display: flex; justify-content: center; width: 454px"
                >

                    <span class="intd">
                        <em style="width: 56px;display: inline-block;">
                            {{ value.계약월 }}.{{ value.계약일 }}
                        </em>
                        <em style="width: 77px;text-align: center;margin: 0 auto;display: inline-block;">
                            {{ value.물건거래명 }}
                        </em>
                        <em style="width: 150px;display: inline-block;text-align: center;" v-if="value.물건거래명 == '월세'">
                           {{ Math.floor(value.보증금액 / 10000) }}억 {{ addComma(value.보증금액 % 10000) }}/{{ value.월세금액 }}
                        </em>

                        <em style="width: 150px;display: inline-block;text-align: center;" v-if="value.물건거래명 == '전세'" >
                            {{ Math.floor(value.전세실거래금액/10000) }}억
                        </em>

                        <em style="width: 150px;display: inline-block;text-align: center;" v-if="value.물건거래명 == '매매'">
                            {{ Math.floor(value.매매실거래금액/10000) }}억
                        </em>


                        <em>{{ value.해당층수 }}층</em>
                    </span>
                </span>
            </div>
          </div>
        
        </div>
      </div>
    </div>
</template>

<script>
import TableData from '@/js/tableData'

export default {
data() {
    return {
        data : TableData,
        원본 : TableData,
        전월세 : [],
        매매 : [],
    }
},
mounted(){
        for(let i=0; i < this.data.length; i++){
            if(this.data[i].물건거래명 == "매매"){
                this.매매.push(this.data[i])
            }else{
                this.전월세.push(this.data[i])
            }
    }
},
  computed: {
    sorted() {
      return this.data.slice().sort((a, b) => {
        const dateA = new Date(`${a.계약년}-${a.계약월}-${a.계약일}`);
        const dateB = new Date(`${b.계약년}-${b.계약월}-${b.계약일}`);
        return dateA - dateB;
      });
    }
  },
methods:{
    all(){
        this.data = this.원본
    },
    rent(){
        this.data = this.전월세
    },
    buy(){
        this.data = this.매매
    },
    addComma(number) {
    
        let strNumber = number.toString();
    
        let commaIndex = strNumber.length % 3;
    
        let result = strNumber.slice(0, commaIndex);
    
        for (let i = commaIndex; i < strNumber.length; i += 3) {
            if (i !== 0) {
                result += ',';
            }
            result += strNumber.slice(i, i + 3);
    }
    
    return result;
}
}
}


</script>

<style>
  .table-container {
    width: 1000px;
    margin: 0 auto;
  }
  .wrapper {
    width: 500px;
  }
  .btn-box{
    margin : 10px;
  }
  .sort-btn{
    float: right;
  }
  .thead-tr {
    display: flex;

    background: #f5f5f5;
    align-items: center;
  }
  .contract {
    width: 116px;
  }
  .deal {
    width: 77px;
  }
  .price {
    width: 150px;
  }
  .floor {
    width: 50px;
  }
  .thbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tbody-tr {
    display: flex;
    align-items: stretch;
  }
  .tdbox:nth-child(1) {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #eeeeee;
  }
  .tdbox.col5 {
    width: 100% - 56px;
    flex-flow: column;
  }
  .intd {
    border: 1px solid #eeeeee;
  }
</style>