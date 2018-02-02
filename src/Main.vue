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
body {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
