<template>
  <div>
    <div id="cesiumContainer" />
  </div>
</template>

<script>
import Cesium from 'cesium/Cesium'
import 'cesium/Widgets/widgets.css'

export default {
    name: 'CesiumViewer',
    data() {
        return {
            _viewer: undefined
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            console.log('init cesium!')
            this._viewer = new Cesium.Viewer('cesiumContainer'); 
        }
    }
}
</script>

<style scoped>
#cesiumContainer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
