const geocoder = require('geocoder')

console.time('123')
geocoder.geocode('桃園市中壢區興安2街62號', (err, data) => {
  console.log(data.results[0].geometry.location)
  console.timeEnd('123')
})
