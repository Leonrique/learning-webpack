/* eslint-disable */
<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" @click="goToPage('Home')">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" v-on:click="goToPage('OtherStuff')">Firebase<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" v-on:click="goToPage('Sorter')">Sorter<span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
/* eslint-disable */
export default {
   name: 'Header',
   data() {
      return {
         msg: 'Welcome to Your Vue.js App'
      }
   },
   methods: {
      goToPage: function(page) {
         this.$router.push({ name: page })
      }
   }
}
</script>

<style scoped>
#greeting {
   color: bisque;
}
</style>
