<template>
  <li>
    <p>{{ character.pokemon }}</p>
    <img class="images" v-bind:src="character.url_image">
    <p>type: {{ character.type_1 }}</p>
    <p>attack: {{ character.attack }}</p>
    <p>defense: {{ character.defense }}</p>
  </li>
</template>

<script>
import pokedex from '../../pokedex.js';
import Character from './Character.vue';

export default {
  props: {
    filter: Object,
    sort: Object,
    character: Object
  },
  data() {
    return {
      
    };
  },
  computed: {
    filteredCharacters() {
      const { attack, defense } = this.filter;
      if(!attack && (defense || 0) <= 0) return this.characters;

      return this.characters.filter(character => {
        return (
          (!attack || character.attack === attack) &&
          (!defense || character.defense > defense)
        );
      });
    },
    sortedCharacters() {
      let { sort, direction } = this.sort;
      if(!sort) {
        sort = 'name';
      }
  
      return this.filteredCharacters.slice().sort((a, b) => {
        if(a[sort] > b[sort]) return 1 * direction;
        if(b[sort] > a[sort]) return -1 * direction;
        if(b[sort] === a[sort]) return 0;
      });
    }
  },
  components: {
    Character
  }
};

</script>

<style scoped>
li {
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
}
img {
  max-height: 200px;
}
</style>