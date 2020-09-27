<template>
  <el-form-item label="资源地址：">
    <el-input type="textarea" :rows="3" placeholder="请输入url地址" v-model="tempValue">
    </el-input>
  </el-form-item>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'attr-qk-musicSrc',
  props: {
    musicSrc: String,
  },
  data() {
    return {
      tempValue: '',
    }
  },
  computed: {
    ...mapGetters(['getMusicObj']),
  },
  mounted() {
    this.tempValue = this.musicSrc
  },
  watch: {
    musicSrc(val) {
      this.tempValue = val
    },
    tempValue() {
      this.$emit('update:musicSrc', this.tempValue)
    },
    getMusicObj(val, oldVal) {
      console.log(val, oldVal)
      if (val && oldVal) {
        if (val.name === oldVal.name) {
          return
        } else {
          this.$emit(
            'update:musicSrc',
            require('@src/plugins/bg-music/src/' + val.name + '.mp3')
          )
        }
      } else if (val) {
        this.$emit(
          'update:musicSrc',
          require('@src/plugins/bg-music/src/' + val.name + '.mp3')
        )
      }
    },
  },
}
</script>

<style scoped>
</style>
