<template>
  <div class="bmap-page-container">
    <el-bmap ref="map" :lazy="2000" :map-style-v2="darkStyle" :preserve-drawing-buffer="true" vid="bmapDemo" :min-zoom="10" :max-zoom="22" :tilt="tilt" :heading="heading" :bmap-manager="bmapManager" :center="center" :zoom="zoom" @click="clickMap" class="bmap-demo">
    </el-bmap>

    <div class="toolbar">
      <button @click="getMap()">get map</button>
    </div>
  </div>
</template>

<style>
  .bmap-demo {
    height: 300px;
  }
</style>

<script>
  // NPM 方式
  //  import { BMapManager } from 'vue-bmap-gl';
  // CDN 方式
  let bmapManager = new VueBMap.BMapManager();

  let darkStyle = {
    styleJson: [{
            featureType: 'background',
            elementType: 'geometry',
            stylers: {
                color: '#070c17ff'
            }
        }, {
            featureType: 'poilabel',
            elementType: 'labels.icon',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'road',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: {
                color: '#151e25ff'
            }
        }, {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: {
                color: '#ffffff00'
            }
        }, {
            featureType: 'highway',
            elementType: 'geometry.fill',
            stylers: {
                color: '#27303bff'
            }
        }, {
            featureType: 'highway',
            elementType: 'geometry.stroke',
            stylers: {
                color: '#ffffff00'
            }
        }, {
            featureType: 'nationalway',
            elementType: 'geometry.fill',
            stylers: {
                color: '#27303bff'
            }
        }, {
            featureType: 'nationalway',
            elementType: 'geometry.stroke',
            stylers: {
                color: '#ffffff00'
            }
        }, {
            featureType: 'provincialway',
            elementType: 'geometry.fill',
            stylers: {
                color: '#27303bff'
            }
        }, {
            featureType: 'provincialway',
            elementType: 'geometry.stroke',
            stylers: {
                color: '#ffffff00'
            }
        }, {
            featureType: 'railway',
            elementType: 'geometry',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'highwaysign',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'highwaysign',
            elementType: 'labels.icon',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'nationalwaysign',
            elementType: 'labels.icon',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'nationalwaysign',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'provincialwaysign',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'provincialwaysign',
            elementType: 'labels.icon',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'tertiarywaysign',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'tertiarywaysign',
            elementType: 'labels.icon',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'subwaylabel',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'subwaylabel',
            elementType: 'labels.icon',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'poilabel',
            elementType: 'labels.text.fill',
            stylers: {
                color: '#80868dff'
            }
        }, {
            featureType: 'poilabel',
            elementType: 'labels.text.stroke',
            stylers: {
                color: '#ffffff00'
            }
        }, {
            featureType: 'districtlabel',
            elementType: 'labels.text.fill',
            stylers: {
                color: '#71767aff'
            }
        }, {
            featureType: 'districtlabel',
            elementType: 'labels.text.stroke',
            stylers: {
                color: '#ffffff00'
            }
        }, {
            featureType: 'poilabel',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'airportlabel',
            elementType: 'labels',
            stylers: {
                visibility: 'on'
            }
        }, {
            featureType: 'airportlabel',
            elementType: 'labels.icon',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'airportlabel',
            elementType: 'labels.text.fill',
            stylers: {
                color: '#80868dff'
            }
        }, {
            featureType: 'airportlabel',
            elementType: 'labels.text.stroke',
            stylers: {
                color: '#ffffff00'
            }
        }, {
            featureType: 'manmade',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'manmade',
            elementType: 'geometry',
            stylers: {
                color: '#070c17ff'
            }
        }, {
            featureType: 'water',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'water',
            elementType: 'geometry',
            stylers: {
                color: '#141d27ff'
            }
        }, {
            featureType: 'green',
            elementType: 'geometry',
            stylers: {
                color: '#122228ff',
                visibility: 'off'
            }
        }, {
            featureType: 'subway',
            elementType: 'geometry',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'highway',
            elementType: 'labels',
            stylers: {
                visibility: 'on'
            }
        }, {
            featureType: 'highway',
            elementType: 'labels.text.stroke',
            stylers: {
                color: '#ffffff00'
            }
        }, {
            featureType: 'highway',
            elementType: 'labels.text.fill',
            stylers: {
                color: '#5f6468ff'
            }
        }, {
            featureType: 'town',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'village',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'highway',
            elementType: 'geometry',
            stylers: {
                weight: 3
            }
        }, {
            featureType: 'cityhighway',
            elementType: 'geometry.fill',
            stylers: {
                color: '#27303bff'
            }
        }, {
            featureType: 'arterial',
            elementType: 'geometry.fill',
            stylers: {
                color: '#27303bff'
            }
        }, {
            featureType: 'arterial',
            elementType: 'geometry.stroke',
            stylers: {
                color: '#ffffff00'
            }
        }, {
            featureType: 'cityhighway',
            elementType: 'geometry.stroke',
            stylers: {
                color: '#ffffff00'
            }
        }]
    }

  module.exports = {
    data: function() {
      return {
        bmapManager,
        zoom: 16,
        center: [121.59996, 31.197646],
        tilt: 60,
        heading: 0,
        darkStyle,
        timer: null,
        events: {
          init: (o) => {
            console.log(o.getCenter())
            console.log(this.$refs.map.$$getInstance())
            this.panMap();
          },
          'moveend': () => {
          },
          'zoomchange': () => {
          },
          'click': (e) => {
            alert('map clicked');
          },
          tilesloaded: (e) => {
            console.log('tilesloaded')
          }
        },
      };
    },
    mounted() {
      let change = () =>{
        clearTimeout(this.timer);
        window.removeEventListener('hashchange',change)
      }
      window.addEventListener('hashchange',change)
    },
    methods: {
      getMap() {
        // bmap vue component
        console.log(bmapManager._componentMap);
        // 百度 map instance
        console.log(bmapManager._map);
      },
      panMap() {
          this.timer = setTimeout( () => {
              this.center = [(this.center[0]+0.0001), this.center[1]];
              this.panMap();
          },1000);
      },
      clickMap(e) {
        alert('map clicked');
        console.log('click map: ', e)
      }
    }
  };
</script>