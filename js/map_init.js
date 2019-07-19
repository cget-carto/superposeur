let mymap;

function initMap() {
  var basemap_layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19});
  // FOND
  var labels_layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  })
  // bloquer le défilement infini de la carte
  let soutWest = L.latLng(53, -20);
  let northEast =L.latLng(40, 20);
  let bounds = L.latLngBounds(soutWest, northEast);
  mymap = L.map('mapid', {
    maxBounds: bounds,
    maxZoom: 11,
    minZoom: 6,
    zoomSnap: 0.25,
    layers:[basemap_layer]
  }).setView([46.5, -1.8], 6,{ animation: true });
  mymap.zoomControl.setPosition('topright');

  // mymap.createPane('parcelPane');

  // ECHELLE
  L.control.scale({position: 'bottomright'}).addTo(mymap);
  // setInterval(function(){
  //     mymap.setView([0, 0]);
  //     setTimeout(function(){
  //         mymap.setView([46.5, -1.8]);
  //     }, 2000);
  // }, 4000);

  // cercles DROM
  let gridCercles;
  const cercles_drom = 'data/cercles_drom.geojson';
  fetch(cercles_drom)
  .then(response => response.json())
  .then(data => {
    gridCercles = L.vectorGrid.slicer(data, {
      rendererFactory: L.canvas.tile,
      vectorTileLayerStyles: {
        sliced: {
          color: "#ffffff",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.5,
          fillColor: 'white'
        }
      },
      interactive:false
    }).addTo(mymap)
  })
}

initMap();
