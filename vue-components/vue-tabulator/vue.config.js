const path = require('path');
const MODULES = "../../python/src/pywebvue/modules"
const Tabulator = "Tabulator/serve"

module.exports = {
  outputDir: path.resolve(__dirname, MODULES, Tabulator),
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  transpileDependencies: [],
};
