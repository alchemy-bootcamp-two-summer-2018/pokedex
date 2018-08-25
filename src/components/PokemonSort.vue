<template>
    <section>
        <select v-model="sort" v-on:change="handleChange">
        <option value="pokemon">Name</option>
        <option value="type_1">Type</option>
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
        
        </select>
        <label>
        <input type="radio" value="1" 
            name="direction" v-model="direction"
            v-on:change="handleChange"> Ascending
        </label>
        <label>
        <input type="radio" value="-1" name="direction" 
            v-model="direction"
            v-on:change="handleChange"> Descending
        </label>
    </section>
</template>

<script>
export default {
    props: {
        onSort: Function
    },
    data() {
        return {
            sort: 'pokemon',
            direction: 1,
        }
    },
    methods: {
        handleChange() {
            this.onSort({
                sort: this.sort,
                direction: this.direction
            })
        }
    }
}
</script>

<style>

</style>
