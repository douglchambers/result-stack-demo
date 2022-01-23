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
  methods: {
    submitSearch() {
      this.$store.dispatch('GithubResults/search', this.searchValue, 1);
      this.$emit('search', this.searchValue);
    },
  },
  // updated() {
  //   console.log('updated');
  //   if (this.searchValue != this.query && this.query != '') {
  //     this.searchValue = this.query;
  //     this.submitSearch();
  //   }
  // },
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
  justify-items: space-between;
  align-items: center;

  .search-input {
    width: 80%;
  }
  .search-button {
    margin: 0 1rem;
  }
}
</style>
