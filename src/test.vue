<template>

  <div id="test">
    <h1><b>ตัวชี้วัดหลังการเล่น</b></h1>

    <!-- <form> -->
    <form @submit="submitTest">
        <div class="form">
            <ol>
            <h2>วัดผลส่วนกติกา</h2>
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
                <br>
                <img src="../src/assets/test_4.png" id="test_4">

                <label for="4.1">
                    <input type="radio" name="4_ans" id="4.1" value="true">
                        <span id="4.1_ans">กระดานการเรียนรู้ แสดงทิศทางการเดินของผู้เล่น</span></label>
                
                <label for="4.2">
                    <input type="radio" name="4_ans" id="4.2" value="false">
                        <span id="4.2_ans">กฎของคอมพิวเตอร์ แสดงการเคลื่อนที่ที่เป็นได้ทั้งหมดของ the sweet computer 
                            เมื่อหน้าตาของกระดานคล้ายกลับกระดานใดกระดานหนึ่งดังภาพ</span></label>

                <label for="4.3">
                    <input type="radio" name="4_ans" id="4.3" value="false">
                        <span id="4.3_ans">ในแต่ละจุดแสดงการสุ่มการเคลื่อนที่ของ the sweet computer</span></label>

                <label for="4.4">
                    <input type="radio" name="4_ans" id="4.4" value="false">
                        <span id="4.4_ans">สีของลูกศรแต่ละภาพแสดงการเคลื่อนที่ที่เป็นไปได้ของ the sweet computer</span></label>

            </li>
            
            <li>ทุกข้อต่อไปนี้อธิบายถึงรูปข้างใต้ <u>ยกเว้น</u>ข้อใด
                <br>
                <img src="../src/assets/test_5,9.png" id="test_5">

                <label for="5.1">
                    <input type="radio" name="5_ans" id="5.1" value="false">
                        <span id="5.1_ans">ผู้เล่นมีการเดินเพียง 1 ครั้ง</span></label>
                
                <label for="5.2">
                    <input type="radio" name="5_ans" id="5.2" value="false">
                        <span id="5.2_ans">การเคลื่อนที่ต่อไปที่เป็นไปได้ของคอมพิวเตอร์ มีสี่แบบ</span></label>

                <label for="5.3">
                    <input type="radio" name="5_ans" id="5.3" value="false">
                        <span id="5.3_ans">จุดสี่ลูกแสดงถึงทิศการเดินของคอมพิวเตอร์</span></label>

                <label for="5.4">
                    <input type="radio" name="5_ans" id="5.4" value="true">
                        <span id="5.4_ans">จุดสี่ลูกแสดงถึงทิศการเดินของผู้เล่น</span></label>

            </li>

            <h2>วัดผลการเรียนรู้</h2>
            <li>เหตุผลในข้อใด ไม่นำไปสู่การเรียนรู้ของ the sweet computer

                <label for="6.1">
                    <input type="radio" name="6_ans" id="6.1" value="false">
                        <span id="6.1_ans">การแพ้ของ the sweet computer</span></label>
                
                <label for="6.2">
                    <input type="radio" name="6_ans" id="6.2" value="false">
                        <span id="6.2_ans">การสุ่มการเดินแต่ละรอบไปเรื่อยๆ ของ the sweet computer</span></label>

                <label for="6.3">
                    <input type="radio" name="6_ans" id="6.3" value="false">
                        <span id="6.3_ans">การไม่เดินไปทิศทางเดิมเมื่อมีผลแพ้</span></label>

                <label for="6.4">
                    <input type="radio" name="6_ans" id="6.4" value="true">
                        <span id="6.4_ans">การให้รางวัลเมื่อ the sweet computer ชนะ</span></label>

            </li>

            <li>ข้อใดต่อไปนี้<u>ผิด</u>

                <label for="7.1">
                    <input type="radio" name="7_ans" id="7.1" value="false">
                        <span id="7.1_ans">ในครั้งแรก The sweet computer มีการเดินแบบสุ่ม</span></label>
                
                <label for="7.2">
                    <input type="radio" name="7_ans" id="7.2" value="false">
                        <span id="7.2_ans">ในครั้งแรกที่เริ่มเล่นมีจำนวนจุดที่ทำการสุ่มเท่ากับการจำนวนการเคลื่อนที่ของ the sweet computer ที่เป็นไปได้</span></label>

                <label for="7.3">
                    <input type="radio" name="7_ans" id="7.3" value="false">
                        <span id="7.3_ans">การแพ้ทำให้ the sweet computer เรียนรู้โดยการเลิกการเคลื่อนที่ตำแหน่งเดิมที่ทำให้แพ้</span></label>

                <label for="7.4">
                    <input type="radio" name="7_ans" id="7.4" value="true">
                        <span id="7.4_ans">การเรียนรู้ของ the sweet learning computer เกิดจากการให้ลูกอมเป็นรางวัลเมื่อชนะ</span></label>

            </li>

            <li>คุณคิดว่า ถ้าหากคุณมีการเล่นในแบบเดิมซ้ำๆ คอมพิวเตอร์จะมีโอกาสชนะมากขึ้นหรือไม่ เพราะเหตุใด

                <label for="8.1">
                    <input type="radio" name="8_ans" id="8.1" value="true">
                        <span id="8.1_ans">คอมพิวเตอร์มีโอกาสชนะมากขึ้น เพราะ คอมพิวเตอร์ลบการเคลื่อนที่ที่ทำให้แพ้เรื่อยๆ</span></label>
                
                <label for="8.2">
                    <input type="radio" name="8_ans" id="8.2" value="false">
                        <span id="8.2_ans">คอมพิวเตอร์มีโอกาสชนะมากขึ้น เพราะ คอมพิวเตอร์จดจำการเคลื่อนที่ๆทำให้ชนะและเดินแบบเดิมซ้ำๆ</span></label>

                <label for="8.3">
                    <input type="radio" name="8_ans" id="8.3" value="false">
                        <span id="8.3_ans">คอมพิวเตอร์มีโอกาสชนะมากขึ้น เพราะ คอมพิวเตอร์จะให้รางวัลเมื่อมีการเคลื่อนที่ชนะ</span></label>

                <label for="8.4">
                    <input type="radio" name="8_ans" id="8.4" value="false">
                        <span id="8.4_ans">คอมพิวเตอร์ไม่มีโอกาสชนะมากขึ้น เพราะ คอมพิวเตอร์จะสุ่มการเคลื่อนที่ใหม่ทุกๆครั้ง </span></label>

            </li>

            <li>ข้อใดต่อไปนี้กล่าว<b>ผิด</b> เกี่ยวกับจุดในภาพข้างใต้ เมื่อแต่ละสีของจุดหมายถึงสีลูกศรการเคลื่อนที่ที่เป็นไปได้ของ the sweet computer
                <br>
                <img src="../src/assets/test_5,9.png" id="test_9">

                <label for="9.1">
                    <input type="radio" name="9_ans" id="9.1" value="false">
                        <span id="9.1_ans">เมื่อผู้เล่นมีการเคลื่อนที่ จะมีการสุ่มจุดในด้านขวามือของภาพ</span></label>
                
                <label for="9.2">
                    <input type="radio" name="9_ans" id="9.2" value="false">
                        <span id="9.2_ans">ถ้า the sweet computer มีการเคลื่อนที่สุดท้ายที่ทำให้แพ้ จะตัดจุดนั้นออกไป</span></label>

                <label for="9.3">
                    <input type="radio" name="9_ans" id="9.3" value="false">
                        <span id="9.3_ans">จากรูปถ้าหากการเดินตามลูกศรสีเหลือง แล้วการเดินในครั้งต่อไปทุกกรณีทำให้ the sweet computer แพ้ จุดสีเหลืองจะถูกตัดออก</span></label>

                <label for="9.4">
                    <input type="radio" name="9_ans" id="9.4" value="true">
                        <span id="9.4_ans">เมื่อ the sweet computer มีการเคลื่อนแล้วทำให้ชนะจะมีการเดินทางเดิมซ้ำๆ</span></label>

            </li>

            <li>ทุกข้อในตารางต่อไปนี้ เป็นกระดานการเคลื่อนที่ในครั้งต่อไปของคอมพิวเตอร์ ดังรูปข้างใต้ <b>ยกเว้น</b>ข้อใด
                <br>
                <img src="../src/assets/test_10.png" id="test_10">
                <table>
                    <tr>
                        <td>ข้อ</td>
                        <td>การเคลื่อนที่ในครั้งต่อไปของคอมพิวเตอร์</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td><img src="../src/assets/10.1.png" class="test_10"></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><img src="../src/assets/10.2.png" class="test_10"></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td><img src="../src/assets/10.3.png" class="test_10"></td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td><img src="../src/assets/10.4.png" class="test_10"></td>
                    </tr>
                </table>

                <label for="10.1">
                    <input type="radio" name="10_ans" id="10.1" value="false">
                        <span id="10.1_ans">A และ B</span></label>
                
                <label for="10.2">
                    <input type="radio" name="10_ans" id="10.2" value="false">
                        <span id="10.2_ans">A และ C</span></label>

                <label for="10.3">
                    <input type="radio" name="10_ans" id="10.3" value="false">
                        <span id="10.3_ans">B และ C </span></label>

                <label for="10.4">
                    <input type="radio" name="10_ans" id="10.4" value="true">
                        <span id="10.4_ans">A, B และ C</span></label>

            </li>
        </ol>
        </div>
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
            for( var i = 1 ; i <= 10 ; i++ ){
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

            if( countToCheck == 10){
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
                    this.score++; this.score_1++;
                    localStorage.sumLawScore++;
                };
                if(document.getElementById("5.4").checked == true){
                    this.score++; this.score_1++;
                    localStorage.sumLawScore++;
                };
                if(document.getElementById("6.4").checked == true){
                    this.score++; this.score_2++;
                    localStorage.sumLearningScore++;
                };
                if(document.getElementById("7.4").checked == true){
                    this.score++; this.score_2++;
                    localStorage.sumLearningScore++;
                };
                if(document.getElementById("8.1").checked == true){
                    this.score++; this.score_2++;
                    localStorage.sumLearningScore++;
                };
                if(document.getElementById("9.4").checked == true){
                    this.score++; this.score_2++;
                    localStorage.sumLearningScore++;
                };
                if(document.getElementById("10.4").checked == true){
                    this.score++; this.score_2++;
                    localStorage.sumLearningScore++;
                };
               
                alert("คะแนนรวมทั้งหมด : " + this.score
                        +",\nคะแนนส่วนกติกาการเล่น :" + this.score_1 
                        +",\nคะแนนส่วนกติกาการเล่น :"+ this.score_2);

                
                var answerArray = [];
                for( var i = 1 ; i <= 10 ; i++ ){
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
                
                let res = axios.post('https://script.google.com/macros/s/AKfycbyuiweQMXK0_EdZsBcak4gvrm8v1KNNnD9sWj6GiBd4CJObHnA/exec',
                        {   uuid: localStorage.uuid,
                            action: "insertTestScore",
                            lawScore: this.score_1,
                            answer1: answerArray[0],
                            answer2: answerArray[1],
                            answer3: answerArray[2],
                            answer4: answerArray[3],
                            answer5: answerArray[4],
                            answer6: answerArray[5],
                            answer7: answerArray[6],
                            answer8: answerArray[7],
                            answer9: answerArray[8],
                            answer10: answerArray[9],
                            learningScore: this.score_2,
                            timeStop: timeRun,
                            timeStamp: DateTime
                        },{
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).then(function(res){
                            // console.log("uuid :"+res.data.uuid);
                            // console.log("action :"+res.data.action);
                            // console.log("law_score :"+res.data.lawScore);
                            // console.log("learning_score :"+res.data.learningScore);
                            // console.log("timeStop :"+res.data.timeStop);
                            // console.log("answer array :"+answerArray);
                            // console.log("timeStamp :"+DateTime);
                        }).catch(err => {
                            console.log(err.response);
                        });

                localStorage.timesTest++;

                this.clearPage();

                alert("แบบทดสอบของคุณถูกบันทึกแล้ว");

                    
            }else{
               alert("กรุณาเลือกให้ครบทุกข้อ");
            }    
        }
    }
}
</script>

<style scoped>
    
    h1, ol, li {
        font-family: 'Bai Jamjuree', sans-serif;
        font-weight: 300;
    }

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
        margin: 3%;
    }
    label {
        margin: 8px;
    }
    #test_2, #test_10 {
        width: 30%;
        padding: 20px;
    }
    .test_10 {
        width: 60%;
    }
    #test_4 {
        width: 40%;
        padding: 20px;
    }
    table, th, td {
        border: 1px solid lightgray;
        border-collapse: collapse;
    }
    th, td {
        padding: 10px;
        text-align: center;
    }
    .form {
        padding-left: 20%;
    }
    h2 {
        text-align: left;
    }
</style>