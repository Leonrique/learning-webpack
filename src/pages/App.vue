<template>
  <div id="app">
    <Header/>

    <img src="src/assets/logo.png">

    <HelloWorld/>
    <br>

    <Greeting/>
  </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from '../components/HelloWorld'
import Greeting from '../components/Greeting'
import Header from '../components/Header'

export default {
   name: 'App',
   components: {
      HelloWorld,
      Greeting,
      Header
   }
}
</script>

<style scoped>
#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
