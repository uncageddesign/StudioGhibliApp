<template lang="html">
  <div id="bg">
    <Header />
    <router-view id="bg"/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
<style>
body {
  margin: 0;
}
</style>

<style lang="css" scoped>
h1 {
  margin-top: 10px;
}

#bg {
  background-color: lightblue;
  height: 100vh;
}
</style>
