<template>
  <div id="app">
    <div class="jumbotron">
      <div class="container">
        <h2>The great</h2>
        <h1>{{this.$store.state.pickedColor}}</h1>
        <h2>Guessing Game</h2>
        <div class="container d-flex justify-content-around">
          <button @click="startGame(quantity)">{{this.anotherMessage}}</button>
          <div>{{this.message}}</div>
          <div>
            <button class="mr-3" @click="startGame(3)">Easy</button>
            <button @click="startGame(6)">Hard</button>
          </div>
        </div>
      </div>
      </div>
      <div class="container" v-for="(i,index) in this.quantity" :key="index">
      <div @click="esGanador(index)">
        <Cuadrado :style="{backgroundColor: getColores[index]}"/>
      </div>
      </div>
  </div>
</template>

<script>
import Cuadrado from './components/Cuadrado'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  mounted() {
    this.startGame(this.quantity)
  },
  components: {
    Cuadrado
  },
  data () {
    return {
      quantity : 3,
      message: '',
      anotherMessage: 'New colors!'
    }
  },
  methods: {
    startGame(quantity) {
      this.quantity = quantity
      this.message = ''
      this.$store.dispatch('restart', quantity)
    },
    esGanador(index) {
      console.log(index);
      this.anotherMessage = "Play Again!"
      // this.getColores[index] == this.getPickedColor ?  : 
      if (this.getColores[index] == this.getPickedColor) {
        this.message = 'You Picked Right!'
        this.$store.dispatch('pintarTodos')
      } else {
        this.message = "Try Again!"
        this.$store.dispatch('pintarColor', index)
      }
    }
  },
  computed : {
    ...mapGetters([
      'getColores',
      'getPickedColor'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
