<template>
    <div id="home">
      <h1>Home</h1>
      <Header/>

      <img src="./assets/logo.png">

      <HelloWorld/>
      <br>

      <Greeting/>
    </div>
</template>

<script>
/* eslint-disable */
/* import 'bootstrap' */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import HelloWorld from "./components/HelloWorld.vue";
import Greeting from "./components/Greeting.vue";
import Header from "./components/Header.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Greeting,
    Header
  }
};
</script>

<style>
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 25px;
  margin-right: 25px;
}

#home {
  padding: 5px;
}

#input {
  width: 120px;
}

body {
  background-color: antiquewhite;
}
</style>
