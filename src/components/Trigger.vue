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
    name: 'trigger',

    data () {
      return { language: '英語' }
    },

    methods: {
      setLanguage () {
        this.locale === '英語' 
        ? this.locale = '日本語'
        : this.locale = '英語'
      }
    },

    computed: {
      greeting () {
        return this.locale === '英語' 
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
