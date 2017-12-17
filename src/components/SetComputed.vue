<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        a: 1
      }
    },

    computed: {
      b() {
        return this.a * 2
      }
    }
  }
</script>
