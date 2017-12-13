<template>
  <div>
    <div class="greet">
      {{ message }}
    </div>
    <button id="btn" @click="setMessage">Toggle</button>
  </div>
</template>

<script>
  export default {
    name: 'Trigger',

    data () {
      return { message: 'Hello' }
    },

    methods: {
      setMessage () {
        this.message === 'Hello' 
        ? this.message = 'こんにちは'
        : this.message = 'Hello'
      }
    }
  }
</script>

<style scoped>
#btn {
  font-size: 1.5em;
  width: 200px;
  height: 100px;
}
</style>
