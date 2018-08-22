<template>
    <header>
        <h1>Pokemon Filter and Sort</h1>
        <PokemonFilter v-bind:onFilter="handleFilter" v-bind:types="types"/>
        <!-- <PokemonSort v-bind:onSort="handleSort"/> -->
    </header> 
</template>