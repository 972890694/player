<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" v-model="songName" @keyup.enter="searchSong" />
      <button @click="searchSong">
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <div class="tab-bar">
        <router-link to="/result" class="bar-item" active-class="active">搜索结果</router-link>
        <router-link to="/player" class="bar-item" active-class="active">歌曲播放</router-link>
        <router-link to="/mv" class="bar-item" active-class="active">mv</router-link>
        <router-link to="/comment" class="bar-item" active-class="active">歌曲评论></router-link>
      </div>
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songName: ''
    }
  },
  methods: {
    searchSong() {
      this.$router.push(`/result/${this.songName}`)
    }
  },
};
</script>

<style>

</style>
