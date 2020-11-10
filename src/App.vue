<template>
  <div id="app">
    <div class="topnav" id="myTopnav">
      <a><router-link to="/">หน้าหลัก</router-link></a>
      <a><router-link to="/test">แบบทดสอบ</router-link></a>
      <a><router-link to="/analytics">การวิเคราะห์</router-link></a>
      <a><router-link to="/inquirement">แบบสอบถามผู้ใช้</router-link></a>
      <a href="javascript:void(0);" style="font-size:30px;" class="icon" @click="myFunction">&#9776;</a>
    </div>

    <router-view></router-view>

  </div>
  
</template>
<script>
import Vue from "vue";
import AppVue from './App.vue';
import axios from 'axios';
import { uuid } from 'vue-uuid';


export default {
  name: "app",
  data(){
    return {
    
    }
  },
  mounted: function(){
    if(localStorage.uuid == undefined){
      localStorage.uuid = uuid.v1();
    }

  },
  methods:{
    myFunction() {
      var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    }
  }

};
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap');
.topnav {
  font-family: 'Bai Jamjuree', sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
  margin-bottom: 20px;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 10px 10px;
  text-decoration: none;
  font-size: 17px;
}

.active {
  background-color: #4CAF50;
  color: white;
}

.topnav .icon {
  display: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 17px;    
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.topnav a:hover, .dropdown:hover .dropbtn {
  background-color: #555;
  color: white;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 800px) {
  .topnav a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 800px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {float: none;}
  .topnav.responsive .dropdown-content {position: relative;}
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>
