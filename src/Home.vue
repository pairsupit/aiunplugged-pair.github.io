<template>
  <div id="home">
    <h1><b>The Sweet Learning Computer - aiunplugged</b></h1>

      <div id="main-view">
        <div id="main-game">
          <h4 class="left-text"></h4>
          <DraggableChess
            :state="this.state"
            @new-state="handleNewState"
            :halloween="this.halloween"
          />
          <h4 class="left-text">คะแนน</h4>
          <div class="points">
            <div>
              <div class="points-svg-container">
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <image width="50" height="50" xlink:href="./assets/human.svg" />
                </svg>
              </div>
              <div v-if="displayWin==1" style="float: right; color: green;">+1</div>
              <div style="width: 50px; margin: 0 auto;">{{winsPlayer}}</div>
            </div>
            <div>
              <div class="points-svg-container">
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <image width="50" height="50" xlink:href="./assets/computer.svg" />
                </svg>
              </div>
              <div v-if="displayWin==2" style="float: right; color: red;">+1</div>
              <div style="width: 50px; margin: 0 auto;">{{winsPC}}</div>
            </div>
          </div>
        </div>
        <!-- Da meistens 16:9 Monitore verwendet werden, sollte das vermutlich rechts vom Spielfeld angezeigt werden -->
        <div id="main-rules">
          <div class="row">
            <h4 class="left-text"><b>กฎของคอมพิวเตอร์</b></h4>
            <!-- Rounded switch -->
            <div class="limit-options-btn">
              <div id="for-font"><b>การเคลื่อนไหวที่เป็นไปได้เท่านั้น</b></div>
              <label class="switch">
                <input type="checkbox" v-on:click="clickSwitch" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="rulesets">
            <div
              v-for="(model, index) in computerModel.getModel()"
              :key="index"
              class="ruleset"
              v-bind:class="{outlinerule: compareStates(model.state, state)}"
            >
              <PossibleActions
                v-if="!filter || checkIfStateIsContained(filteredStates, model.state) "
                v-bind:state="model.state"
                v-bind:actions="model.actions"
                v-bind:sweets="model.sweets"
                v-bind:forceUpdate="forceUpdate"
                v-bind:currentState="compareStates(model.state, state)"
                v-bind:chosenPlayType="chosenPlayType"
                v-bind:halloween="halloween"
              />
            </div>
          </div>
        </div>
      </div>
      <Tour :halloween="this.halloween" />
    
  </div>
</template>

<script>
const resetToState = [1, 1, 1, 0, 0, 0, 2, 2, 2];
import DraggableChess from "./components/DraggableChess.vue";
import PossibleActions from "./components/PossibleActions.vue";
import Tour from "./components/Tour.vue";
import {
  performMove,
  checkIfPlayerWins,
  compareStates,
  checkIfStateIsContained,
  calculatePossibleMoves
} from "./utils/moves.js";
import LearningModel from "./utils/model.js";
import axios from 'axios';
import AppVue from './App.vue';

export default {
  name: "home",
  components: {
    DraggableChess,
    PossibleActions,
    Tour
  },
  data: function() {
    return {
      state: [...resetToState],
      player: 1,
      computer: 2,
      active: 1,
      winsPlayer: 0,
      winsPC: 0,
      computerModel: new LearningModel([...resetToState]),
      forceUpdate: 1,
      timeForPC: 3000,
      displayWin: 0,
      chosenPlayType: -1,
      halloween: false,
      filteredStates: [],
      filter: false,
      playRound: 0,
      playTime: 0,
      timeRun: Date,
      result: String, // d คือ เวลาที่เริ่มนับ
      TimeInstant: Date,
      Arrayseconds:[]
    };
  },
  methods: {
    compareStates,
    checkIfStateIsContained,
    clickSwitch: function(evt) {
      this.filter = !this.filter;
    },
    checkWinner: function(newState, who) {
      if (checkIfPlayerWins(newState, who)) {
        const self = this;

        if (who === this.player) {
          this.result = 'win';
          
          this.displayWin = 1;
          setTimeout(function() {
            self.displayWin = 0;
            self.winsPlayer++;
            localStorage.winsPlayer++;
            
          }, this.timeForPC / 2); 
        } else {
          this.result = 'lose';
          
          this.displayWin = 2;
          setTimeout(function() {
            self.displayWin = 0;
            self.winsPC++;
            localStorage.winsPC++;

          }, this.timeForPC / 2);
        }
        /* บันทึก result ลง local storage */
        var newArray = [];
        newArray.push(this.result);
        var oldArray = localStorage.getItem('arrayResultOfPlay');
        var arrayResult = [];
        arrayResult.push(oldArray);
        arrayResult.push(newArray);
        localStorage.setItem('arrayResultOfPlay', arrayResult)
        /* บันทึก result ลง local storage */
        
        //ส่งการหยุดนับเวลาไป
        var seconds = ((timeRun - self.TimeInstant)/1000).toFixed(0);
        // console.log("เวลาที่ใช้ตั้งแต่เปิดเพจถึงชนะ(seconds) :"+ seconds);
        //ส่งการหยุดนับเวลาไป

        /* เพิ่มการบันทึกเวลาใน localStorage */
        var newArray = [];
        newArray.push(seconds);
        var oldArray = localStorage.getItem('ArraySecondsOfPlay');
        var Arrayseconds = [];
        Arrayseconds.push(oldArray);
        Arrayseconds.push(newArray);
        localStorage.setItem('ArraySecondsOfPlay', Arrayseconds);
        /* เพิ่มการบันทึกเวลาใน localStorage */

        self.playRound++;
        localStorage.times++;
        // console.log("จำนวนรอบการเล่น(playRound) :"+ self.playRound);

        /* This is timeStamp */
        var date = new Date();  
        var dateFormat = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        var minute = (date.getMinutes() < 10) ? "0"+date.getMinutes() : date.getMinutes() ;
        var second = (date.getSeconds() < 10) ? "0"+date.getSeconds() : date.getSeconds() ;
        var time = date.getHours() +":"+ minute +":"+ second;
        var DateTime = dateFormat+", "+time;
        /* This is timeStamp */


        let res = axios.post('https://script.google.com/macros/s/AKfycbyuiweQMXK0_EdZsBcak4gvrm8v1KNNnD9sWj6GiBd4CJObHnA/exec',
                { uuid: localStorage.uuid,
                  action: "insertPlayScore",
                  playRound: self.playRound,
                  seconds: seconds,                //เปลี่ยนการนับเป็นต่อหนึ่งรอบ แก้เพิ่มที่ line 176
                  times: localStorage.times ,           //ครั้งที่เล่นเกม
                  result: self.result,
                  timeStamp: DateTime
                },{
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                }).then(function(res){
                  // console.log("Insert Play round succesfully!");
                  // console.log(res.data);
                  
                }).catch(err => {
                  console.log(err.response);
                });

        self.TimeInstant = new Date();

        return true;
      }
      return false;
    },
    updateSelection: function() {
      let relevantStates = [];
      const moves = calculatePossibleMoves(this.state, this.player);
      for (let index in moves) {
        relevantStates.push(performMove([...this.state], moves[index]));
      }
      this.filteredStates = relevantStates;
    },
    handleNewState: function(newState) {    

      this.$forceUpdate();

      if (this.checkWinner(newState, this.player)) {
        this.computerModel.humanWon();
        this.forceUpdate++;
        const self = this;
        setTimeout(function() {
            self.state = [...resetToState];
            self.updateSelection();
        }, this.timeForPC / 2);
        
        // clearInterval(watchStop);
        // console.log("มนุษย์ชนะ");
 
      } else {
        
        this.state = newState;
        this.active = this.active == this.player ? this.computer : this.player;
        if (this.active === this.computer) { 

          const [move, sweetChosen] = this.computerModel.choosePlayType(
            this.state
          );
          
          if (move === undefined) {
            
            // clearInterval(watchStop);
            // console.log("มนุษย์ชนะ");

            this.computerModel.humanWon();
            this.forceUpdate++;
            this.winsPlayer++;
            const self = this;

            setTimeout(function() {
              self.state = [...resetToState];
              self.updateSelection();
            }, self.timeForPC * 1.5);
          } else {
            this.chosenPlayType = sweetChosen;
            const stateAfterPCMove = performMove(this.state, move);
            const self = this;
              
              setTimeout(function() {
              self.chosenPlayType = -1;
              self.state = stateAfterPCMove;
              self.updateSelection();
              if (self.checkWinner(stateAfterPCMove, self.computer)) {

                // clearInterval(watchStop);
                // console.log("คอมพิวเตอร์ชนะ");

                self.computerModel.computerWon();
                self.forceUpdate++;

                setTimeout(function() {
                  self.state = [...resetToState];
                  self.updateSelection();
                }, self.timeForPC * 1.5);
              }else{
                // clearInterval(watchStop);
              }
            }, this.timeForPC);
            
          }

        } else {
          // clearInterval(watchStop);          
          // allow human to interact with the figures
        }
        this.active = this.active == this.player ? this.computer : this.player;
        
      }
    },
    defineLocalStorageVariable: function(){
      /* สร้างตัวแปรที่เก็บถาวร ใน LocalStorage */
      if(localStorage.times == undefined){
        localStorage.times = 0;
      }
      if(localStorage.winsPlayer == undefined){
        localStorage.winsPlayer = 0;
      }
      if(localStorage.winsPC == undefined){
        localStorage.winsPC = 0;
      }
      if(localStorage.timesTest == undefined){
        localStorage.timesTest = 0;
      }
      if(localStorage.ArraySecondsOfTest == undefined){
        localStorage.ArraySecondsOfTest = [];
      }
      if(localStorage.ArraySecondsOfPlay == undefined){
        localStorage.ArraySecondsOfPlay = [];
      }
      if(localStorage.arrayResultOfPlay == undefined){
        localStorage.arrayResultOfPlay = [];
      }
      if(localStorage.sumLawScore == undefined){
        localStorage.sumLawScore = 0;
      }
      if(localStorage.sumLearningScore == undefined){
        localStorage.sumLearningScore = 0;
      }
        /* สร้างตัวแปรที่เก็บถาวร ใน LocalStorage */
    }
  },
  mounted: function() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    if (params.get("time")) {
      this.timeForPC = params.get("time");
    }
    this.updateSelection();

    this.defineLocalStorageVariable();
    // console.log("start timing");
    this.TimeInstant = new Date();
    // console.log("TimeInstant :"+this.TimeInstant);
      
    var watchStop = setInterval(function(){
        this.timeRun = new Date();

          // this.timeRun = ((new Date() - d)/1000).toFixed(0);
          // console.log("this.timerun :"+ this.timeRun);
    }, 1000);

    this.winsPC = localStorage.winsPC;
    this.winsPlayer = localStorage.winsPlayer;
  
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap');
#for-font, h4, h1 {
  font-family: 'Bai Jamjuree', sans-serif;
  font-weight: 300;
}


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media (min-width: 800px) {
  #main-view {
    display: grid;
    justify-content: center;
    grid-template-columns: 40% 60%;
  }
  #main-game {
    margin-left: 10%;
    margin-right: 10%;
  }

  .rulesets {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 800px) {
  #main-game {
    display: inline-grid;
    justify-content: center;
  }
  .rulesets {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

/* .ruleset {
} */

.left-text {
  text-align: left;
}

.outlinerule {
  background-color: #ff450057;
}

.points {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 50px;
}

.points > div {
  width: 75%;
}

.points-svg-container {
  display: flex;
  align-items: center;
  height: 100%;
}

.points-svg-container > svg {
  margin: 0 auto;
  display: block;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.limit-options-btn {
  margin-top: 0.5em;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 1em;
}

h1 {
  margin: 0%;
}

</style>
