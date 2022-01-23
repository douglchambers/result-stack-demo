<template>
  <div class="github-results">
    <div
        v-if="searchHistory.length > 0"
    >
      <div>
        Previous Searches:
      </div>
      <div
          v-for="search in searchHistory"
          :key="search.query"
      >
        <a
            href="javascript;"
            @click.prevent="setSearch(search.query)"
        >
          {{ search.query }}: {{ search.numResults.toLocaleString() }} result<span v-if="search.numResults > 1">s</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PreviousSearches',
  props: {},
  methods: {
    setSearch(query) {
      console.log('emitting: ', query);
      this.$emit('resetSearch', query);
      return false;
    }
  },
  computed: {
    ...mapGetters('GithubResults', {
      searchHistory: 'searchHistory',
    })
  },
  data() {
    return {};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
