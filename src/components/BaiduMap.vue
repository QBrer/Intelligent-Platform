<template>
    <div class="bmap-wrapper">
        <el-bmap class="bmap-box" ref="map" :lazy="2000" :map-style-v2="darkStyle" :preserve-drawing-buffer="true" vid="bmapDemo" :min-zoom="1" :max-zoom="22" :tilt="tilt" :heading="heading" :bmap-manager="bmapManager" :center="center" :zoom="zoom" @click="clickMap">
            <el-bmap-prism  :path="prism.path" :visible="visible" :altitude="prism.altitude" :top-fill-color="prism.topFillColor" :top-fill-opacity="prism.topFillOpacity" :side-fill-color="prism.sideFillColor" :side-fill-opacity="prism.sideFillOpacity" :events="prism.events"></el-bmap-prism>
        </el-bmap>
    </div>
</template>

<script>
import { VueBMap } from 'vue-bmap-gl';
import darkStyle from '../js/mapStyles';
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
}
</script>

<style scoped>

</style>
