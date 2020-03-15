<template>
  <div class="home">
    <button @click="createConformation(1)">Yes</button>
    <button @click="createConformation(0)">No</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { API, graphqlOperation } from "aws-amplify"
import { createConformation } from "../graphql/mutations"

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      token: ""
    }
  },
  methods: {
    getToken: function() {
      this.token = localStorage.token
    },
    createConformation: async function (answer) {
      this.getToken()
      if (this.token === "" || answer === null) return
      const confirmation = {token: this.token, answer: answer}
      try {
        this.token = ""
        this.answer = null
        await API.graphql(graphqlOperation(createConformation, {input: confirmation}))
      } catch (error) {
        error
      }
    },
  }
}
</script>
