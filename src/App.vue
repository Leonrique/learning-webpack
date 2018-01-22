<template>
  <div id="app">
    <Header/>

    <img src="./assets/logo.png">

    <HelloWorld/>
    <br>

    <Greeting/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Greeting from './components/Greeting'
import Header from './components/Header'
/* import 'bootstrap' */
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'App',
  components: {
    HelloWorld, Greeting, Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 55px;
}

body{
  /* background-color: rgb(167, 156, 156) */
}

</style>
