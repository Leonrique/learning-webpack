
<template>
  <!-- eslint-disable -->
   <div id="treinamento">
        <h1 v-once>{{ title }}</h1>
        <p v-on:mousemove="updateCoordinates">Coordinates: {{ x }} / {{ y }}
          - <span v-on:mousemove.stop="">ZONA MORTA</span>
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
        <!-- <div class="container">
            <div class="row">
                <div class="col-md-03">
                    <button :click="a++"><span class="btn">Adicionar em A</span></button>
                    <br>
                    <span>{{ a }}</span>
                    <br>
                    <span>{{ increaseA }}</span>
                </div>
                <div class="col-md-03">
                    <button><span class="btn">Adicionar em B</span></button>
                    <br>
                    <span>{{ b }}</span>
                    <br>
                    <span>{{ increaseB }}</span>
                </div>
            </div>
        </div> -->
        <div class="container">
            <h1>Computed properties</h1>
            <button v-on:click="AddToA">Add to A</button>
            <button v-on:click="AddToB">Add to B</button>
            <p>Age + A = {{ a }}</p>
            <p>Age + B = {{ b }}</p>
            <p>Sum = {{ resultado2 }}</p>
        </div>
   </div>
</template>

<script>
/* eslint-disable*/
/* eslint-disable-next-line */
export default {
  name: "Greeting",
  data() {
    return {
      title: "Just workin' fine",
      resultado: 0,
      resultado2: 0,
      link: "http://www.google.com",
      finishedLink:
        '<a href="' + "http://www.google.com" + '">Google finished link</a>',
      counter: 0,
      x: 0,
      y: 0,
      a: 0,
      b: 0,
      age: 5
    };
  },
  computed: {},
  watch: {
    a: function() {
      var vm = this;
      setInterval(function() {
        vm.resultado2 += vm.a;
      }, 2000);
    },
    b: function() {
      var vm = this;
      setInterval(function() {
        vm.resultado2 += vm.b;
      }, 2000);
    }
  },
  methods: {
    AddToA: function() {
      return this.a++;
      console.log("increaseA");
    },
    AddToB: function() {
      return this.b++;
      console.log("increaseB");
    },
    alertMe() {
      alert("Isso foi um alerta.");
    },

    updateCoordinates: function(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },

    changeTitle: function(e) {
      if (e.target.value == "0") {
        this.title = "Tudo foi limpo";
      } else {
        this.title = e.target.value;
      }
    },

    somaSimples: function() {
      var input1 = document.getElementById("input1").value;
      var input2 = document.getElementById("input2").value;

      this.resultado = parseFloat(input1) + parseFloat(input2);
      this.title = "I'm still workin' fine";
    },

    changeLink: function(e) {
      var divLink = document.getElementById("divLink");
      var link = '"http://www.' + e.target.value + '.com.br"';

      this.finishedLink = "<a href=" + link + ">Google finished link</a>";
    },

    increase: function() {
      this.counter++;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
