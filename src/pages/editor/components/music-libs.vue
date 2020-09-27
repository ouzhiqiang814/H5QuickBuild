<template>
  <div class="components-image-libs">
    <p class="page-title text-center">音乐库管理</p>
    <div class="audio-bgc">
      <audio ref="audioPlayers" id="play-audio" :src="musicSrc" style="opacity: 1;" controls autoplay preload></audio>
    </div>
    <div class="audio-list">
      <div v-if="musicList.length > 0" class="audio-list-box">
        <div class="audio-item" v-for="(item, i) in musicList" :key="i">

          <span class="el-animate-title-name">{{ item.name }}</span>
          <span class="el-animate-title-btn" @click="play(item)">
            <i class="el-icon-caret-right"></i>
          </span>
          <span class="el-animate-title-btn" @click="use(item)">
            <i class="el-icon-finished"></i>
          </span>
        </div>
      </div>
      <notFundData v-else />
    </div>
    <div class="audio-add">
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" :before-upload="beforeUploadMusic" accept="jpg,png,gif" :show-file-list="false">
        <el-button size="small" type="primary">上传音乐</el-button>
        <span slot="tip" class="el-upload__tip marginL20">只能上传mp3/wav/ogg文件</span>
      </el-upload>
      <span class="audio-add-text">
        您在上传音乐时，要对您上传的音乐版权负责，请谨慎使用上传功能！
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import notFundData from '@src/components/notFundData'
export default {
  name: 'music-libs',
  components: {
    notFundData,
  },
  data() {
    return {
      musicSrc: '',
      musicList: [
        {
          name: '倉木麻衣 - Tonight, I Feel Close To You',
          type: 'mp3',
          url:
            '@src/plugins/bg-music/src/倉木麻衣 - Tonight, I Feel Close To You.mp3',
        },
        {
          name: 'music',
          type: 'mp3',
          url: '@src/plugins/bg-music/src/music.mp3',
        },
        {
          name: 'ZARD - 心を開いて',
          type: 'mp3',
          url: '@src/plugins/bg-music/src/ZARD - 心を開いて.mp3',
        },
      ],
      audioEl: undefined,
      playing: true,
    }
  },
  computed: {
    ...mapGetters(['getMusicFlag']),
  },
  watch: {
    getMusicFlag(val) {
      if (val.plug) {
        const audio = this.$refs.audioPlayers
        audio.pause()
      }
    },
  },
  methods: {
    beforeUploadMusic(file) {
      let temp1 = file.name.split('.')
      let temp = temp1[temp1.length - 1]
      if (!['mp3', 'ogg', 'wav'].includes(temp)) {
        this.$message.error('请上传mp3/ogg/wav文件')
        return false
      }
    },
    play(item) {
      this.audioEl = document.getElementById('play-audio')
      this.musicSrc = require('../../../plugins/bg-music/src/' +
        item.name +
        '.mp3')
      this.audioEl.load()
      this.$store.commit('setMusicPlayed', {
        plug: false,
        libs: true,
      })
    },
    use(item) {
      this.$store.commit('setMusicObj', item)
    },
  },
}
</script>

<style lang="scss" scoped>
.audio-bgc {
  width: 260px;
  margin: 10px auto;
}
.audio-bgc audio {
  width: 100%;
}
.audio-item {
  display: flex;
  padding: 5px 3px;
  border-bottom: 1px solid #e4e7ed;
}
.el-animate-title-name {
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 70%;
}
.el-animate-title-type-wrapper {
  display: inline-block;
  width: 164px;
}
.el-animate-title-type {
  display: inline-block;
  vertical-align: middle;
  max-width: 140px;
  height: 24px;
  line-height: 1px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #fafafa;
  border-radius: 60px;
  padding: 4px 16px;
  border: none;
  cursor: pointer;
  margin: 0 20px 0 10px;
  &:hover {
    color: white;
    background: $primary;
  }
}
.el-animate-title-btn {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  color: #666;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 4px;
  background: rgba(37, 165, 137, 0.08);
  margin-left: 6px;
  &:hover {
    color: white;
    background: $primary;
  }
}
</style>
