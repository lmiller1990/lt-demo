<template>
  <div>
    <div id="updated">
      {{ updated }}
    </div>
    <div v-if="changed" id="changed">
      Thank you for your submission.
    </div>
    <input v-model="text">
    {{ text }}
  </div>
</template>

<script>
  export default {
    name: 'Click',

    data () {
      return {
        initialText: '',
        text: '',
        changed: false
      }
    },

    computed: {
      updated () {
        return this.initialText !== this.text
      }
    },

    watch: {
      text () {
        this.changed = true
      }
    }
  }
</script>

<style scoped>
</style>
