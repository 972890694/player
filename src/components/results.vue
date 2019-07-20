<template>
  <div class="result-wrapper">
    <div class="song" v-for="(v,i) in songList" :key="i">
      <div class="name">
        <span class="iconfont icon-play" @click="toplay(v.id,v.name)"></span>
        {{ v.name }}
        <span class="iconfont" :class="v.mvid == 0? '': 'icon-editmedia'" @click="tomv(v.mvid)"></span>
      </div>
      <div class="singer">{{ v.artists | formatSinger }}</div>
      <div class="album">《{{ v.album.name }}》</div>
      <div class="time">{{ v.duration | formatDuration }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songList: []
    };
  },
  methods: {
      toplay(id,songNaem) {
          this.$router.push(`/player/${id}/${songNaem}`)
      },
      
      tomv(id) {
          this.$router.push(`/mv/${id}`)
      }
  },
  filters: {
      formatSinger(singer) {
          let str = ''
          singer.forEach(v => {
              str += v.name + '/'
          })
          return str.substr(0,str.length -1 )
      },

      formatDuration(value) {
          let sec = Math.round(value / 1000); //秒没必要写小数，所以四舍五入取整

          /*
            1分 = 60秒
          
            60秒=1分      60 / 60 = 1      但是转换成分不要小数，所以直接取整（parseInt）
            70秒=1分10秒  70 / 60 = 1.15.....
            90秒=1分30秒  90 / 60 = 1.5
          */
          let min = parseInt(sec / 60);
          // 接下来要得到剩余的秒数
          sec = sec % 60;
          sec = sec < 10 ? "0" + sec : sec;
          return min + ":" + sec;
      }
  },
  created() {
    // console.log(this.$route.params.name);
    this.axios
      .get(`https://autumnfish.cn/search?keywords=${this.$route.params.name}`)
      .then(v => {
        // console.log(v);
        this.songList = v.data.result.songs;
      });
  },
  watch: {
    "$route.params.name": function(newVal) {
      this.axios
        .get(`https://autumnfish.cn/search?keywords=${newVal}`)
        .then(v => {
          //   console.log(v);
          this.songList = v.data.result.songs;
        });
    }
  }
};
</script>

<style>
</style>
