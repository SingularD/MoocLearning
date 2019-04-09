<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
}
#app{
  display: flex;
  justify-content: center;
}
</style>
