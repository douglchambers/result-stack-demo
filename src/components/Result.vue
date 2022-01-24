<template>
  <div class="github-result">
    <div class="avatar">
      <a :href="result.profileUrl" target="_blank">
        <b-img
          class="avatar"
          :src="result.avatarUrl"
        />
      </a>
    </div>
    <div class="primary-info">
      <h3>
        {{ result.name }}
      </h3>
      <h4>
        {{ result.username }}
      </h4>
      <h4>
        Email: {{ result.email }}
      </h4>
    </div>
    <div class="profile-link">
      <a :href="result.profileUrl" target="_blank">View Profile</a>
    </div>
    <div class="secondary-info">
      <h5>
        Location: {{ result.location }}
      </h5>
      <h5>
        Created At: {{ createdAt }}
      </h5>
      <h5>
        Last Updated At: {{ lastUpdated }}
      </h5>
      <h5>
        Num Public Repos: {{ result.numPublicRepos }}
      </h5>
    </div>
    <div
      v-if="result.bio"
      class="bio">
      Bio:
      <p>
        {{ result.bio }}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Result',
  props: [
    'result',
  ],
  methods: {},
  computed: {
    createdAt() {
      return moment(this.result.createdAt).format('LLL');
    },
    lastUpdated() {
      return moment(this.result.lastUpdate).format('LLL');
    }
  },
  data() {
    return {};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.github-result {
  display: grid;
  grid-template-columns: 80px 2fr 120px;
  justify-items: flex-start;
  align-items: center;
  text-align: left;

  background: #CCCCCC;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;

  .avatar {
    width: 72px;
    height: 72px;
    border-radius: 4px;
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
