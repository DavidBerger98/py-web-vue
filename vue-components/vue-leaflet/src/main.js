import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  install(Vue) {
    Vue.component('l-map', LMap);
    Vue.component('l-tile-layer', LTileLayer);
    Vue.component('l-marker', LMarker);
  },
};
