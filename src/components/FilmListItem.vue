<template lang="html">
  <div>
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
li {
  width: 300px;
  margin: 2px 0;
  padding: 2px;
  font-size: 18px;
  text-align: center;
  display: block;
  list-style-type: none;
  cursor: pointer;
}

li:hover {
  background: grey;
  color: white;
}
</style>
