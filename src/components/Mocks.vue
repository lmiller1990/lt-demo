<template>
  <div>
    <h1>4. mocks: {} (モック)</h1>
    <div :style="getColor">
      Welcome, {{ $route.params.username }}
    </div>
    <div>
      色: <input type="text" @input="updateColor">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Mocks',

    computed: {
      getColor () {
        return { 
          'border': '15px solid ' + this.$store.state.color }
      }
    },

    methods: {
      updateColor (event) {
        this.$store.commit('SET_COLOR', event.target.value)
      }
    }
  }
</script>

<style scoped>
input {
  font-size: 1.2em;
}
</style>
