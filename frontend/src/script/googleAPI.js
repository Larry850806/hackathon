import datas from '../../location.json'
import view from './view'

function initMap() {
  return new Promise((resolve, reject) => {
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: { lat: 24.9664322, lng: 121.2616219 },
      mapTypeId: 'terrain',
    })
    map.addListener('click', arg => {
      let geocoder = new google.maps.Geocoder()
      const lat = arg.latLng.lat()
      const lng = arg.latLng.lng()
      const coord = new google.maps.LatLng(lat, lng)
      geocoder.geocode({ latLng: coord }, (results, status) => {
        const district = results[0].address_components[3].short_name

        // clean
        $('div#container').empty()
        $('div#container1').empty()

        view.showBubbleChart(district)
        view.showBarChart(district)
      })
    })
    resolve(map)
  })
}

function heapmap(map) {
  return new Promise((resolve, reject) => {
    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: datas.map(data => new google.maps.LatLng(data.lat, data.lon)),
      dissiapting: false,
      map,
    })
    resolve(heatmap)
  })
}

export default { initMap, heapmap }
