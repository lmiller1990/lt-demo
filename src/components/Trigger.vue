<template>
  <div>
    <div class="greet">
      {{ greeting }}
    </div>
    <button id="btn" @click="setLanguage">Toggle</button>
  </div>
</template>

<script>
  export default {
    name: 'Trigger',

    data () {
      return { language: '英語' }
    },

    methods: {
      setLanguage () {
        this.language === '英語' 
        ? this.language = '日本語'
        : this.language = '英語'
      }
    },

    computed: {
      greeting () {
        return this.language === '英語' 
          ? 'Hello' 
          : 'こんにちは'
      }
    },
  }
</script>

<style scoped>
#btn {
  font-size: 1.5em;
  width: 200px;
  height: 100px;
}
</style>
