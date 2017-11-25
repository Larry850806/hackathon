import googleAPI from './googleAPI'
//import view from './view'

$(() => {
    googleAPI.initMap()
        .then(googleAPI.heapmap)
})