<template>
  <div class="github-results">
    <div
      v-if="hasSearched">
      Showing Results for: "{{ query }}"<br>
      {{ numResults.toLocaleString() }} records found.
      <div
          v-if="results.length > 0"
      >
        <b-pagination
            v-model="currentPage"
            :total-rows="numResults"
            :per-page="perPage"
            aria-controls="my-table"
        ></b-pagination>
        <div
            v-for="result in results"
            :key="result.id"
        >
          <Result
            :result="result"
          />
        </div>
        <b-pagination
            v-model="currentPage"
            :total-rows="numResults"
            :per-page="perPage"
            aria-controls="my-table"
        ></b-pagination>
      </div>
      <div
          v-else
      >
        No results found
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Result from "@/components/Result";

export default {
  name: 'Results',
  components: {Result},
  props: [
      'query',
  ],
  methods: {},
  computed: {
    ...mapGetters('GithubResults', {
      results: 'resultsForSearch',
      numResults: 'numResultsForSearch',
      hasSearched: 'hasSearched',
    }),
  },
  watch: {
    currentPage: {
      handler(newPage) {
        console.log('watch currentPage: ', newPage, this.query);
        this.$store.dispatch('GithubResults/search', { query: this.query, pageNum: newPage });
        window.scrollTo(0, 0);
      },
    }
  },
  data() {
    return {
      currentPage: 1,
      perPage: 30,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
