<template>
    <div>
      <router-link to="/">
        <button class="btn">Home</button>
      </router-link>
      <router-link to="/acao">
        <button class="btn">Another page</button>
      </router-link>
      <button class="btn" v-on:click="goToPageAcao">Another button</button>
      <router-view></router-view>
    </div>
</template>
<script>
/* eslint-disable */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default {
  name: "Main",
  components: {},
  methods: {
    goToPageAcao: function(){
        this.$router.push({ name: "Home" })
    }
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 25px;
  margin-right: 25px;
}

#app {
  padding: 5px;
}

#input {
  width: 120px;
}

body {
  background-color: antiquewhite;
} */
</style>
