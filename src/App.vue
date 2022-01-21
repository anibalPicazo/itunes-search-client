<template>
  <div id="app">
    <ReaderSongs msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ReaderSongs from './components/ReaderSongs.vue'

export default {
  name: 'App',
  components: {
    ReaderSongs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 2em;
}
</style>
