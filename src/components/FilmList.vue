<template lang="html">
  <div v-if="films">
    <ul>
      <FilmListItem v-for="(film, index) in films" :key="index" :film="film" />
    </ul>
  </div>
</template>

<script>
import FilmListItem from './FilmListItem';

export default {
  name: 'film-list',
  components: { FilmListItem},
  props: ['films']
}
</script>

<style lang="css" scoped>
h1 {
  margin-top: 10px;
}

</style>
