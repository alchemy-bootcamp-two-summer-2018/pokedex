
<template>
  <ul>
    <Character v-for="character in sortedCharacters"
      v-bind:key="character.character"
      v-bind:character="character"/>
  </ul>
</template>

<script>
import characters from '../../pokedex.js';
import Character from './Character.vue';
export default {
  props: {
    filter: Object,
    sort: Object,

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
        return character.type_1 === type;
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
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}
</style>