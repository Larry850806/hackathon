import datas from '../../location.json'

function initMap() {
  return new Promise((resolve, reject) => {
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: { lat: 24.9664322, lng: 121.2616219 },
      mapTypeId: 'terrain',
    })
    resolve(map)
  })
}

function heapmap(map) {
  return new Promise((resolve, reject) => {
    const heapmap = new google.maps.visualization.HeatmapLayer({
      data: datas.map(data => new google.maps.LatLng(data.lat, data.lon)),
      dissiapting: false,
      map,
    })
    resolve(heapmap)
  })
}

export default { initMap, heapmap }
