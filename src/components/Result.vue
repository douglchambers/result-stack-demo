<template>
  <div class="github-result">
    <div class="avatar">
      <b-img
          class="avatar"
        :src="result.avatarUrl"
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
      <h5>
        Location: {{ result.location }}
      </h5>
      <h5>
        Created At: {{ result.createdAt }}
      </h5>
      <h5>
        Last Updated At: {{ result.lastUpdate }}
      </h5>
      <h5>
        Num Public Repos: {{ result.numPublicRepos }}
      </h5>
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
<style lang="scss" scoped>
.github-result {
  display: grid;
  grid-template-columns: 144px 1fr 1fr;
  justify-items: flex-start;
  align-items: center;
  text-align: left;

  background: #CCCCCC;
  padding: 1rem;

  .avatar {
    width: 72px;
    height: 72px;
  }

  @media(max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .secondary-info {
    grid-column-start: span 3;
  }
  .bio {
    grid-column-start: span 3;
  }
}
</style>
