<template>
  <div class="components-preview">
    <div class="setting-bg"></div>
    <div class="left-panel">
      <div class="iframe-wrapper" :style="{width: $config.canvasH5Width + 'px', height: $config.canvasH5Height + 'px'}">
        <!-- <iframe :src="$config.baseURL + '/page/view/' + pageId" frameborder="0" style="background-color:transparent;width: 100%; height: 100%;"></iframe> -->
        <engine-h5-swiper v-if="pageMode == 'h5'" :pageData="pageData" />
        <el-scrollbar :style="{width: $config.canvasH5Width + 'px', height: $config.canvasH5Height + 'px'}">
          <engine-h5-long v-if="pageMode == 'longPage'" :pageData="pageData" />
        </el-scrollbar>
      </div>
    </div>
    <div class="right-panel">
      <slot></slot>
    </div>
    <span class="cloase-btn" @click="closePreview">
      <i class="el-icon-close"></i>
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'preview-page',
  props: {
    pageId: String,
  },
  data() {
    return {
      pageData: {
        name: '',
        title: '未命名场景',
        description: '我用可视化编辑器做了一个超酷炫的H5，快来看看吧。',
        coverImage: '',
        auther: '',
        script: '',
        width: 375,
        height: 644,
        pages: [
          {
            uuid: '14a84d1e-410f-4f3e-9ae5-e4b31577550d',
            name: '',
            elements: [
              {
                uuid: 'bb0b0a41-aed2-4569-ac96-18227a893edf',
                elName: 'qk-text',
                animations: [],
                commonStyle: {
                  position: 'absolute',
                  width: 375,
                  height: 40,
                  top: 200,
                  left: 0,
                  rotate: 0,
                  paddingTop: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  marginTop: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  borderWidth: 0,
                  borderColor: '',
                  borderStyle: 'solid',
                  borderRadius: 0,
                  boxShadow: '',
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: 1.4,
                  letterSpacing: 0,
                  textAlign: 'center',
                  color: '#000000',
                  backgroundColor: '',
                  backgroundImage: '',
                  backgroundSize: 'cover',
                  opacity: 1,
                  zIndex: 1,
                },
                events: [],
                propsValue: { text: '123123123123123123123' },
                value: '__vue_devtool_undefined__',
                valueType: 'String',
                isForm: false,
              },
            ],
            commonStyle: {
              backgroundColor: 'rgba(9, 27, 224, 1)',
              backgroundImage: '',
              backgroundSize: 'cover',
            },
            config: {},
          },
          {
            uuid: 'ec4837d6-41fb-4260-8ab4-fcf539088bcc',
            name: '',
            elements: [
              {
                uuid: '61365e49-b1b5-4ada-9520-82af431dbd95',
                elName: 'qk-image',
                animations: [],
                commonStyle: {
                  position: 'absolute',
                  width: 375,
                  height: 200,
                  top: 200,
                  left: 0,
                  rotate: 0,
                  paddingTop: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  marginTop: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  borderWidth: 0,
                  borderColor: '',
                  borderStyle: 'solid',
                  borderRadius: 0,
                  boxShadow: '',
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: 1.4,
                  letterSpacing: 0,
                  textAlign: 'center',
                  color: '#000000',
                  backgroundColor: '',
                  backgroundImage: '',
                  backgroundSize: 'cover',
                  opacity: 1,
                  zIndex: 1,
                },
                events: [],
                propsValue: {
                  imageSrc:
                    'http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg',
                },
                value: '__vue_devtool_undefined__',
                valueType: 'String',
                isForm: false,
              },
            ],
            commonStyle: {
              backgroundColor: '',
              backgroundImage: '',
              backgroundSize: 'cover',
            },
            config: {},
          },
          {
            uuid: 'deb41192-0eb5-48d4-945b-ba1f79937994',
            name: '',
            elements: [],
            commonStyle: {
              backgroundColor: '',
              backgroundImage:
                'http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg',
              backgroundSize: 'cover',
            },
            config: {},
          },
          {
            uuid: '6b4c2a70-f620-4a88-bd98-c9e166e5f634',
            name: '',
            elements: [
              {
                uuid: '9d18c7fc-4f5e-4a09-b152-dfe92830ba35',
                elName: 'qk-text',
                animations: [],
                commonStyle: {
                  position: 'absolute',
                  width: 375,
                  height: 40,
                  top: 200,
                  left: 0,
                  rotate: 0,
                  paddingTop: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  marginTop: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  borderWidth: 0,
                  borderColor: '',
                  borderStyle: 'solid',
                  borderRadius: 0,
                  boxShadow: '',
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: 1.4,
                  letterSpacing: 0,
                  textAlign: 'center',
                  color: '#000000',
                  backgroundColor: '',
                  backgroundImage: '',
                  backgroundSize: 'cover',
                  opacity: 1,
                  zIndex: 1,
                },
                events: [],
                propsValue: { text: '这是一段文字' },
                value: '__vue_devtool_undefined__',
                valueType: 'String',
                isForm: false,
              },
              {
                uuid: 'ef954cb6-6f9a-4430-ad19-a3212e83fd90',
                elName: 'qk-image-carousel',
                animations: [],
                commonStyle: {
                  position: 'absolute',
                  width: 375,
                  height: 210,
                  top: 297,
                  left: -4,
                  rotate: 0,
                  paddingTop: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  marginTop: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  borderWidth: 0,
                  borderColor: '',
                  borderStyle: 'solid',
                  borderRadius: 0,
                  boxShadow: '',
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: 1.4,
                  letterSpacing: 0,
                  textAlign: 'center',
                  color: '#000000',
                  backgroundColor: '',
                  backgroundImage: '',
                  backgroundSize: 'cover',
                  opacity: 1,
                  zIndex: 2,
                },
                events: [],
                propsValue: {
                  imageSrcList: [
                    'http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg',
                    'http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg',
                    'http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg',
                  ],
                  interval: 2500,
                },
                value: '__vue_devtool_undefined__',
                valueType: 'String',
                isForm: false,
              },
            ],
            commonStyle: {
              backgroundColor: 'rgba(212, 18, 222, 1)',
              backgroundImage: '',
              backgroundSize: 'cover',
            },
            config: {},
          },
        ],
        shareConfig: {
          shareWx: false,
          coverImage: '',
          title: '这是#分享者#的大力推荐',
          description: '这是#分享者#的大力推荐',
        },
        pageMode: 'h5',
        flipType: 0,
        slideNumber: false,
        add_time: 0,
        up_time: 0,
        status: 1,
        isPublish: false,
        isTemplate: false,
      },
    }
  },
  computed: {
    ...mapGetters(['pageMode']),
  },
  created() {},
  methods: {
    closePreview() {
      this.$emit('closePreview', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.components-preview-inner {
  width: 100%;
}

.setting-bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1042;
}
.left-panel {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 640px;
  z-index: 1050;
  overflow: hidden;
}
.right-panel {
  position: fixed;
  width: 640px;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
  background-color: #fff;
  overflow-y: auto;
  color: #333;
}
.iframe-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -185px;
  margin-top: -334px;
  background: white;
}
.cloase-btn {
  position: fixed;
  top: 8px;
  right: 20px;
  font-size: 28px;
  color: #7f8593;
  -webkit-transition: all 0.28s;
  transition: all 0.28s;
  z-index: 1060;
  cursor: pointer;
  &:hover {
    color: $primary;
  }
}
</style>
<style>
.iframe-wrapper .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
