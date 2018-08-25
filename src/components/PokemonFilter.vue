<template>
    <p>
        <label>
            <select v-model="selected" v-on:change="handleChange">
                <option value="">All Pokemon</option>
                <option v-for="type in types"
                    v-bind:key="type"
                    v-bind:value="type"
                >
                    {{ type }}
                </option>
            </select>
        </label>
    </p>
</template>

<script>
import pokedex from '../pokedex.js';
import data from './data.js'

export default {
    props: {
        onFilter: Function
    },
    data() {
        return {
            types: data.getTypes(),
            selected:'',
        }
    },
    methods: {
        handleChange() {
            const filter = {
                type: this.selected
            };
            this.onFilter(filter);
        }
    }
    
}
</script>

<style>

</style>
