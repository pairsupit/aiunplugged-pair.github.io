<template>
  <div id="app">

    <ul id="navbar">
      <li><router-link to="/">หน้าหลัก</router-link></li>
      <li><router-link to="/test">ตัวชี้วัดหลังการใช้</router-link></li>
      <li><router-link to="/analytics">การวิเคราะห์</router-link></li>
      <li><router-link to="/inquirement">แบบสอบถามผู้ใช้</router-link></li>
    </ul>

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

  }

};
</script>

<style scope>

ol, li {
  font-family: 'Bai Jamjuree', sans-serif;
  font-weight: 300;
}

#navbar {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

#navbar li {
  display: block;
  float: right;
  border: 2px solid orange;
  border-radius: 10px;
  padding: 8px;
  margin: 10px;
  
}
#navbar li a {
  text-decoration: none;
  
}
#navbar li a:hover {
  color: orange;
}

</style>
