<template>
  <div class="github-results">
    <div
        v-if="githubResults.length > 0"
    >
      <div
        v-for="result in githubResults"
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
export default {
  name: 'Results',
  props: {},
  methods: {},
  computed: {
    githubResults() {
      // get from store
      return [];
    }
  },
  data() {
    return {};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
