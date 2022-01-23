<template>
  <div id="app">
    <Search
      :query="searchQuery"
      @search="setSearchQuery"
    />
    <Results
      :query="searchQuery"
    />
    <PreviousSearches
      @resetSearch="resetSearch"
    />
  </div>
</template>

<script>
import Search from "@/components/Search";
import Results from "@/components/Results";
import PreviousSearches from "@/components/PreviousSearches";

export default {
  name: 'App',
  components: {
    Results,
    Search,
    PreviousSearches,
  },
  methods: {
    resetSearch(evt) {
      this.searchQuery = evt;
      this.$store.dispatch('GithubResults/search', { query: this.searchQuery, pageNum: 1 });

    },
    setSearchQuery(evt) {
      this.searchQuery = evt;
    },
  },
  data() {
    return {
      searchQuery: '',
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

  display: grid;
  grid-template-columns: 3fr 1fr;
  @media(max-width: 767px) {
    grid-template-columns: 1fr;
  }
  justify-items: stretch;
  grid-gap: 1rem;

  margin: 3rem;
  @media(max-width: 767px) {
    margin: 1rem;
  }
}
</style>
