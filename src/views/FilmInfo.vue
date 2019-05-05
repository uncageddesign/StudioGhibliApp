<template lang="html">
  <div v-if="film" id="view">
    <div id="info">
      <h1>{{ film.title }}</h1>
      <p>Director: {{ film.director }}</p>
      <p>Year of Release: {{ film.release_date}}</p>
      <p>{{ film.description }}</p>
    </div>
  </div>
</template>

<script>
import FilmDetails from '@/components/FilmDetails';

export default {
  name: 'filmInfo',
  props: ['film'],
  components: { FilmDetails }
}
</script>

<style lang="css" scoped>
#view {
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  color: white;
}

#info {
  padding-top: 30px;
  padding-left: 30px;
  width: 60%;
  height: 60%;

  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-right: 100px;
  color: white;
}
</style>
