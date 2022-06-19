import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        colors : [],
        pickedColor: ''
    }, 
    actions : {
        restart({commit}, quantity) {
            commit('setColors', quantity)
            commit('pickedColor', quantity)
        },
        pintarColor({commit}, index) {
            commit('pintarColor', index)
        },
        pintarTodos({commit}) {
            commit('pintarTodos')
        }
    },
    mutations : {
        setColors(state, quantity) {
            state.colors = []
            for (let i = 0; i < quantity; i++) {
                state.colors.push("rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")")
            }
        },
        pickedColor(state, quantity) {
            state.pickedColor = state.colors[Math.floor(Math.random() * quantity)]
        },
        pintarColor(state, index) {
            state.colors[index] = 'white'
            console.log(state.colors[index]);
        },
        pintarTodos(state) {

            for (let i = 0; i < state.colors.length; i++) {
                    state.colors[i] = state.pickedColor
            }
        }
    },
    getters : {
        getColores : state => state.colors ,
        getPickedColor : state => state.pickedColor
    }
    
})