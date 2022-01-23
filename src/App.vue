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
      console.log('resetSearch: ', evt);
      this.searchQuery = evt;
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
