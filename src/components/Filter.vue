<template>
    <form v-on:submit.prevent="handleSubmit">
        <p>
            <label>
                attack:
                <select v-model="selected">
                    <option value=""> attack </option>
                    <option v-for="attack in attacks"
                    v-bind:key="attack"
                    v-bind:value="attack">
                    {{ attack }}
                    </option>
                </select>
            </label>
        </p>
         <p>
      <button>Apply</button>
    </p>
  </form>

</template>

<script>
export default {
    props: {
        pokemonList: Array,
        onFilter: Function
    },

    data() {
        return {
            attacks: pokemonList.allAttacks(),
            selected: ''
        };
    },
    methods: {
        handleSumbit(){
            const pokemonFilter = {
                attack: this.selected
            };
            this.onFilter(pokemonFilter);
        }
    }

};
</script>

<style>

</style>
