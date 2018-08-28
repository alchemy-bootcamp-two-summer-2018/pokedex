
<template>
  <ul>
    <Character v-for="character in sortedCharacters"
      v-bind:key="character.name"
      v-bind:character="character"/>
  </ul>
</template>

<script>
import characters from '../../pokedex.js';
import Character from './Character.vue';
export default {
  props: {
    filter: Object,
    sort: Object
  },
  data() {
    return {
      characters: characters.getCharacters()
    };
  },
  computed: {
    filteredCharacters() {
      const { type } = this.filter;
      if(!type) return this.characters;
      return this.characters.filter(character => {
        return character.type === type;
      });
    },
    sortedCharacters() {
      let { sort, name } = this.sort;
      if(!sort) {
        sort = 'name';
      }
      return this.filteredCharacters.slice().sort((a, b) => {
        if(a[sort] > b[sort]) return 1 * name;
        if(b[sort] > a[sort]) return -1 * name;
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
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}
</style>