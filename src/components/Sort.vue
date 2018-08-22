<template>
<form v-on:submit.prevent="handleSubmit">
    <select v-model="sort">
        <option value="pokemon">Name</option>
        <option value="Type_1">Type</option>
        <option value="species_id">Species</option>
    </select>
     <label>
      <input type="radio" value="1" name="direction" v-model="direction"> asc
    </label>
    <label>
      <input type="radio" value="-1" name="direction" v-model="direction"> desc
    </label>
    <button>Apply Sort</button>
</form>
</template>

<script>
export default {
    props: {
        onSort:Function
    },

    data() {
        return {
        sort: 'pokemon',
        direction: 1
        };
    },

    methods: {

        handleSubmit() {
            this.onSort({
                sort: this.sort,
                direction: this.direction
            });
        }
    }
}
</script>

<style>

select {
    width: 200px;
    height: 50px;
    font-size: 14px;
    margin-right: 20px;
}
label {
    color: white;
    margin-right: 20px;
}
button {
    width: 200px;
    background: #d64444;
    border: none;
    color: white;
    font-size: 20px;
    padding: 20px;
    font-weight: bold;
}
</style>
