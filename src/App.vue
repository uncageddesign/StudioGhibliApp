<template lang="html">
  <div id="bg">
    <router-view id="bg"/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
body {
  margin: 0;
}
</style>

<style lang="css" scoped>
#bg {
  justify-content: flex-end;
  background-color: lightblue;
  height: 100vh;
  background-image: url('~@/assets/studio.jpg');
  background-size: cover;
}
</style>
