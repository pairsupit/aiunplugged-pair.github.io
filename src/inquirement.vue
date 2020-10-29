<template>

  <div id="inquirement">
    <h1><b>แบบสอบถามผู้ใช้</b></h1>

    <form @submit="submitTest">
        <div class="form">
        <ol>
            <li>ระดับชั้นปีการศึกษาของคุณ
                <label for="1.1">
                    <input type="radio" name="1_ans" id="1.1" value="นักศึกษาชั้นปีที่ 1">
                    <span id="1.1_ans">นักศึกษาชั้นปีที่ 1</span>
                </label>
                <label for="1.2">
                    <input type="radio" name="1_ans" id="1.2" value="นักศึกษาชั้นปีที่ 2">
                    <span id="1.2_ans">นักศึกษาชั้นปีที่ 2</span>
                </label>
                <label for="1.3">
                    <input type="radio" name="1_ans" id="1.3" value="นักศึกษาชั้นปีที่ 3">
                    <span id="1.3_ans">นักศึกษาชั้นปีที่ 3</span>
                </label>
                <label for="1.4">
                    <input type="radio" name="1_ans" id="1.4" value="นักศึกษาชั้นปีที่ 4">
                    <span id="1.4_ans">นักศึกษาชั้นปีที่ 4</span>
                </label>
                <label for="1.5">
                    <input type="radio" name="1_ans" id="1.5" value="อื่นๆ">
                    <span id="1.5_ans">อื่นๆ</span>
                </label>
            </li>
            <li>
                <label for="2.1">
                    คณะ
                    <input id="2.1" placeholder="คณะ" value="" required>
                    สาขาวิชา
                    <input id="2.2" placeholder="สาขาวิชา" value="" required>
                </label>
            </li>
            <li>คุณมีความรู้เกี่ยวกับ machine learning ในระดับไหน ?
                <label for="3.1">
                    <input type="radio" name="3_ans" id="3.1" value="เชี่ยวชาญ">
                    <span id="3.1_ans">เชี่ยวชาญ</span>
                </label>
                <label for="3.2">
                    <input type="radio" name="3_ans" id="3.2" value="มีความรู้ปานกลาง ผ่านชั้นเรียน หรืออบรม">
                    <span id="3.2_ans">มีความรู้ปานกลาง ผ่านชั้นเรียน หรืออบรม</span>
                </label>
                <label for="3.3">
                    <input type="radio" name="3_ans" id="3.3" value="เคยได้ยินมาบ้าง แต่ไม่แน่ใจว่าถูกต้องหรือไม่">
                    <span id="3.3_ans">เคยได้ยินมาบ้าง แต่ไม่แน่ใจว่าถูกต้องหรือไม่</span>
                </label>
                <label for="3.4">
                    <input type="radio" name="3_ans" id="3.4" value="ไม่มีความรู้เรื่อง machine learning เลย">
                    <span id="3.4_ans">ไม่มีความรู้เรื่อง Machine learning และ AI เลย</span>
                </label>
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
    name: "inquirement",
    data(){
        return {

        }
    },
    mounted(){
    },
    methods: {
        clearPage: function(){
            var inputCheck = document.getElementsByTagName("input");
            // console.log(inputCheck);
            for( var i = 0 ; i < inputCheck.length ; i++ ){
                inputCheck[i].checked = false;
            }
            document.getElementById("2.1").value = "";
            document.getElementById("2.2").value = "";
        },
        submitTest: function(e){
            e.preventDefault();
            var countToCheck = 0;
            var inputCheck = document.getElementsByTagName("input");
            var arrarAnswer = [];

            for(var i=0 ; i< document.getElementsByName("1_ans").length ;  i++){
                if(document.getElementsByName("1_ans")[i].checked == true){
                    // console.log(document.getElementsByName("1_ans")[i].value);
                    arrarAnswer.push(document.getElementsByName("1_ans")[i].value);
                    countToCheck++;
                }
            }
            var faculty = document.getElementById("2.1");
            var department = document.getElementById("2.2");
            if(faculty.value != "" && department.value != ""){
                // console.log(faculty.value + "/ " + department.value);
                arrarAnswer.push(faculty.value + "/ " + department.value);
                countToCheck++;
            }
            for(var i=0 ; i< document.getElementsByName("3_ans").length ;  i++){
                if(document.getElementsByName("3_ans")[i].checked == true){
                    // console.log(document.getElementsByName("3_ans")[i].value);
                    arrarAnswer.push(document.getElementsByName("3_ans")[i].value);
                    countToCheck++;
                }
                
            }

            if( countToCheck == 3 ){

                /* This is timeStamp */
                var date = new Date();  
                var dateFormat = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

                var minute = (date.getMinutes() < 10) ? "0"+date.getMinutes() : date.getMinutes() ;
                var second = (date.getSeconds() < 10) ? "0"+date.getSeconds() : date.getSeconds() ;
                var time = date.getHours() +":"+ minute +":"+ second;
                var DateTime = dateFormat+", "+time;
                /* This is timeStamp */
                
                let res = axios.post('https://script.google.com/macros/s/AKfycbyuiweQMXK0_EdZsBcak4gvrm8v1KNNnD9sWj6GiBd4CJObHnA/exec',
                        {   action: "insertInquirement",
                            uuid: localStorage.uuid,
                            timeStamp: DateTime,
                            age: arrarAnswer[0],
                            ocupation: arrarAnswer[1],
                            experience: arrarAnswer[2],
                        },{
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).then(function(res){

                        }).catch(err => {
                            console.log(err.response);
                        });

                localStorage.timesTest++;

                this.clearPage();

                alert("แบบสอบถามของคุณถูกบันทึกแล้ว");
                    
            }else{
               alert("กรุณาเลือกแบบสอบถามให้ครบทุกข้อ");
            }    
        }
    }
}
</script>

<style scoped>
    input {
        font-size: 18px;
    }
    input {
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
        margin: 5%;
    }
    label {
        margin: 8px;
    }
    #test_3 {
        width: 50%;
    }
    .form {
        padding-left: 25%;
    }
</style>