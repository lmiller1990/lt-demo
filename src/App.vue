<template>
  <div id="app">
    <div class="box"><Hello /></div>
    <div class="box"><setData /></div>
    <div class="box"><Trigger /></div>
    <div class="box"><Mocks /></div>
  </div>
</template>

<script>
import Trigger from './components/Trigger'
import Mocks from './components/Mocks'
import setData from './components/setData'
import Hello from './components/Hello'

export default {
  components: {
    Trigger,
    Mocks,
    setData,
    Hello
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
