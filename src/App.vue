<template>
  <div id="app">
    <div class="main">
        <div class="nav">城市洪涝灾害预警平台</div>
        <div class="nav_btn">
            <div class="btn_left">
                <a href="">
                    <div class="btn_list listActive">系统首页</div>
                </a>
                <a href="https://github.com/ecomfe/vue-echarts#readme">
                    <div class="btn_list">积水地带</div>
                </a>
                <a href="https://vue-echarts.dev/">
                    <div class="btn_list">应急抢险</div>
                </a>
               <a href="">
                    <div class="btn_list">动态仿真</div>
                </a>
            </div>
            <div class="btn_right">
                <!-- <a href="https://gitee.com/iGaoWei/big-data-view">
                    <div class="btn_list">应急抢险</div>
                </a>
                <a href="https://gitee.com/iGaoWei/big-data-view">
                    <div class="btn_list">动态仿真</div>
                </a> -->
                <!-- <a href="https://gitee.com/iGaoWei/big-data-view">
                    <div class="btn_list">流通销售</div>
                </a>
                <a href="https://gitee.com/iGaoWei/big-data-view">
                    <div class="btn_list">数据中心</div>
                </a> -->
            </div>
        </div>
        <div class="content">
            <div class="bmap-wrapper">
                <el-bmap class="bmap-box" ref="map" :lazy="2000" :map-style-v2="darkStyle" :preserve-drawing-buffer="true" vid="bmapDemo" :min-zoom="1" :max-zoom="22" :tilt="tilt" :heading="heading" :bmap-manager="bmapManager" :center="center" :zoom="zoom" @click="clickMap">
                    <el-bmap-prism  :path="prism.path" :visible="visible" :altitude="prism.altitude" :top-fill-color="prism.topFillColor" :top-fill-opacity="prism.topFillOpacity" :side-fill-color="prism.sideFillColor" :side-fill-opacity="prism.sideFillOpacity" :events="prism.events"></el-bmap-prism>
                </el-bmap>
            </div>
            <div class="centerBox">
                <div class="baseBox centerMainBox1" style="height:65%">
                    <div class="baseBoxLeft left">
                        <div class="boxTitle">气象数据监测</div>
                        <img src="./img/left.png" alt="">
                        <table class="equipment_table env_table">
                            <tr>
                                <td>指标</td>
                                <td>标准值</td>
                                <td>当前值</td>
                                <td>预警</td>
                            </tr>
                            <tr>
                                <td>温度</td>
                                <td>18～20℃</td>
                                <td>9℃</td>
                                <td>正常</td>
                            </tr>
                            <tr>
                                <td>湿度</td>
                                <td>40%～60%</td>
                                <td>52%</td>
                                <td>正常</td>
                            </tr>
                            <tr>
                                <td>风速</td>
                                <td>0m/s~4m/s</td>
                                <td>2m/s</td>
                                <td>正常</td>
                            </tr>
                            <tr>
                                <td>降水</td>
                                <td>2mm~4mm</td>
                                <td>0mm</td>
                                <td style="color:red">偏低</td>
                            </tr>
                        </table>
                        <div style="width:95%;height:50%;margin-left:2.5%" id="wind"></div>
                    </div>

                    <!-- <div class="baseBoxRight right">
                        <ul class="plant" style="width: 60%" >
                            <li>
                                <a class="jumps" href="">
                                    <div>
                                        <span>茶园种植面积(m)</span>
                                        <img src="./img/qqzmj.png" alt="">
                                    </div>
                                    <p class="">350000</p>
                                    <span class="spans3"></span>
                                </a>
                            </li>
                            <li>
                                <a class="jumps" href="">
                                    <div>
                                        <span>产值(亿元)</span>
                                        <img src="./img/ccc2.png" alt="">
                                    </div>
                                    <p class="">180</p>
                                    <span class="spans2" style="background: #499BFF;"></span>
                                </a>
                            </li>
                            <li>
                                <a class="jumps" href="">
                                    <div>
                                        <span>产量(吨)</span>
                                        <img src="./img/ccc.png" alt="">
                                    </div>
                                    <p class="">82000</p>
                                    <span class="spans3" style="background: #F2CE43;"></span>
                                </a>
                            </li>
                            <li>
                                <a class="jumps" href="./teaGarden.html">
                                    <div class="clear plantTop ">
                                        <span class="flexLeft">茶园(个)</span>
                                        <img class="flexright" src="./img/cy.png" alt="">
                                    </div>

                                    <p class=" plantNum1">3207</p>
                                    <span class="spans0"></span>
                                </a>
                            </li>
                            <li>
                                <a class="jumps" href="./Tea-enterprises.html">
                                    <div class="clear plantTop ">
                                        <span class="flexLeft">茶企(个)</span>
                                        <img class="flexright" src="./img/cq.png" alt="">
                                    </div>
                                    <p class=" plantNum1">157</p>
                                    <span class="spans1"></span>
                                </a>
                            </li>
                            <li>
                                <a class="jumps" href="./teaPeasant.html">
                                    <div>
                                        <span>茶农(人)</span>
                                        <img src="./img/cn.png" alt="">
                                    </div>
                                    <p class="">360000</p>
                                    <span class="spans2"></span>
                                </a>
                            </li>

                        </ul>
                    </div> -->
                </div>

                <div class="baseBox centerMainBox2" style="height:30%;">
                    <img src="./img/down.png" alt="">
                    <div class="boxTitle2" style="width:26%">统计数据</div>
                    <div class="csbaseBox1">
                        <ul class="baseDatas">
                            <li class="left ">
                                <a href="https://gitee.com/iGaoWei/big-data-view" style="color: #0efcff">
                                    <div class="borderRight "></div>
                                    <span>积水区信息</span>
                                </a>
                            </li>
                            <li class="left">
                                <a href="https://gitee.com/iGaoWei/big-data-view" style="color: #0efcff">
                                    <div class="borderRight "></div>
                                    <span>积水位置</span>
                                </a>
                            </li>
                            <li class="left">
                                <a href="https://gitee.com/iGaoWei/big-data-view" style="color: #0efcff">
                                    <div class="borderRight "></div>
                                    <span>负责人</span>
                                </a>
                            </li>
                        </ul>

                        <table class="tableDetalis" style="color: #00ddfe">
                            <tr>
                                <td>深度</td>
                                <td>面积</td>
                                <td>等级</td>
                                <td></td>
                                <td>园区</td>
                                <td>具体位置</td>
                                <td>姓名</td>
                                <td>联系方式</td>

                            </tr>
                            <tr>
                                <td>10cm</td>
                                <td>10cm</td>
                                <td>XXX</td>
                                <td></td>
                                <td>荷园</td>
                                <td>商业街100m</td>
                                <td>刘新武</td>
                                <td>15654</td>

                            </tr>
                            <tr>
                                <td>20cm</td>
                                <td>企业</td>
                                <td>380m</td>
                                <td>XXX</td>
                                <td>荷园</td>
                                <td>6200m</td>
                                <td>张方</td>
                                <td>12656</td>

                            </tr>
                            <tr>
                                <td>33cm</td>
                                <td>合作社</td>
                                <td>510m</td>
                                <td>XXX</td>
                                <td>荷园</td>
                                <td>5800m</td>
                                <td>李小维</td>
                                <td>12656</td>

                            </tr>
                            <tr>
                                <td>40cm</td>
                                <td>个人</td>
                                <td>17m</td>
                                <td>XXX</td>
                                <td>荷园</td>
                                <td>30000m</td>
                                <td>王骁骁</td>
                                <td>12656</td>
                                <td>111</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
            <div class="leftBox right" style="width:22%;">
                <div class="baseBox baseBox1" style="margin-bottom:15px;height:40%">
                    <img src="./img/right.png" alt="">
                    <div class="csbaseBox1">
                        <div class="boxTitle">视频监控设备</div>
                        <ul class="boxLis">
                            <li class="left active">积水区监控</li>
                            <li class="left">周边监控</li>
                            <li class="left">仿真</li>
                        </ul>
                        <div class="content1">
                            <ul>
                                <li style="display: block;" class="contList">
                                    <!-- 四个角描边 stat -->
                                    <div class="leftTopLine1"></div>
                                    <div class="leftTopLine2"></div>
                                    <div class="rightTopLine1"></div>
                                    <div class="rightTopLine2"></div>
                                    <div class="leftBottomLine1"></div>
                                    <div class="leftBottomLine2"></div>
                                    <div class="rightBottomLine1"></div>
                                    <div class="rightBottomLine2"></div>

                                    <div class="boxVideo">
                                        <video class="video-js vjs-big-play-centered" data-setup='{}' controls>
                                            <source src="https://www.bilibili.com/video/BV1H94y177H8/" type="application/x-mpegURL">
                                        </video>
                                    </div>
                                </li>
                                <li class="contList">
                                    <!-- 四个角描边 stat -->
                                    <div class="leftTopLine1"></div>
                                    <div class="leftTopLine2"></div>
                                    <div class="rightTopLine1"></div>
                                    <div class="rightTopLine2"></div>
                                    <div class="leftBottomLine1"></div>
                                    <div class="leftBottomLine2"></div>
                                    <div class="rightBottomLine1"></div>
                                    <div class="rightBottomLine2"></div>

                                    <div class="boxVideo">
                                        <video class="video-js vjs-big-play-centered" data-setup='{}' controls>
                                            <source src="http://hls01open.ys7.com/openlive/cf40f99cc9cb4a23bd52e0b2119b534c.m3u8" type="application/x-mpegURL">
                                        </video>
                                    </div>
                                </li>
                                <li class="contList">
                                    <!-- 四个角描边 stat -->
                                    <div class="leftTopLine1"></div>
                                    <div class="leftTopLine2"></div>
                                    <div class="rightTopLine1"></div>
                                    <div class="rightTopLine2"></div>
                                    <div class="leftBottomLine1"></div>
                                    <div class="leftBottomLine2"></div>
                                    <div class="rightBottomLine1"></div>
                                    <div class="rightBottomLine2"></div>

                                    <div class="boxVideo">
                                        <video
                                            src="#"
                                            controls="controls">
                                            your browser does not support the video tag
                                        </video>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="baseBox baseBox2" style="margin-bottom:15px;height:29.5%">
                    <img src="./img/right2.png" alt="">
                    <!-- 四个角描边 end -->
                    <div class="boxTitle2">热度分析</div>
                    <div class="boxRader" id="Progress"></div>
                </div>
                <div class="baseBox baseBox3" style="height:28.9%">
                    <img src="./img/right3.png" alt="">
                    <!-- 四个角描边 end -->
                    <div class="boxTitle2">缓冲区分析</div>
                    <div class="boxRader" id="mains"></div>
                </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { VueBMap } from 'vue-bmap-gl';
import darkStyle from './js/mapStyles';
export default {
  data: function() {
      return {
        VueBMap,
        zoom: 18,
        center: [113.538912,34.820759],
        tilt: 60,
        heading: 0,
        darkStyle,
        timer: null,
        visible: false,
        //覆盖物图层
        prism: {
          path: [[113.538912,34.820759], [113.538912,34.8400], [113.538700,34.8400],[113.538700,34.820759]],
          altitude: 100,
          topFillColor: '#5679ea',
          topFillOpacity: 1,
          sideFillColor: '#5679ea',
          sideFillOpacity: 1,
        }
      };
    },
  components: {

    },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>
@import url('./css/circulationSales.css');
@import url('./css/index.css');
@import url('./css/land_flow.css');
@import url('./css/new_index.css');
@import url('./css/production.css');
@import url('./css/production_testing.css');
@import url('./css/reset.css');
@import url('./css/css.css');
.bmap-wrapper {
    position: relative;
    width: 1500px;
    height: 809px;
}
.map,
.centerBox{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.leftBox {
  position: absolute;
  top: 0;
  right: 0;
  width: 22%;
}

.centerBox,
.leftBox {
  z-index: 2;/* 设置 centerBox 和 leftBox 的 z-index，确保在地图上方 */
}




</style>