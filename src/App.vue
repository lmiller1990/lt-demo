<template>
  <div id="app">
    <div class="box"><Click /></div>
  </div>
</template>

<script>
import Click from './components/Click'

export default {
  components: {
    Click
  }
}
</script>

<style>
body {
  border: 0px;
  margin: 0px;
}
#app {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 5px;
  height: 100vh;
}

div {
  font-size: 1.3em;
}

.box {
  margin: 5px;
  border: 4px solid darkgrey;
}

.box:hover {
  background-color: #FFFEEE;
}
</style>
