<template>
  <div>
    <button><router-link to="/demo1">to demo1</router-link></button>
    <button><router-link to="/demo2">to demo2==</router-link></button>
    <button><router-link :to="{path: '/demo2/' + id}">to demo2</router-link></button>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        id: 123
      }
    }
  }
</script>

<style scoped>

</style>
