<template>

  <div id="test">
    <h1>ตัวชี้วัดหลังการเล่น</h1>

    <!-- <form> -->
    <form @submit="submitTest">
        <ol>
            <li>เมื่อเริ่มเกมส์แล้ว ข้อใดต่อไปนี้ถูกต้อง

                <label for="1.1">
                    <input type="radio" name="1_ans" id="1.1" value="false">
                        <span id="1.1_ans">ในการเดินตาที่สองเป็นของ The sweet computer</span></label>
                
                <label for="1.2">
                    <input type="radio" name="1_ans" id="1.2" value="false">
                        <span id="1.2_ans">เราสามารถเดินทแยงได้ก็ต่อเมื่อมีหมากอยู่เท่านั้น</span></label>

                <label for="1.3">
                    <input type="radio" name="1_ans" id="1.3" value="false">
                        <span id="1.3_ans">เราสามารถเดินตรงได้ก็ต่อเมื่อไม่มีหมากอยู่ด้านหน้า</span></label>

                <label for="1.4">
                    <input type="radio" name="1_ans" id="1.4" value="true">
                        <span id="1.4_ans">ถูกทุกข้อ</span></label>

            </li>

            <li>จากรูป the sweet computer จะสามารถเดินไปกี่กรณี อะไรบ้าง?
                <br>
                <img src="../src/assets/test_3.png" id="test_2">

                <label for="2.1">
                    <input type="radio" name="2_ans" id="2.1" value="false">
                        <span id="2.1_ans">1 กรณี หมายเลข 2 เดินแบบเฉียงกินหมายเลข 3</span></label>
                
                <label for="2.2">
                    <input type="radio" name="2_ans" id="2.2" value="true">
                        <span id="2.2_ans">2 กรณี  หมายเลข 2 เดินตรงไปข้างหน้า และหมายเลข 2 เดินแบบเฉียงกินหมายเลข 3</span></label>

                <label for="2.3">
                    <input type="radio" name="2_ans" id="2.3" value="false">
                        <span id="2.3_ans">2 กรณี  หมายเลข 1 เดินแบบตรงกินหมายเลข 3 และ หมายเลข 2 เดินแบบเฉียงกินหมายเลข 3</span></label>

                <label for="2.4">
                    <input type="radio" name="2_ans" id="2.4" value="false">
                        <span id="2.4_ans">3 กรณี  หมายเลข 1 เดินแบบตรงกินหมายเลข 3,  หมายเลข 2 เดินแบบเฉียงกินหมายเลข 3 และ หมายเลข 2 เดินไปข้างหน้า</span></label>

            </li>

            <li>ข้อใดพูดถึงกติกา<u>ผิด</u>

                <label for="3.1">
                    <input type="radio" name="3_ans" id="3.1" value="false">
                        <span id="3.1_ans">เราจะชนะถ้าไปถึงอีกด้านหนึ่งของกระดาน</span></label>
                
                <label for="3.2">
                    <input type="radio" name="3_ans" id="3.2" value="true">
                        <span id="3.2_ans">คุณชนะเมื่อคุณไม่สามารถเคลื่อนที่ได้อีกต่อไป</span></label>

                <label for="3.3">
                    <input type="radio" name="3_ans" id="3.3" value="false">
                        <span id="3.3_ans">เมื่อคู่ต่อสู้กินหมากจนหมด คู่ต่อสู้จะชนะ</span></label>

                <label for="3.4">
                    <input type="radio" name="3_ans" id="3.4" value="false">
                        <span id="3.4_ans">คุณแพ้เมื่อคุณไม่สามารถเคลื่อนที่ได้อีกต่อไป</span></label>

            </li>

            <li>ข้อใดต่อไปนี้<u>ผิด</u>

                <label for="4.1">
                    <input type="radio" name="4_ans" id="4.1" value="false">
                        <span id="4.1_ans">ในครั้งแรก The sweet computer มีการเดินแบบสุ่ม</span></label>
                
                <label for="4.2">
                    <input type="radio" name="4_ans" id="4.2" value="false">
                        <span id="4.2_ans">ในครั้งแรกมีจำนวนลูกอมเท่ากับการจำนวนการเคลื่อนที่ของ the sweet computer ที่เป็นไปได้</span></label>

                <label for="4.3">
                    <input type="radio" name="4_ans" id="4.3" value="false">
                        <span id="4.3_ans">การแพ้ทำให้ the sweet computer เรียนรู้โดยการเลิกการเคลื่อนที่ตำแหน่งเดิมที่ทำให้แพ้</span></label>

                <label for="4.4">
                    <input type="radio" name="4_ans" id="4.4" value="true">
                        <span id="4.4_ans">การเรียนรู้ของ the sweet learning computer เกิดจากการให้ลูกอมเป็นรางวัลเมื่อชนะ</span></label>

            </li>
            
            <li>เหตุผลในข้อใด ไม่นำไปสูการเรียนรู้ของ the sweet computer


                <label for="5.1">
                    <input type="radio" name="5_ans" id="5.1" value="false">
                        <span id="5.1_ans">การแพ้ของ the sweet computer</span></label>
                
                <label for="5.2">
                    <input type="radio" name="5_ans" id="5.2" value="false">
                        <span id="5.2_ans">การสุ่มการเดินแต่ละรอบไปเรื่อยๆ ของ the sweet computer</span></label>

                <label for="5.3">
                    <input type="radio" name="5_ans" id="5.3" value="false">
                        <span id="5.3_ans">การยกเลิกการเดินเมื่อแพ้</span></label>

                <label for="5.4">
                    <input type="radio" name="5_ans" id="5.4" value="true">
                        <span id="5.4_ans">การให้รางวัลเมื่อ the sweet computer ชนะ</span></label>

            </li>
        </ol>

    <button id="btnSubmit" type="submit">submit</button>

    </form>
    
  </div>
</template>

<script>
import AppVue from './App.vue';
import axios from 'axios';

export default {
    name: "test",
    data(){
        return {
            score: 0,
            score_1: 0,
            score_2: 0,
            timeRun : 0//เวลาที่วิ่ง 1,2,3
        }
    },
    mounted(){
        var d = new Date();
        var buttonSubmit = document.getElementById("btnSubmit");
        var inputCheck = document.getElementsByTagName("input");
        var isItFive;

        var watchStop = setInterval(function(){   

                this.timeRun = ((new Date() - d)/1000).toFixed(0);
                // console.log(this.timeRun);
                var countToCheck = 0;

                for(var i=0; i< inputCheck.length; i++){
                    if(inputCheck[i].checked == true){
                        countToCheck++
                    };
                };

                isItFive = countToCheck;
                buttonSubmit.onclick = myStopFunction; 
        }, 1000)

        function myStopFunction() {
            if(isItFive == 5){                
                // clearInterval(watchStop);
                d = new Date();
            }       
        }
    },
    methods: {
        clearPage: function(){
            for( var i = 1 ; i <= 5 ; i++ ){
                for( var j = 1 ; j <= 4 ; j++ ){  
                    document.getElementById(i +"."+ j).checked = false;
                }
            }

            this.score = 0, this.score_1 =0, this.score_2=0; // เซ็ทค่า score, score_1, score_2 ให้เป็น 0 เมื่อมีการเช็คคำตอบแล้ว
        },
        submitTest: function(e){
            e.preventDefault();
            var countToCheck = 0; // declare to do 5 checks
            // console.log("before post timeRun: "+ timeRun);

            var inputCheck = document.getElementsByTagName("input");
            for(var i=0; i< inputCheck.length; i++){
                if(inputCheck[i].checked == true){
                    countToCheck++
                };
            };

            if( countToCheck == 5){
                if(document.getElementById("1.4").checked == true ){
                    this.score++; this.score_1++;
                    localStorage.sumLawScore++;
                };
                if(document.getElementById("2.2").checked == true){
                    this.score++; this.score_1++;
                    localStorage.sumLawScore++;
                };
                if(document.getElementById("3.2").checked == true){
                    this.score++; this.score_1++;
                    localStorage.sumLawScore++;
                };
                if(document.getElementById("4.4").checked == true){
                    this.score++; this.score_2++;
                    localStorage.sumLearningScore++;
                };
                if(document.getElementById("5.4").checked == true){
                    this.score++; this.score_2++;
                    localStorage.sumLearningScore++;
                };
               
                alert("คะแนนรวมทั้งหมด : " + this.score +",คะแนนส่วนกติกาการเล่น :" + 
                this.score_1 +",คะแนนส่วนกติกาการเล่น :"+ this.score_2);

                
                var answerArray = [];
                for( var i = 1 ; i <= 5 ; i++ ){
                    for( var j = 1 ; j <= 4 ; j++ ){  
                        if(document.getElementById(i +"."+ j).checked === true){    //Checked radio button
                            var x = document.getElementById(i +"."+ j+"_ans").innerText;
                            answerArray.push(x);    //Checked text that macthes radio button
                        }
                    }
                }
                /* This is timeStamp */
                var date = new Date();  
                var dateFormat = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

                var minute = (date.getMinutes() < 10) ? "0"+date.getMinutes() : date.getMinutes() ;
                var second = (date.getSeconds() < 10) ? "0"+date.getSeconds() : date.getSeconds() ;
                var time = date.getHours() +":"+ minute +":"+ second;
                var DateTime = dateFormat+", "+time;
                /* This is timeStamp */

                /* เพิ่มการบันทึกเวลาใน localStorage */
                var newArray = [];
                newArray.push(timeRun);
                var oldArray = localStorage.getItem('ArraySecondsOfTest');
                var ArraySecondsOfTest = [];
                ArraySecondsOfTest.push(oldArray);
                ArraySecondsOfTest.push(newArray);
                localStorage.setItem('ArraySecondsOfTest', ArraySecondsOfTest);
                /* เพิ่มการบันทึกเวลาใน localStorage */
                
                let res = axios.post('https://script.google.com/a/kkumail.com/macros/s/AKfycbyuiweQMXK0_EdZsBcak4gvrm8v1KNNnD9sWj6GiBd4CJObHnA/exec',
                        {   uuid: localStorage.uuid,
                            action: "insertTestScore",
                            lawScore: this.score_1,
                            answer1: answerArray[0],
                            answer2: answerArray[1],
                            answer3: answerArray[2],
                            answer4: answerArray[3],
                            answer5: answerArray[4],
                            learningScore: this.score_2,
                            timeStop: timeRun,
                            timeStamp: DateTime
                        }).then(function(res){
                            console.log("uuid :"+res.data.uuid);
                            console.log("action :"+res.data.action);
                            console.log("law_score :"+res.data.lawScore);
                            console.log("learning_score :"+res.data.learningScore);
                            console.log("timeStop :"+res.data.timeStop);
                            console.log("answer array :"+answerArray);
                            console.log("timeStamp :"+DateTime);

                })

                localStorage.timesTest++;

                this.clearPage();

                    
            }else{
               alert("กรุณาเลือกให้ครบทุกข้อ");
            }    
        }
    }
}
</script>

<style scoped>
    #btnSubmit {
        color: white;
        background-color: orange;
        border: 2px solid white;
        border-radius: 10px;
        padding: 10px;
    }

    #btnSubmit:hover {
        color: orange;
        background-color: white;
        border: 2px solid orange;
    }

    label {
        display: block;
        
    }
    li {
        text-align: left;
        margin: 5%;
    }
    label {
        margin: 8px;
    }
    #test_3 {
        width: 50%;
    }
</style>