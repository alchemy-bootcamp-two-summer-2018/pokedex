<template>
    <form>
        <p>
            <label>
                Size:
                <select v-model="selected">
                    <option value="">All types</option>
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

export default {
  props: {
    onFilter: Function,
    types: Array
  },
  data() {
    return {
      selected: '' 
    };
  },
  methods: {
    handleSubmit() {
        
    }
  }
};

</script>