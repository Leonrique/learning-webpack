<template>
    <div>
      <h1 id="greeting">Just working fine - Header component single file</h1>
      <input type="text" class="form-control">
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#greeting {
  color: bisque
}
</style>
