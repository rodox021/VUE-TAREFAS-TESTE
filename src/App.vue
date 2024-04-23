<template>
  <div id="app">
    <Navbar/>
   <div class="container">

     <!-- <Aluno  /> -->
     <router-view></router-view>
   </div>
  </div>
</template>

<script>
//import Aluno from './components/Aluno.vue'
import Navbar from './components/Nav'
export default {
  name: 'App',
  components: {
    // Aluno
   Navbar
  }
}
</script>

<style>

</style>
