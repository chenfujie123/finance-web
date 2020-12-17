<template>
  <div id="app">
    <HeadFor></HeadFor>
    <my-nav></my-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HeadFor from './components/HeadFor.vue';
import MyNav from './components/MyNav.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeadFor,
    MyNav,
  },
  methods: {
    
  },
  created(){
    this.$router.replace('/index');
  },
}
</script>

<style>
@import './assets/css/font.css';
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
