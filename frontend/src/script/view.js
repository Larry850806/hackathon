// import Highcharts from 'highcharts'
// window.Highcharts = Highcharts
// require('highcharts-more')
import config from './config'

function showBubbleChart() {
  Highcharts.chart('container', config)
}

export default { showBubbleChart }
