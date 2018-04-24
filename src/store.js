/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        lista: [{ numeroItem: 1, nome: 'mouse', valor: 12 },
        { numeroItem: 2, nome: 'teclado', valor: 120 },
        { numeroItem: 3, nome: 'mousePad', valor: 5 }]
    },
    getters: {
        materiais: function (state) {
            return state.lista
        }
    },
    mutations: {
        increment(state) {
            state.state++
        }
    }
})