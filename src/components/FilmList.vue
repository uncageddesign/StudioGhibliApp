<template lang="html">
  <div v-if="films" id="list">
    <Header />
    <ul>
      <FilmListItem v-for="(film, index) in films" :key="index" :film="film" />
    </ul>
  </div>
</template>

<script>
import FilmListItem from './FilmListItem';
import Header from './Header';

export default {
  name: 'film-list',
  components: { FilmListItem, Header},
  props: ['films']
}
</script>

<style lang="css" scoped>
#list {
  display: flex;
  flex-direction: column;
  /* margin-right: 100px; */
  color: white;
}

h1 {
  color: white;
  padding-top: 10px;
}

</style>
