<template>
  <div>
    <!-- <x-input type="text" id="suggestId" name="address_detail" placeholder="如门牌号等" v-model="address_detail" class="input_style"></x-input> -->
    <div id="allmap"></div>
  </div>
</template>
<!-- <script src='http://api.map.baidu.com/api?v=2.0&ak=Ua9wlu6LbqmNKVbMEGtkgSxvljqZC5fc&callback=init'></script> -->

<script>
  import {MP} from 'common/map.js'
  import {XInput} from 'vux'

  export default{
    components:{
      XInput
    },

    data(){
      return{
         address_detail: null, //详细地址
         userlocation:{lng:"",lat:""},          
       }
     },
     mounted(){
      this.$nextTick(function () {
        MP("Ua9wlu6LbqmNKVbMEGtkgSxvljqZC5fc").then( BMap => {
          var th = this
            var map = new BMap.Map("allmap");            // 创建Map实例
            var point = new BMap.Point(116.404, 39.915); // 创建点坐标
            map.centerAndZoom(point,10);
            map.enableScrollWheelZoom(true);
            map.setCurrentCity("西安");   
            // 添加地图类型控件
            map.addControl(new BMap.MapTypeControl())
            
            //添加工具条、比例尺控件
            map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}));
            map.addControl(new BMap.NavigationControl());
            map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));

            //  添加添加城市列表控件
            map.addControl(new BMap.CityListControl({
                anchor:BMAP_ANCHOR_BOTTOM_RIGHT,
                offset:new BMap.Size(130,23)
                // 切换城市之间事件
                // onChangeBefore: function(){
                //    alert('before');
                // },
                // 切换城市之后事件
                // onChangeAfter:function(){
                //   alert('after');
                // }
            }));
            //添加折线
            var pointGZ = new BMap.Point(116.404, 39.915);
            var pointHK = new BMap.Point(116.504, 39.515);
            setTimeout(function(){
                var polyline = new BMap.Polyline([pointGZ,pointHK],{strokeColor:"blue",strokeWeight:5,strokeOpacity:0.5});
                map.addOverlay(polyline);
            },6000);
            // 添加新图标
             //定义新图标
            var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif",new BMap.Size(300,157));
            //创建标注
            var marker = new BMap.Marker(pointHK,{icon:myIcon});
            var marker1 = new BMap.Marker(pointGZ,{icon:myIcon});
            //将标注放大地图上
            map.addOverlay(marker);
            map.addOverlay(marker1);
            //文字提示
            var label = new BMap.Label('label1',{offset:new BMap.Size(140,10)});
            marker1.setLabel(label); 
            //添加新图标的监听事件
            marker1.addEventListener('click',function(){
                var p = marker1.getPosition();//获取位置
                alert("点击的位置是：" + p.lng + ',' + p.lat);
            })

         /*   var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
              {"input" : "suggestId"
              ,"location" : map
            })*/


      /*      var myValue
            ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
              var _value = e.item.value;
              myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
              this.address_detail = myValue
              setPlace();
            });

            function setPlace(){
              map.clearOverlays();    //清除地图上所有覆盖物
              function myFun(){
                th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                map.centerAndZoom(th.userlocation, 18);
                map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注
              }
              var local = new BMap.LocalSearch(map, { //智能搜索
                onSearchComplete: myFun
              });
              local.search(myValue);
            }*/
          })
      })
    },
    methods:{

    }
  }
</script>
<style scoped>
  html {
    height: 100%;
    overflow:hidden;
  }

  body {
    height: 100%;
    margin: 0px;
    padding: 0px;
    font-size: 12px;
    background-color: #fff;
    color: #4c4c4c;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  #allmap{
    height: 800px;
    width: 100%;
    position: relative;
  }
</style>