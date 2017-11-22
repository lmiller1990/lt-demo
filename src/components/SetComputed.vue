<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        language: 'ja'
      }
    },

    computed: {
      greeting () {
        return this.language === '日本語' 
          ? 'おはよう'
          : 'Good morning'
      }
    }
  }
</script>
