<template>
  <div class="github-search">
    <b-form-input
        v-model="searchValue"
        placeholder="Name, email address or user name"
        />
    <b-button
      variant="primary"
      @click="submitSearch"
      >
      Search
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: [
    'query',
  ],
  methods: {
    submitSearch() {
      this.$store.dispatch('GithubResults/search', this.searchValue, 1);
    },
  },
  updated() {
    if (this.searchValue != this.query && this.query != '') {
      this.searchValue = this.query;
      this.submitSearch();
    }
  },
  data() {
    return {
      searchValue: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
