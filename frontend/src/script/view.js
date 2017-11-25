// import Highcharts from 'highcharts'
// window.Highcharts = Highcharts
// require('highcharts-more')
import config from './config'
import datas from '../../stat3.json'

function showBubbleChart(district) {
  console.log(district)

  Highcharts.chart(
    'container',
    Object.assign({}, config, {
      series: [
        {
          data: datas[district].map(data => ({
            x: data.data.avg_alchol,
            y: data.data.avg_limit,
            z: data.data.avg_death * 1000,
          })),
        },
      ],
    })
  )
}

export default { showBubbleChart }
