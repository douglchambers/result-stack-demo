<template>
  <div class="github-search">
    <b-form-input
      v-model="searchValue"
      class="search-input"
      placeholder="Name, email address or user name"
      @keypress.enter="submitSearch"
    />
    <b-button
      variant="primary"
      class="search-button"
      :disabled="!canSubmit"
      @click="submitSearch"
    >
      Search
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: [],
  computed: {
    canSubmit() {
      return this.searchValue;
    }
  },
  methods: {
    submitSearch() {
      if (this.canSubmit) {
        this.$store.dispatch('GithubResults/search', {query: this.searchValue, pageNum: 1});
        this.$emit('search', this.searchValue);
      }
    },
  },
  data() {
    return {
      searchValue: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.github-search {
  grid-column-start: span 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .search-input {
    width: 80%;
  }
  .search-button {
    margin: 0 1rem;
  }
}
</style>
