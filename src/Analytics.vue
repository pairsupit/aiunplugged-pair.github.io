<template>
    <div id="analytics">
        <h1>การวิเคราะห์</h1>

        <div class="clearfix">
            
            <!-- Line Chart -->
            <div class="box">
                <h4>วิเคราะห์การแพ้-ชนะ สำหรับการเล่นในครั้งต่อไปมีอัตรการแพ้สูงขึ้น</h4>
                <h5 class="y-axis">Sweet Learning Computer <br>Wins/Loses</h5>
                    <zingchart></zingchart>
                <h5 class="x-axis">Game</h5>

                <!-- describes -->
                <div class="describe" style="text-align:left;">
                    <b>หมายเหตุ:</b> ชนะ หมายถึง playerได้คะแนน +1
                    <br>แพ้ หมายถึง the sweet learning computer ได้คะแนน +1
                </div>
            </div>
            
            <!-- Score pie-chart -->
            <div class="box">
                <h4>วิเคราะห์แบบสอบถามตัวชี้วัดหลังการใช้</h4>
                    <canvas id="my-chart" style="padding-top: 100px; padding-bottom: 100px"></canvas>
                <br>
                <!-- describes -->
                <div class="describe" style="text-align:left; padding-left: 100px">
                    <div>คิดเป็นคะแนนส่วนกติกา: <span id="lawRate">0</span> %</div>
                    <div>คิดเป็นคะแนนส่วนการเรียนรู้: <span id="learningRate">0</span> %</div>
                    <div>เวลาในการทำแบบทดสอบเฉลี่ย: <span id="timeRate">0</span> นาที</div> 
                    <div>จำนวนครั้งในการทำแบบทดสอบ: <span id="roundRate">0</span> ครั้ง</div>   
                </div>
            </div>

            <!-- จำนวนครั้งในการเล่นเฉลี่ย และเวลา -->
            <div class="box" style="width: 14%; padding-top: 220px;">
                    <div style="text-align: left">
                    <div>เวลาในการเล่นเฉลี่ย: <span id="meanPlayTime">0</span> นาที</div>
                    <div>จำนวนครั้งในการเล่น: <span id="playRound">0</span> รอบ</div>
                </div>
                <!-- describes -->
                <div class="describe" style="text-align:left;">
                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import AppVue from './App.vue';
import zingchart from "./linechart.vue";
import Chart from 'chart.js';


export default {
    name:"analytics",
    data: function(){
        return { 
            score_1: 0,
            score_2: 0,
            minute: 0,
            second: 0
        }
    },
    components: {
        zingchart: zingchart
    },
    mounted(){
        
        this.getTestScore();
        this.getPlayTimeNRound();
    },
    methods:{
        getTestScore() {
            var score1 = 1;
            var score2 = 1;
            if(localStorage.sumLawScore != undefined && localStorage.sumLearningScore != undefined){
                score1 = localStorage.sumLawScore;
                score2 = localStorage.sumLearningScore;
            }
            
                
            /* Draw a chart */
            var ctx = document.getElementById('my-chart');
            var myChart = new Chart( ctx, {
                type: 'pie',
                data: {
                    labels: ['คะแนนส่วนกติกา', 'คะแนนส่วนการเรียนรู้'],
                    datasets: [{
                    label: 'Page A',
                    data: [ score1 , score2 ],
                    backgroundColor: ['#3e95cd', '#8e5ea2']
                   }]
                },
                options: {
                    responsive: true
                }
            })
            /* Draw a chart */

            // var Arrayseconds = localStorage.getItem('ArraySecondsOfTest');
            // var array = Arrayseconds.split(",");
            if(localStorage.sumLawScore+localStorage.sumLearningScore > 0){
                this.showTestScore();
            }
            
        },
        showTestScore(){
            /* แสดงผล law_score, learning_score, TestMeanTime ,TestRound*/
            var Arrayseconds = localStorage.getItem('ArraySecondsOfTest');
            var array = Arrayseconds.split(",");

            var sumseconds = 0;
            for(var i=1 ; i<array.length ; i++){
                sumseconds += parseInt(array[i]);
            }
            var testRate = sumseconds/localStorage.timesTest;
            AppVue.minute = testRate / 60;
            AppVue.second = testRate % 60;
            AppVue.minute = AppVue.minute < 10 ? "0" + AppVue.minute.toFixed(0) : AppVue.minute.toFixed(0);
            AppVue.second = AppVue.second < 10 ? "0" + AppVue.second.toFixed(0) : AppVue.second.toFixed(0);
            document.getElementById("timeRate").innerText = AppVue.minute +"."+AppVue.second;

            document.getElementById("lawRate").innerText = ( (localStorage.sumLawScore/(localStorage.timesTest*3))*100 ).toFixed(2);
            document.getElementById("learningRate").innerText = ( (localStorage.sumLearningScore/(localStorage.timesTest*2))*100 ).toFixed(2);
            document.getElementById("roundRate").innerText = localStorage.timesTest;
            /* แสดงผล law_score, learning_score, MeanTime */     
        },
        getPlayTimeNRound(){

                /* แสดงผล PlayMeanTime, PlayRound */
                var Arrayseconds = localStorage.getItem('ArraySecondsOfPlay')
                var array = Arrayseconds.split(",");
                var sumseconds = 0;
                for(var i=1 ; i<array.length ; i++){
                    sumseconds += parseInt(array[i]);
                }
                var meanPlayTime = sumseconds/localStorage.times;
                AppVue.minute =  meanPlayTime / 60;
                AppVue.second =  meanPlayTime % 60;
                AppVue.minute = AppVue.minute < 10 ? "0" + AppVue.minute.toFixed(0) : AppVue.minute.toFixed(0);
                AppVue.second = AppVue.second < 10 ? "0" + AppVue.second.toFixed(0) : AppVue.second.toFixed(0);
                document.getElementById("meanPlayTime").innerText = AppVue.minute+"."+AppVue.second;
                document.getElementById("playRound").innerText = localStorage.times;
                /* แสดงผล PlayMeanTime, PlayRound */

        }
    }
}
</script>

<style scoped>

.descript{
    text-align: left;
}
.x-axis{
    text-align: right;
    padding: 0px;
    margin: 0px;
}
.x-axis2{
    float: left;
    padding: 0px;
    padding-left: 45px;
    margin: 0px;
}
.y-axis{
    text-align: left;
    padding: 0px;
    margin: 0px;
}
.box {
  float: left;
  margin: 0 auto;
  width: 35%;
  padding: 40px;
  /* margin: 1%; */
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.grid {
  display: grid;
  row-gap: 2rem;
}
</style>