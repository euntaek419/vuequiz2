<template>
      <div class="table-container">
        <div class="wrapper">
          <div class="thead-tr">
            <span class="thbox contract">계약일</span>
            <span class="thbox deal">거래</span>
            <span class="thbox price">가격</span>
            <span class="thbox floor">층</span>
          </div>

          <!-- 연도 -->
          <div class="tbody-tr" v-for="(value, i) in sorted" :key="i">
            <span class="tdbox">
              <em>{{ 계약년(value) }}</em>
            </span>

            <!-- 연도의 데이터 -->
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
                <em style="width: 150px;display: inline-block;text-align: center;">
                    {{ 금액확인(value) }}
                </em>
                <em>{{ value.해당층수 }}층</em>
              </span>
            </span>
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
        임시계약년 : '',
    }
},
  computed: {
    sorted() {
      return this.data.slice().sort((a, b) => {
        return new Date(`${a.계약년}-${a.계약월}-${a.계약일}`) - new Date(`${b.계약년}-${b.계약월}-${b.계약일}`);
      });
    }
  },
methods:{
    계약년(payload){
        if(this.임시계약년 == payload.계약년){
            return 
        }else{
            this.임시계약년 = payload.계약년
            return this.임시계약년
        }
    },
    금액확인(payload){
        if(payload.물건거래명 == "월세"){
            return payload.보증금액 + "/" + payload.월세금액
        }else if(payload.물건거래명 == "전세"){
            return payload.전세실거래금액
        }else if(payload.물건거래명 == "매매"){
            return payload.매매실거래금액
        }
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
    border: 1px solid #eeeeee;
  }
  .tdbox.col5 {
    width: 100% - 56px;
    flex-flow: column;
  }
  .intd {
    border: 1px solid #eeeeee;
  }
</style>