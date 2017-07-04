<template>
  <div class="timeline-demo">
    <timeline :color="color">
      <timeline-item>
        <h4 class="recent">【广东】 广州市 已发出</h4>
        <p class="recent">2016-04-17 12:00:00</p>
      </timeline-item>
      <timeline-item>
        <h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
        <p>2016-04-16 10:23:00</p>
      </timeline-item>
      <timeline-item>
        <h4> 商家正在通知快递公司揽件</h4>
        <p>2016-04-15 9:00:00</p>
      </timeline-item>
    </timeline>
  </div>
</template>

<script>
import Timeline from 'vux-components/timeline/timeline'
import TimelineItem from 'vux-components/timeline/timeline-item'

export default {
  data () {
    return {
      color: '#04BE02'
    } 
  },

  components: {
    Timeline,
    TimelineItem
  }
}
</script>

<style>
  /*@import 'vux/dist/vux.css';*/
</style>