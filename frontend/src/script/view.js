import Highcharts from 'highcharts'
import config from './config'

function showBubbleChart() {
    Highcharts.chart('container',config)
}

export default {showBubbleChart}