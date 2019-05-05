<template lang="html">
  <div>
    <h1>{{ film.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'film-detail',
  props: ['film']
}
</script>

<style lang="css" scoped>
</style>
