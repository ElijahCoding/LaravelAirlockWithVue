<template>
  <div id="app">
    <AppNav />
    <router-view/>
  </div>
</template>

<script>
  import AppNav from '@/components/global/AppNav'

  export default {
    components: {
      AppNav
    }
  }
</script>

<style src="@/assets/styles/app.css" />