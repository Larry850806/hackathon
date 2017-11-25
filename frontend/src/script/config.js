const config = {
  chart: {
    type: 'bubble',
    plotBorderWidth: 1,
    zoomType: 'xy',
  },
  legend: {
    enabled: false,
  },

  title: {
    text: '死亡率',
  },

  xAxis: {
    gridLineWidth: 1,
    title: {
      text: '酒精平均濃度',
    },
    labels: {
      format: '{value} %',
    },
  },
  yAxis: {
    startOnTick: false,
    endOnTick: false,
    title: {
      text: '限速',
    },
    labels: {
      format: '{value} km/h',
    },
    maxPadding: 0.2,
  },
}

export default config
