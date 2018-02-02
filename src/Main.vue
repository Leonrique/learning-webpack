<template>
    <div>
      <router-link to="/">
        <button class="btn">Home</button>
      </router-link>
      <router-link to="/acao">
        <button class="btn">Another page</button>
      </router-link>
      <button class="btn" v-on:click="goToPageAcao">Another button</button>
      <button class="btn" v-on:click="showModal = true">A modal button</button>
      <router-view></router-view>
      <!-- use the modal component, pass in the prop -->
      <modal v-if="showModal" @fecha="showModal = false">
        <Modal/>
      </modal>
    </div>
</template>
<script>
/* eslint-disable */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Modal from "./components/Modal.vue"

export default {
  name: "Main",
  data: function(){
    return {
      showModal: false
    }
  },
  components: {Modal},
  methods: {
    goToPageAcao: function(){
        this.$router.push({ name: "Home" })
    }
  }
};
</script>

<style>
body {
  background-color: antiquewhite;
}
</style>
