<template>
  <div class="player">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt />
      <img class="cover" :src="picURL?picURL:'../assets//img/cover.png'" alt />
    </div>
    <div class="right">
      <div class="title">
        <img src="../assets//img/tag.png" alt />
        <span>{{ $route.params.songName }}</span>
      </div>
      <div class="singer">
        歌手:
        <span>{{ songList[0].artists | formatSinger }}</span>
      </div>
      <div class="album">
        所属专辑:
        <span>{{ songList[0].album.name }}</span>
      </div>
      <audio class="audio" controls :src="songURL"></audio>
      <ul class="lyric-container">
        <li class="lyric">难以忘记</li>
        <li class="lyric">初次见你</li>
        <li class="lyric">那双迷人的小眼睛</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songURL: "",
      picURL: "",
      songList: []
    };
  },
  methods: {},
  created() {
    //  获取歌曲 url
    this.axios
      .get(`https://autumnfish.cn/song/url?id=${this.$route.params.id}`)
      .then(v => {
        console.log(v);
        this.songURL = v.data.data[0].url;
      });

    // 获取封面
    this.axios
      .get(`https://autumnfish.cn/song/detail/url?ids=${this.$route.params.id}`)
      .then(v => {
        this.picURL = v.data.songs[0].al.picUrl;
      });

    // 获取歌曲信息
    this.axios
      .get(
        `https://autumnfish.cn/search?keywords=${this.$route.params.songName}`
      )
      .then(v => {
        // console.log(v);
        // this.songList = v.data.result.songs;
        this.songList = v.data.result.songs.filter(v => {
          return v.id == this.$route.params.id;
        });
      });
  },
  filters: {
    formatSinger(singer) {
      let str = "";
      singer.forEach(v => {
        str += v.name + "/";
      });
      return str.substr(0, str.length - 1);
    }
  }
};
</script>

<style>
</style>
