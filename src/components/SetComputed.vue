<template>
  <div>
    <h1>2. setComputed()</h1>
    <div class="greet">
      {{ greeting }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'setData',

    data () {
      return {
        locale: 'ja'
      }
    },

    computed: {
      greeting () {
        return this.locale === 'en' 
          ? 'Hi!' 
          : 'おはよう'
      }
    }
  }
</script>
