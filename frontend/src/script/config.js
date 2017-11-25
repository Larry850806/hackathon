const bubble = {
  chart: {
    type: 'bubble',
    plotBorderWidth: 1,
    zoomType: 'xy',
  },
  legend: {
    enabled: false,
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

const bar = {
  chart: {
    type: 'bar',
  },

  yAxis: {
    min: 0,
    title: {
      text: '事件數量',
      align: 'high',
    },
    labels: {
      overflow: 'justify',
    },
  },
  tooltip: {
    valueSuffix: ' millions',
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: false,
    borderWidth: 1,
    backgroundColor:
      (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
    shadow: true,
  },
  credits: {
    enabled: false,
  },
}

export default { bubble, bar }
