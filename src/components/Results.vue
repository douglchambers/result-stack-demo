<template>
  <div class="github-results">
    <div
      v-if="hasSearched">
      Showing Results for: "{{ query }}"<br>
      {{ numResults.toLocaleString() }} records found.
      <div
          v-if="results.length > 0"
      >
        <div
            v-for="result in results"
            :key="result.id"
        >
          <Result
            :result="result"
          />
        </div>
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
