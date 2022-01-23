<template>
  <div class="github-result">
    <div class="avatar">
      <b-img
        :src="result.avatarUrl"
        width="144"
        height="144"
      />
    </div>
    <div class="primary-info">
      <h1>
        {{ result.name }}
      </h1>
      <h2>
        {{ result.username }}
      </h2>
      <h2>
        Email: {{ result.email }}
      </h2>
    </div>
    <div class="profile-link">
      <a :href="result.profileUrl" target="_blank">View Profile</a>
    </div>
    <div class="secondary-info">
      <h3>
        Location: {{ result.location }}
      </h3>
      <h4>
        Created At: {{ result.createdAt }}
      </h4>
      <h4>
        Last Updated At: {{ result.lastUpdate }}
      </h4>
      <h4>
        Num Public Repos: {{ result.numPublicRepos }}
      </h4>
    </div>
    <div class="bio">
      <p>
        {{ result.bio }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: [
    'result',
  ],
  methods: {},
  computed: {},
  data() {
    return {};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
