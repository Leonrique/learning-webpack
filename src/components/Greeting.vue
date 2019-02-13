
<template>
  <!-- eslint-disable -->
   <div id="treinamento">
        <h1 v-once>{{ title }}</h1>
        <p v-on:mousemove="updateCoordinates">Coordinates: {{ x }} / {{ y }}
          - <span v-on:mousemove.stop>ZONA MORTA</span>
        </p>
        <div class="row">
            <div class="col-md-3">
                <label for="input1">Numero1</label>
                <input id="input1" type="number" class="form-control" v-on:input="somaSimples" value=0>
            </div>
            <div class="col-md-3">
                <label for="input2">Numero2</label>
                <input id="input2" type="number" class="form-control" v-on:input="somaSimples" value=0>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <label for="input3">Resultado</label>
                <input id="input3" type="number" class="form-control" v-model="resultado" readonly="true">
            </div>
        </div>
        <p>Resultado: {{ resultado }}</p>
        <a v-bind:href="link">Google</a>
        <p>
            <label for="editorLink">Editar o link</label>
            <input id="editorLink" type="text" class="form-control" v-on:blur="changeLink">
        </p>
        <p id="divLink" v-html="finishedLink"></p>
        <button v-on:click="increase">Click me</button>
        <p>{{ counter }}</p>
        <p>{{ title }}</p>
        <label for="keyModifier">Exemplo de um key modifier</label>
        <input id="keyModifier" type="text" class="form-control" v-on:keyup.enter="alertMe">
        <br>
        
        <div id="container" class="container">
            <h1>Computed properties</h1>
            <button v-on:click="AddToA">Add to A</button>
            <button v-on:click="AddToB">Add to B</button>
            <p>Age + A = {{ a }}</p>
            <p>Age + B = {{ b }}</p>
            <p>Sum = {{ resultado2 }}</p>
              <button v-on:click="iniciaContagem">Inicia Contagem</button>
              <button v-on:click="pararContagem">Parar a Contagem</button>
              <p>{{ numero1 }}</p>
              <p>{{ numero2 }}</p>
              <p>{{ numero3 }}</p>
              <button v-on:click="numeroRandomico(0,10)">Gerar numero randomico</button>
              <p>{{ numeroRandom }}</p>

              <div>
                  <div id="divFormGroup" class="form-group row">
                    <div class="col-sm-12 col-offset-10">
                      <label id="lblIntervalo" for="inputIntervalo">Selecione um total de segundos para zerar o valor</label>
                      <input type="number" class="form-control" id="inputIntervalo" placeholder="Informe o intervalo" value=0>
                    </div>
                  </div>
                  
                  <p>Current Value: {{ value }}</p>
                  <button @click="adicionarValor(5)" class="btn">Adicionar quantidade de segundos definida.</button>
                  <p>{{ result }}</p>
              </div>
          
              <div>
                  <p>{{ value }}</p>
              </div>
        </div>
        <div class="barraDeProgresso" :style="{'background-Color': color, 'width': tamanho + 'px'}"></div>
        <button @click="atualizarBarra">Acao de barra de rolagem</button>
   </div>
</template>

<script>
/* eslint-disable*/
/* eslint-disable-next-line */
export default {
   name: 'Greeting',
   data() {
      return {
         color: 'red',
         tamanho: 10,
         title: "Just workin' fine",
         resultado: 0,
         resultado2: 0,
         link: 'http://www.google.com',
         finishedLink:
            '<a href="' +
            'http://www.google.com' +
            '">Google finished link</a>',
         counter: 0,
         x: 0,
         y: 0,
         a: 0,
         b: 0,
         age: 5,
         numero1: 0,
         numero2: 0,
         numero3: 0,
         numeroRandom: 0,
         contarNumero1: null,
         contarNumero2: null,
         contarNumero3: null,
         value: 0,
         interval: null
      }
   },
   computed: {
      result: function() {
         return this.value != 37 ? 'Not there yet' : 'It reached the target!!!'
      }
   },
   watch: {
      a: function() {
         var vm = this
         setInterval(function() {
            vm.resultado2 += vm.a
         }, 2000)
      },
      b: function() {
         var vm = this
         setInterval(function() {
            vm.resultado2 += vm.b
         }, 2000)
      },
      value: function() {
         var vm = this

         clearInterval(this.interval)

         this.interval = setTimeout(() => {
            vm.value = 0
         }, 5000)
      }
   },

   methods: {
      atualizarBarra: function() {
         var vm = this
         setInterval(function() {
            if (vm.tamanho <= 1500) {
               vm.tamanho += 10
            }
         }, 50)
      },
      adicionarValor: function() {
         let valor = document.getElementById('inputIntervalo').value

         if (valor == 0) {
            alert(
               'Não foi definido a quantidade de segundos para zerar o valor.'
            )
            document.getElementById('inputIntervalo').focus()
            return
         }

         this.value += parseFloat(valor)
      },
      numeroRandomico: function getRandomArbitrary(min, max) {
         this.numeroRandom = Math.round(Math.random() * (max - min) + min)
      },
      iniciaContagem: function() {
         var vm = this
         this.contarNumero1 = setInterval(function() {
            vm.numero1 += 1
         }, 20)

         this.contarNumero2 = setInterval(function() {
            vm.numero2 += 1
         }, 30)

         this.contarNumero3 = setInterval(function() {
            vm.numero3 += 1
         }, 40)
      },
      pararContagem() {
         clearInterval(this.contarNumero1)
         clearInterval(this.contarNumero2)
         clearInterval(this.contarNumero3)
         clearInterval(this.iniciaContagem)
      },
      AddToA: function() {
         return this.a++
         console.log('increaseA')
      },
      AddToB: function() {
         return this.b++
         console.log('increaseB')
      },
      alertMe() {
         alert('Isso foi um alerta.')
      },

      updateCoordinates: function(e) {
         this.x = e.clientX
         this.y = e.clientY
      },

      changeTitle: function(e) {
         if (e.target.value == '0') {
            this.title = 'Tudo foi limpo'
         } else {
            this.title = e.target.value
         }
      },

      somaSimples: function() {
         var input1 = document.getElementById('input1').value
         var input2 = document.getElementById('input2').value

         this.resultado = parseFloat(input1) + parseFloat(input2)
         this.title = "I'm still workin' fine"
      },

      changeLink: function(e) {
         var divLink = document.getElementById('divLink')
         var link = '"http://www.' + e.target.value + '.com.br"'

         this.finishedLink = '<a href=' + link + '>Google finished link</a>'
      },

      increase: function() {
         this.counter++
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
   width: 500px;
   background-color: rgb(144, 190, 165);
}

.barraDeProgresso {
   width: 10px;
   background-color: brown;
   height: 10px;
}
</style>
