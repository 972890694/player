<template>
  <div class="video">
    <div class="title-wrapper">
      <span class="tag">MV</span>
      <span class="title">{{ mvData.artists[0].name }}</span>
      <span class="artist">{{ mvData.artistName }}</span>
    </div>
    <video :src="mvURL" controls></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mvData: null
    };
  },

  methods: {},

  computed: {
    mvURL() {
      let v = this.mvData.brs;
      if (v[1080]) {
        return v[1080];
      } else if (v[720]) {
        return v[720];
      } else if (v[480]) {
        return v[480];
      } else {
        return v[240];
      }
    }
  },

  created() {
    this.axios
      .get(`https://autumnfish.cn/mv/detail?mvid=${this.$route.params.id}`)
      .then(v => {
        console.log(v);
        this.mvData = v.data.data;
      });
  }
};
</script>

<style>
</style>
