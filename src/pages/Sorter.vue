<template>
  <div>
    <Header/>
    <div class="container">
      <label for="inputFile">Itens</label>
      <!-- <input type="text" class="form-control"> -->
      <textarea name="" id="" cols="30" rows="5" class="form-control" v-model="itensParaSortear"></textarea>
      <input type="radio" name="tipoSeparacao" id="porVirgula" v-model="virgula">
      <label for="porVirgula">Separar por vírgula</label>
      <input type="radio" name="tipoSeparacao" id="porPontoVirgula" v-model="pontoVirgula">
      <label for="porPontoVirgula">Separar por ponto e vírgula</label>
      <br>
      <div style="text-align: center">
         <button @click="sortear" class="btn">Sortear</button>
      </div>
      <p style="font-size: 50px; text-align: center">{{ itemSorteado }}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Header from '../components/Header.vue'
export default {
   name: 'Sorter',
   components: { Header },
   data: function() {
      return {
         itemSorteado: '',
         itensParaSortear: '',
         tipoSeparador: '',
         virgula: false,
         pontoVirgula: false
      }
   },
   watch: {
      virgula: function() {
         this.tipoSeparador = ','
      },
      pontoVirgula: function() {
         this.tipoSeparador = ';'
      }
   },
   methods: {
      sortear: function() {
         if (this.tipoSeparador == '') {
            alert('Selecione um tipo de separador de itens.')
            return
         }

         if (this.itensParaSortear == '') {
            alert('Insira itens para fazer o sorteio.')
            return
         }

         var vm = this

         var itens = this.itensParaSortear.split(this.tipoSeparador)
         var qtde = itens.length
         var max = 0
         var min = 0
         max = qtde - 1
         var tempo = new Date().getTime() / 1000

         setInterval(function() {
            if (new Date().getTime() / 1000 - tempo <= 3)
               vm.itemSorteado =
                  itens[Math.round(Math.random() * (max - min) + min)]
         }, 100)
      }
   }
}
</script>

<style scoped>
.container {
   width: 100%;
}

input,
label,
button,
textarea {
   margin: 4px;
}
</style>
