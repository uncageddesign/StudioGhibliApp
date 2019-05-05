<template lang="html">
  <div v-if="films" id="view">
    <!-- <Header /> -->
    <FilmList :films='films' />
    <FilmInfo v-if="selectedFilm" :film="selectedFilm" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import FilmList from '@/components/FilmList';
import FilmInfo from '@/views/FilmInfo';
import {eventBus} from '@/main.js';

export default {
  name: 'film-view',
  components: { Header, FilmList, FilmInfo },
  data() {
    return {
      films: [],
      selectedFilm: null
    }
  },
  mounted() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then((data) => {
      this.films = data
    })

    eventBus.$on('film-selected', (film) => {
      this.selectedFilm = film;
    })
  }
}
</script>

<style lang="css" scoped>
#view {

  color: white;
}
</style>
