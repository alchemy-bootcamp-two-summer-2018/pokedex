<template>
    <form v-on:submit.prevent="handleSubmit">
        <p>
            <label>
                Type 1:
                <select v-model="selected">
                    <option value="">All Types</option>
                    <option v-for="type in types"
                        v-bind:key="type"
                        v-bind:value="type">
                        {{ type }}
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
// import pokedex from "../pokedex.js";
import type from "./type.js";
import Pokemon from './Pokemon.vue';

export default {
    props: {
        onFilter: Function
    },
    data(){
        return {
            types: type.getTypes(),
            selected: ''
        };
    },
    methods: {
        handleSubmit() {
            const filter = {
                type: this.selected
            };
            this.onFilter(filter);
        }
    },
    components: {
        Pokemon
    }
};

</script>

<style>

</style>
