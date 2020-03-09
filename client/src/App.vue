<template>
  <div>
    <a href="" @click.prevent="login"></a>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    methods: {
      async login () {
        await axios.post('http://127.0.0.1:8000/login', {
          email: 'alex'
        })
      }
    }
  }
</script>