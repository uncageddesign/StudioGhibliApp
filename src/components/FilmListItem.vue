<template lang="html">
  <div id="list">
    <router-link :to="{ name: 'filmInfo', params: {film} }">
      <li v-on:click="handleClick">{{ film.title }}</li>
    </router-link>
  </div>
</template>

<script>
import FilmInfo from '@/views/FilmInfo';
import {eventBus} from '@/main.js';

export default {
  name: 'list-item',
  props: ['film'],
  methods: {
    handleClick() {
      eventBus.$emit('film-selected', this.film)
    }
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');


li {
  width: 300px;
  padding: 2px;
  margin-left: 150px;
  font-size: 18px;
  text-align: center;
  display: block;
  list-style-type: none;
  cursor: pointer;
  /* border: solid 2px black; */
}

a {
  font-family: 'Quicksand', sans-serif;
  color: white;
  text-decoration: none;
  text-shadow: 1px 1px 2px black;
}

li:hover {
  background: grey;
  color: white;
}
</style>
