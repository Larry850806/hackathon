import datas from '../../location.json'

function initMap() {
    return new Promise((resolve, reject) => {
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: { lat: 24.993113, lng: 121.301028 },
            mapTypeId: 'terrain'
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

 export default {initMap, heapmap}