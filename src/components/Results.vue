<template>
  <div class="github-results">
    <div
        v-if="results.length > 0"
    >
      <div
        v-for="result in results"
        :key="result.id"
        >
        <pre>
          {{ result }}
        </pre>
      </div>
    </div>
    <div
      v-else
      >
      No results available yet
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Results',
  props: {},
  methods: {},
  computed: {
    ...mapGetters('GithubResults', {
      results: 'results',
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
