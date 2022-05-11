import os

serve_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "serve"))

serve = {"__vue_leaflet": serve_path}
scripts = ["__vue_leaflet/vue-leaflet.umd.min.js"]
vue_use = ["VueLeaflet"]
styles = ["__vue_leaflet/vue-leaflet.css"]
