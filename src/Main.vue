<template>
    <div>
      <router-view></router-view>
      <ul>
        <li v-for="material in materiais" :key="material.numeroItem">
            <span>Número do material: {{ material.numeroItem }}</span>
            <span>Tipo de item: {{ material.nome }}</span>
            <span>Valor de compra: {{ material.valor }}</span>
        </li>
      </ul>
    </div>
</template>
<script>
/* eslint-disable */
import Modal from './components/Modal.vue'

export default {
   name: 'Main',
   data: function() {
      return {
         showModal: false
      }
   },
   components: { Modal },
   methods: {
      goToPageAcao: function() {
         this.$router.push({ name: 'Home' })
      }
   },
   computed: {
      materiais: function() {
         return this.$store.getters.materiais
      }
   }
}
</script>

<style>
body {
   background-color: antiquewhite;
}
</style>
