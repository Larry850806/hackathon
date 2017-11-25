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
      style: {
        fontSize:'18px'
    }
    },
    labels: {
      format: '{value} %',
      style: {
        fontSize:'18px'
    }
    },
  },
  yAxis: {
    startOnTick: false,
    endOnTick: false,
    title: {
      text: '限速',
      style: {
        fontSize:'18px'
    }
    },
    labels: {
      format: '{value} km/h',
      style: {
        fontSize:'18px'
    }
    },
    maxPadding: 0.2,
  },
}

const bar = {
<<<<<<< HEAD
    chart: {
        type: 'bar'
    },
    
    yAxis: {
        min: 0,
        title: {
            text: '事件數量',
            style: {
                fontSize:'18px'
            }
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
=======
  chart: {
    type: 'bar',
  },

  yAxis: {
    min: 0,
    title: {
      text: '事件數量',
      align: 'high',
>>>>>>> 3a6488057e9635a6b7b8f2a218358a86d56672aa
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
