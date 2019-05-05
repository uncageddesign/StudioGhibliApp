<template lang="html">
  <div v-if="film">
    <h1>{{ film.title }}</h1>
  </div>
</template>

<script>

export default {
  name: 'filmInfo',
  props: ['film'],

}
</script>

<style lang="css" scoped>
</style>
