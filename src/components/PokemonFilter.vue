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
        <label>Minimum Attack:
            <input v-model.number="attack" type="number" v-on:keyup="handleChange">
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
            attack:'',
        }
    },
    methods: {
        handleChange() {
            const filter = {
                type: this.selected,
                attack: this.attack
            };
            this.onFilter(filter);
            // console.log("hi", selected)
        }
    }
}
</script>

<style>

</style>
