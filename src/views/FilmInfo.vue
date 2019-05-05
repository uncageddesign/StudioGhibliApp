<template lang="html">
  <div v-if="film" id="view">
    <NavBar />
    <div id="info">
      <h1>{{ film.title }}</h1>
      <p id="subinfo">Director: {{ film.director }} <br>
                      Year of Release: {{ film.release_date}} <br>
                      Rotten Tomatoes Score: {{ film.rt_score }}</p>
      <p>{{ film.description }}</p>
    </div>
  </div>
</template>

<script>
import FilmDetails from '@/components/FilmDetails';
import NavBar from '@/components/NavBar';

export default {
  name: 'filmInfo',
  props: ['film'],
  components: { FilmDetails, NavBar }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

#view {
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  color: white;
}

#info {
  background-color: rgba(200, 200, 200, 0.4);
  padding: 30px;
  width: 650px;
  margin-right: 100px;
  color: black;
  font-size: 18px;
  font-family: 'Quicksand', sans-serif;
}

#subinfo {
  font-size: 22px;
}

h1 {
  font-size: 50px;
}
</style>
