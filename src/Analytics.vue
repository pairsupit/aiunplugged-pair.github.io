<template>
    <div id="analytics">
        <h1><b>การวิเคราะห์</b></h1>

        <div class="clearfix">
            
            <!-- Line Chart -->
            <div class="box">
                <h3>กราฟวิเคราะห์ระหว่างคะแนนสะสมของคอมพิวเตอร์กับจำนวนรอบที่เล่น</h3>
                <p>โดยกำหนดให้ เริ่มต้นมีคะแนนสะสมเป็น 0 และเมื่อคอมพิวเตอร์ชนะ คะแนนสะสมจะเพิ่มขึ้น 1 คะแนน</p>
                <h5 class="y-axis">คะแนนสะสมของ<br>The sweet computer (คะแนน)</h5>
                    <div class="size-line-chart">
                        <zingchart></zingchart>
                    </div>
                <h5 class="x-axis">รอบที่เล่น (รอบ)</h5>

                <!-- describes -->
                <!-- <div class="describe" style="text-align:left;">
                    <b>หมายเหตุ:</b> ชนะ หมายถึง playerได้คะแนน +1
                    <br>แพ้ หมายถึง the sweet learning computer ได้คะแนน +1
                </div> -->
                
                <div>เวลาในการเล่นเฉลี่ย: <span id="meanPlayTime">0</span> นาที</div>
                <div>จำนวนครั้งในการเล่น: <span id="playRound">0</span> รอบ</div>
            </div>
            
            <!-- Score pie-chart -->
            <div class="box">
                <h3>วิเคราะห์แบบสอบถามตัวชี้วัดหลังการใช้</h3>
                
                <div style="padding-top: 100px"> 
                    <div class="clearfix">
                        <div class="float">
                            <canvas id="my-chart1"></canvas>
                            <div style="margin-top: 20px">คิดเป็นคะแนนส่วนกติกา: <span id="lawRate">0</span> %</div>
                        </div>

                        <div class="float">
                            <canvas id="my-chart2"></canvas>
                            <div style="margin-top: 20px">คิดเป็นคะแนนส่วนการเรียนรู้: <span id="learningRate">0</span> %</div>
                        </div>

                    </div>
                    <!-- describes -->
                    <div class="describe" style="margin-top: 20px">
                        <div>เวลาในการทำแบบทดสอบเฉลี่ย: <span id="timeRate">0</span> นาที</div> 
                        <div>จำนวนครั้งในการทำแบบทดสอบ: <span id="roundRate">0</span> ครั้ง</div>   
                    </div>
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
        if(localStorage.ArraySecondsOfPlay != null){
            this.getPlayTimeNRound();
        }
    },
    methods:{
        getTestScore() {
            var score1 = 1;
            var score2 = 1;
            if(localStorage.sumLawScore != 0 && localStorage.sumLearningScore != 0){
                score1 = localStorage.sumLawScore;
                score2 = localStorage.sumLearningScore;
            }
            
                
            /* Draw a chart 1 */
            var ctx = document.getElementById('my-chart1');
            var myChart = new Chart( ctx, {
                type: 'pie',
                data: {
                    labels: ['คะแนนสะสมส่วนกติกาที่ถูกต้อง', 'คะแนนสะสมส่วนกติกาที่ผิด'],
                    datasets: [{
                    label: 'Page A',
                    data: [ score1, (localStorage.timesTest*5)-score1 ],
                    backgroundColor: ['#018abe', '#d6e8ee']
                   }]
                },
                options: {
                    responsive: true
                }
            })
            /* Draw a chart 1 */

            /* Draw a chart 2 */
            var ctx = document.getElementById('my-chart2');
            var myChart = new Chart( ctx, {
                type: 'pie',
                data: {
                    labels: ['คะแนนสะสมส่วนการเรียนรู้ที่ถูกต้อง', 'คะแนนสะสมส่วนการเรียนรู้ที่ผิด'],
                    datasets: [{
                    label: 'Page A',
                    data: [ score2 , (localStorage.timesTest*5)-score2 ],
                    backgroundColor: ['#018abe', '#d6e8ee']
                   }]
                },
                options: {
                    responsive: true
                }
            })
            /* Draw a chart 2 */

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

            document.getElementById("lawRate").innerText = ( (localStorage.sumLawScore/(localStorage.timesTest*5))*100 ).toFixed(2);
            document.getElementById("learningRate").innerText = ( (localStorage.sumLearningScore/(localStorage.timesTest*5))*100 ).toFixed(2);
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

h1, .clearfix {
    font-family: 'Bai Jamjuree', sans-serif;
    font-weight: 300;
}
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
    border: 1px solid lightgray ;
    float: left;
    margin: 20px;
    width: 45%;
    padding: 15px;
    
  /* margin: 1%; */
}
.float {
    float: left;
    margin: auto;
    width: 50%;
    padding: 0px;
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
.size-line-chart{
    width: 100%;
}
</style>