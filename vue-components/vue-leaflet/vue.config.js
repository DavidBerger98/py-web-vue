const path = require('path');
const MODULES = "../../python/src/pywebvue/modules"
const Leaflet = "Leaflet/serve"

module.exports = {
  outputDir: path.resolve(__dirname, MODULES, Leaflet),
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  transpileDependencies: ['vega-lite', 'vega'],
};
