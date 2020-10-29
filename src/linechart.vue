<template>
  <div>
    <zingchart :data="chartData" :series="chartSeries"></zingchart>
  </div>
</template>

<script>
import Vue from "vue";
import AppVue from './App.vue';
import "zingchart/es6";
import zingchartVue from "zingchart-vue";


export default {
    components: {
        zingchart: zingchartVue
    },
    data() {
        return {
          intervalId: null,
          chartData: {
            type: "line"
          },
          array:[]
        };
    },
    computed: {
      chartSeries() {  
        return [
          {
            values: this.array     
          }
        ];
      }
    },
    mounted() {
      document.getElementById("zingchart-vue-0-license-text").remove();
      
      if(localStorage.getItem('arrayResultOfPlay') != null){
        this.getInfo();
      }
    },
    methods: {
      getInfo(){
        var ArrayResult = localStorage.getItem('arrayResultOfPlay');
        var array = ArrayResult.split(",");
        var ArrayTotalResult = [0];

        var scoreTotal = 0;
        for(var i=1 ; i<array.length ; i++ ){
          if(array[i] == 'win'){
            scoreTotal--;
          }else{
            scoreTotal++;
          }
          ArrayTotalResult.push(scoreTotal);
        }
        console.log(ArrayTotalResult);
        this.array = ArrayTotalResult;
      }
    },
    beforeDestroy() {
        window.clearInterval(this.intervalId);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
