import config from './config'
import datas from '../../stat3.json'
import reasonDatas from '../../reason2.json'

function showBubbleChart(district) {
  Highcharts.chart(
    'container',
    Object.assign({}, config.bubble, {
        title: {
            text: `${district}死亡率`,
          },
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

function showBarChart(district) {
    Highcharts.chart(
    'container1',
    Object.assign({}, config, {
        title: {
            text: `${district}肇事主因`
        },
        xAxis: {
            categories: reasonDatas[district].slice(0,5).map(e => e.title),
            title: {
                text: null
            }
        },
        series: [{
            data: reasonDatas[district].slice(0,5).map(e => e.value)
        }
        ]
    })
    )
}

export default { showBubbleChart, showBarChart }
