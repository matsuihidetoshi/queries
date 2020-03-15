<template>
  <div class="home">
    <button @click="getToken()">Get token</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    getToken: function() {
      console.log(localStorage.token)
    }
  }
}
</script>
