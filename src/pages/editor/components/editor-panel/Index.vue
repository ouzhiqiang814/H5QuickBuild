<template>
  <div class="editor-pane" @click="handleClickCanvas" @keyup.esc="handleKeyup">
    <el-scrollbar class="editor-pane-inner">
      <div class="page-wrapper-mask"></div>
      <el-scrollbar class="editor-main" :style="{transform: 'scale('+scale+')', width: projectData.width + 'px', height: projectData.height + 'px'}">
        <div class="page-preview-wrapper" ref="canvas-panel" id="canvas-panel" :style="{...getCommonStyle(activePage.commonStyle), height: projectData.height + 'px'}">
          <!--页面组件列表展示-->
          <edit-shape v-for="item in activePage.elements" :key="item.uuid" :uuid="item.uuid" :defaultStyle="item.commonStyle" :style="getCommonStyle(item.commonStyle)"
            @handleElementClick="handleElementClick(item.uuid)" @resize="handleElementResize" :active="item.uuid === activeElementUUID">
            <component :is="item.elName" class="element-on-edit-pane" v-bind="{...item.propsValue, value: item.value}" />
          </edit-shape>
        </div>

      </el-scrollbar>
      <div class="page-wrapper-menu-operation menu-item-on-edit-panel" :style="{transform: 'scale('+(1/scale)+')'}" :class="{active: activeElementUUID}">
        <el-tooltip v-for="(item, index) in menuOptions" :key="index" effect="dark" :content="item.title" placement="right">
          <div class="menu-item menu-item-on-edit-panel" @click="handleElementCommand(item.value)">
            <i class="menu-item-on-edit-panel" :class="[item.icon]"></i>
          </div>
        </el-tooltip>
      </div>
      <div class="page-wrapper-tabs">
        <a-tabs :active-key="activeElementUUID" tab-position="right" style="min-height:100%;" @tabClick="fnHandelElementAct">
          <a-tab-pane v-for="(item, i) in activePage.elements" :key="item.uuid" :uuid="item.uuid" :tab="fnTrans(item, i)"></a-tab-pane>
        </a-tabs>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import runAnimations from '@src/common/js/runAnimations'
import Bus from '@src/eventBus'
import { _qk_register_components_object } from '@src/plugins/index'
import editShape from '@/components/edit-shape'
import editorProjectConfig from '@src/pages/editor/DataModel'
import { mapState, mapGetters } from 'vuex'
import html2canvas from 'html2canvas'

// todo 测试用
window._qk_register_components_object = _qk_register_components_object
export default {
  props: {
    // canvas画板缩放
    scale: {
      type: Number,
      default: 1,
    },
  },
  components: {
    // 批量注册qk组件
    ..._qk_register_components_object,
    // 画板组件
    [editShape.name]: editShape,
  },
  data() {
    return {
      getCommonStyle: editorProjectConfig.getCommonStyle,
      menuOptions: [
        {
          title: '复制',
          icon: 'iconfont iconfuzhi',
          value: 'copy',
        },
        {
          title: '删除',
          icon: 'iconfont iconshanchu',
          value: 'delete',
        },
        {
          title: '字体放大',
          icon: 'iconfont iconzitifangda',
          value: 'fontA+',
        },
        {
          title: '字体缩小',
          icon: 'iconfont iconzitisuoxiao',
          value: 'fontA-',
        },
        {
          title: '字体加粗',
          icon: 'iconfont iconzitijiacu',
          value: 'fontB',
        },
        {
          title: '图层上移',
          icon: 'iconfont iconziyuan1',
          value: 'layerUp',
        },
        {
          title: '图层下移',
          icon: 'iconfont iconxiayiyiceng',
          value: 'layerDown',
        },
        {
          title: '图层置顶',
          icon: 'iconfont iconcontrol-top',
          value: 'layerTop',
        },
        {
          title: '图层置底',
          icon: 'iconfont iconcontrol-bottom',
          value: 'layerBottom',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      projectData: (state) => state.editor.projectData,
      activePageUUID: (state) => state.editor.activePageUUID,
      activeElementUUID: (state) => state.editor.activeElementUUID,
    }),
    ...mapGetters([
      'currentPageIndex',
      'activeElementIndex',
      'activeElement',
      'activePage',
    ]),
  },
  mounted() {
    // 组件动画播放
    this.pageAnimatePlaying = false
    Bus.$on('RUN_PAGE_ANIMATIONS', (animations) => {
      // 正在执行的动画不允许插入新动画
      if (this.pageAnimatePlaying) return
      const el = document.querySelector('#canvas-panel')
      let cssText = el.style.cssText
      this.pageAnimatePlaying = true
      runAnimations(el, animations, true, () => {
        el.style.cssText = cssText
        this.pageAnimatePlaying = false
      })
    })
  },
  methods: {
    /**
     * 元素被点击
     * @param uuid
     */
    handleElementClick(uuid) {
      this.$store.dispatch('setActiveElementUUID', uuid)
    },
    /**
     * 移动改变元素大小定位
     * @param pos 当pos有值表示移动中需要实时同步样式变化，pos为undefind时则表示移动结束，记一次历史纪录
     * 鼠标移动完成时才记入历史纪录
     */
    handleElementResize(pos) {
      if (!pos) {
        this.$store.dispatch('addHistoryCache')
        return
      }
      this.projectData.pages[this.currentPageIndex].elements[
        this.activeElementIndex
      ].commonStyle.left = pos.left
      // 更新元素commonStyle
      this.projectData.pages[this.currentPageIndex].elements[
        this.activeElementIndex
      ].commonStyle = {
        ...pos,
      }
    },
    handleClickCanvas(e) {
      if (
        !e.target.classList.contains('element-on-edit-pane') &&
        !e.target.classList.contains('menu-item-on-edit-panel') &&
        !e.target.classList.contains('ant-tabs-tab')
      ) {
        this.$store.dispatch('setActiveElementUUID', '')
      }
    },
    /**
     * 对元素进行操作命令
     */
    handleElementCommand(command) {
      this.$store.dispatch('elementCommand', command)
    },
    /**
     * 监听键盘事件
     * @param e
     */
    handleKeyup(e) {
      console.log(1111, e)
    },
    /**
     * 提供截屏作为项目主图
     */
    screenshots() {
      const el = document.querySelector('#canvas-panel')
      html2canvas(el, {
        width: 375,
        height: 667,
        proxy: '/htmltocanvas/corsproxy', // 设置跨域接口
      }).then((canvas) => {
        let url = canvas.toDataURL('image/jpeg')
        this.$store.commit('updateCoverImage', url)
      })
    },

    /**
     * 点击侧边选择图形
     */
    fnHandelElementAct(uuid) {
      console.log(uuid)
      this.$store.dispatch('setActiveElementUUID', uuid)
    },
    /**
     * 名称转换
     */
    fnTrans(item, i) {
      let str = ''
      let paus = [
        {
          elName: 'qk-text',
          title: '文字',
        },
        {
          elName: 'qk-image',
          title: '图片',
        },
        {
          elName: 'qk-button',
          title: '按钮',
        },
        {
          elName: 'qk-rectangle-border',
          title: '矩形边框',
        },
        {
          elName: 'qk-rectangle-border',
          title: '分割线',
        },
        {
          elName: 'qk-image-carousel',
          title: '图片轮播',
        },
        {
          elName: 'qk-iframe',
          title: '内嵌iframe',
        },
        {
          elName: 'qk-bg-music',
          title: '音乐',
        },
      ]
      paus.forEach((e) => {
        if (item.elName == e.elName) {
          str = i + 1 + e.title
        }
      })
      return str
    },
  },
}
</script>

<style lang="scss" scoped>
.editor-pane {
  height: 100%;
  width: 100%;
  border: 1px solid #f5f5f5;
  border-width: 0 1px;
  background-image: linear-gradient(
      45deg,
      #f5f5f5 25%,
      transparent 0,
      transparent 75%,
      #f5f5f5 0
    ),
    linear-gradient(
      45deg,
      #f5f5f5 25%,
      transparent 0,
      transparent 75%,
      #f5f5f5 0
    );
  background-position: 0 0, 13px 13px;
  background-size: 26px 26px;
  display: flex;
  justify-content: center;
}

.editor-pane-inner {
  position: relative;
  height: 100%;
  width: 100%;
  // padding: 20px;
  /deep/.el-scrollbar__wrap {
    width: calc(100% + 17px);
    height: calc(100% + 17px);
  }
}

.editor-main {
  border-radius: 3px;
  box-shadow: 0 3px 10px #dcdcdc;
  margin: 25px auto;
  position: relative;
  background: white;
  transform-origin: center top;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlQTFRF9fX18PDwAAAABQ8/pgAAAAN0Uk5T/yIA41y2EwAAABhJREFUeJxjYIAC0VAQcGCQWgUCDUONBgDH8Fwzu33LswAAAABJRU5ErkJggg==');
  // max-height: 644px;
}

.page-preview-wrapper {
  height: 100%;
  position: relative;
}

.page-wrapper-mask {
  @extend .editor-main;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  outline: rgba(236, 238, 240, 0.77) solid 10000px;
}

.element-on-edit-pane {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.page-wrapper-menu-operation {
  position: absolute;
  right: -80px;
  top: 5%;
  width: 0;
  background: white;
  color: #333;
  text-align: center;
  z-index: 1002;
  border-radius: 4px;
  display: none;
  transition: all 0.28s;
  opacity: 0;
  transform-origin: center top;
  .menu-item {
    padding: 10px;
    cursor: pointer;
    &.i {
      font-size: 24px;
      line-height: 30px;
    }
    &:hover {
      background: rgba(37, 165, 137, 0.09);
      color: $primary;
      &.i {
        font-weight: bold;
        font-size: 26px;
      }
    }
  }
  &.active {
    display: block;
    width: 60px;
    opacity: 1;
    position: absolute;
    left: 10px;
  }
}
.page-wrapper-tabs {
  position: absolute;
  right: 10px;
  top: 0;
  height: 100%;
  z-index: 1002;
  overflow: hidden;
}
</style>
<style >
.page-wrapper-tabs .ant-tabs .ant-tabs-left-bar .ant-tabs-tab,
.ant-tabs .ant-tabs-right-bar .ant-tabs-tab {
  padding: 10px;
}
</style>
