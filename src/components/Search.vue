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
  props: {},
  methods: {
    submitSearch() {
      console.log('searchValue: ', this.searchValue);
      this.$store.dispatch('GithubResults/search', this.searchValue);
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
<style scoped>
</style>
