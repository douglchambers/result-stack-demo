<template>
  <div class="github-results">
    <div
      v-if="hasSearched">
      Showing Results for: "{{ query }}"<br>
      {{ numResults.toLocaleString() }} record<span v-if="numResults > 1">s</span> found.
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
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        this.$store.dispatch('GithubResults/search', { query: this.query, pageNum: newPage });
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
<style lang="scss" scoped>
.github-results {
  @media(max-width: 767px) {
    text-align: center;

    .pagination {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
