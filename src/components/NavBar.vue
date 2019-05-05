<template lang="html">
  <nav>
  <router-link :to="{ name: 'films'}">Return To Film List</router-link>
</nav>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

nav {
  padding: 10px;
}

a {
  text-decoration: none;
  font-size: 16px;
  font-family: 'Quicksand', sans-serif;
}

</style>
