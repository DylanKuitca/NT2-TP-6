import Vue from 'vue'

const globalMixin = {
    methods: {
        startGame(quantity) {
            this.$store.dispatch('restart', quantity)
          }
    }, 
    computed: {

    }
}

Vue.mixin(globalMixin)