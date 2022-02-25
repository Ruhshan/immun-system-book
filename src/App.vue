<template>
  <div id="app">
    <immune-system/>
  </div>
</template>

<script>
import ImmuneSystem from './components/ImmuneSystem.vue'

export default {
  name: 'App',
  components: {

    ImmuneSystem
  }
}
</script>

<style>
@import url('./assets/main.css');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;


}
</style>
