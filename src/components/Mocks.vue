<template>
  <div :style="getColor">
    色: <input type="text" placeholder="色を入力" @input="updateColor">
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
