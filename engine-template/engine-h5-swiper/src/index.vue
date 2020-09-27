<template>
  <div class="engine-template-wrapper">
    <!--swiper-->
    <swiper class="swiper-container swi-con" ref="mySwiper" :options="swiperOptions">
      <!-- <div class="swiper-wrapper"> -->
      <swiper-slide class="swiper-slide flat relative hidden" v-for="(page, i) in pageData.pages" :key="i" :style="getCommonStyle(page.commonStyle)">
        <!--页面内容区域-->
        <div class="quark-page-wrapper"
          :style="getCommonStyle({...page.commonStyle, top: pageTop, height: pageData.height, width: pageData.width, position: 'relative'}, scalingRatio)">
          <componentsTemplate v-for="(item, index) in page.elements" :key="index" @handleElementClick="handleElementClick" :element="item"
            :style="getCommonStyle(item.commonStyle, scalingRatio)">
          </componentsTemplate>
        </div>
      </swiper-slide>
      <!-- </div> -->

      <div class="swiper-pagination" slot="pagination"></div>
      <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    </swiper>
  </div>
</template>

<script>
import editorProjectConfig from '@src/pages/editor/DataModel'
import componentsTemplate from '../../components/components-template'
import $config from '@src/config'
import elementEvents from '@src/mixins/elementEvents'
export default {
  name: 'engineH5Swiper',
  components: {
    componentsTemplate,
  },
  props: {
    pageData: {},
  },
  mixins: [elementEvents],
  data() {
    return {
      getCommonStyle: editorProjectConfig.getCommonStyle,
      scalingRatio: 1,
      pageTop: 0,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        direction: 'horizontal',
        effect: 'slide',
      },
    }
  },
  created() {
    // console.log(window._pageData)
    // this.pageData = window._pageData
    // this.scalingRatio = document.body.clientWidth / $config.canvasH5Width
    this.pageTop =
      (document.documentElement.clientHeight -
        this.pageData.height * this.scalingRatio) /
      2
    this.pageTop = Math.max(this.pageTop, 0)
    // this.$nextTick(() => {
    //   console.log('ready')
    //   var mySwiper = new Swiper('.swiper-container', {
    //     autoplay: false, //可选选项，自动滑动
    //   })
    // })
    this.InitSwiper()
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  methods: {
    /**
     *  初始化swiper
     */
    InitSwiper() {
      let obj = this.pageData
      // 设置翻页方式
      if (obj.flipType == 0) {
        this.swiperOptions.direction = 'vertical'
      } else {
        this.swiperOptions.direction = 'horizontal'
        if (obj.flipType == 2) {
          this.swiperOptions.effect = 'fade'
        }
      }
      // 设置页码
      if (obj.slideNumber) {
      }
    },
    /**
     * 按钮点击事件
     * @param eventsData
     */
    async handleElementClick(eventsData, element) {
      for (let i = 0, len = eventsData.length; i < len; i++) {
        if (this['_event_' + eventsData[i].type]) {
          await this['_event_' + eventsData[i].type](
            eventsData[i],
            element,
            this.pageData
          )
        }
      }
    },
  },
}
</script>

<style scoped>
.engine-template-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.relative {
  position: relative;
}

.hidden {
  overflow: hidden;
}
.swi-con {
  width: 100%;
  height: 100%;
}
</style>
