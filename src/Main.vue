<template>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/acao">Acao</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
/* eslint-disable */
/* import 'bootstrap' */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default {
  name: "Main",
  components: {}
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
