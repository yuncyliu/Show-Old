(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .left-content .total .img-three .chart'));
  var option;
  option = {
    grid: {
      containable: true,
    },
    tooltip: {
      trigger: "item",
      formatter: '{b}:{c}%',
    },
    title: {
      text: '中国老年群体居住情况',
      top: "15px",
      left: 'center'
    },

    color: ['#585039', '#d7c7ac', '#bdb3a5', '#2d3f2d', '#a49375', '#7e7066'],
    series: [
      {
        type: "pie",
        radius: ["40%", "52%"],  //圆环大小
        center: ["44%", "50%"], //圆环位置
        avoidLabelOverlap: false,//是否启用防止标签重叠策略
        hoverAnimation: false,//动画效果
        minShowLabelAngle: 7,
        label: {
          formatter: '{b}:{c}%',// 显示百分比，
          position: 'outer',
          alignTo: 'edge',
          margin: 10
        },
        // 指示折现
        labelLine: {
          normal: {
            show: true,
            legend: 8,//第一条折现
            legend2: 15,//第二条折现
            lineStyle: {
              color: "#166AC1"//折现颜色
            },
          }
        },
        data: [
          { value: 23.11, name: '与配偶与子女同住' },
          { value: 43.70, name: '与配偶同住' },
          { value: 16.57, name: '与子女同住' },
          { value: 11.98, name: '独居' },
          { value: 1.91, name: '养老机构' },
          { value: 2.72, name: '其他' }
        ]
      }
    ]

  }
  myChart.setOption(option);
})();
(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .left-content .total .img-four .chart1'));
  var option;
  option = {
    title: {
      text: '老人独居情况',
      textStyle: {
        fontSize: 12
      },
      subtext: '2020年数据',
      subtextStyle: { fontSize: 8 },
      right: '0',
      bottom: '0'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}:{c}%',
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    color: ['#585039', '#a49375'],
    series: [
      {
        name: '',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 2, name: '有保姆' },
          { value: 98, name: '无保姆' },
        ],
        label: {
          formatter: '{b}:{c}%',// 显示百分比，
          position: 'outer',
          alignTo: 'edge',
          margin: 10
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  myChart.setOption(option);
})();
(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .left-content .total .img-two .chart3'));
  var option;
  option = {
    title: {
      text: '三失人口分布',
      textStyle: {
        fontSize: 12
      },
      subtext: '2020年数据',
      subtextStyle: { fontSize: 8 },
      left: '0',
      bottom: '0',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}:{c}%'
    },
    color: ['#7c7c7c', '#2e2f36', '#d7c7ac'],
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: '60%',
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        label: {
          formatter: '{b}:{c}%', // 显示百分比，
          position: 'outer',
          alignTo: 'edge',
          margin: 10
        },
        data: [
          { value: 1.3, name: '失独人口' },
          { value: 0.5, name: '失能人口' },
          { value: 2.3, name: '失智人口' }
        ]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .left-content .left-bottom .child .child-item .chart5'));
  var option;
  option = {
    title: {
      text: '失独心理调查',
      textStyle: {
        fontSize: 15,
      },
      top: '5%',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: function (params) {
        return params[0].name + ': ' + params[0].value + '%';
      }
    },
    xAxis: {
      data: [
        '感到孤独',
        '抑郁症',
        '心理障碍',
        '感到自卑',
        '强迫症',
        '自杀倾向',
        '睡眠差'
      ],
      axisLine: { show: false },
      axisLabel: {
        color: '#2dsf2d'
      }
    },
    yAxis: {
      splitLine: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false }
    },
    color: ['#a49375'],
    series: [
      {
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
          opacity: 0.5
        },
        emphasis: {
          itemStyle: {
            opacity: 1
          }
        },
        data: [60, 40, 60, 70, 50, 38, 42],
        z: 10
      },
      {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'end',
        symbolSize: 50,
        symbolOffset: [0, '-120%'],
        data: []
      }
    ]
  };
  option && myChart.setOption(option);
})();
(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .left-content .left-bottom .child .child-item .chart4 '));
  var option;
  const value1List = [8.17, 36.33, 47.6, 21.2, 6.12, 10.19, 2.1];
  const reason = ['火灾', '事故', '疾病', '溺水', '跌落', '触电', '其他'];
  const dateList = ['2012', '2014', '2016', '2018', '2020'];
  const valueList = [100, 147, 160, 175, 193];
  option = {
    // Make gradient line here
    visualMap: [
      {
        show: false,
        type: 'continuous',
        inRange: {
          color:['#d7c7ac', '#2d3f2d']
      },
        seriesIndex: 0,
        min: 0,
        max: 400
      },
      {
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        inRange: {
          color:['#d7c7ac', '#2d3f2d']
      },
        dimension: 0,
        min: 0,
        max: dateList.length - 1
      }
    ],
    title: [
      {
        left: 'c',
        top: '5%',
        text: '中国失独家庭数量',
        textStyle: {
          fontSize: 12
        }
      },
      {
        top: '48%',
        left: 'center',
        text: '失独原因调查',
        textStyle: {
          fontSize: 12
        }
      }
    ],
    tooltip:
    {
      trigger: 'axis',
      formatter: '{b}:{c}%'
    },
    xAxis: [
      {
        data: dateList
      },
      {
        data: reason,
        gridIndex: 1
      }
    ],
    yAxis: [
      {},
      {
        gridIndex: 1
      }
    ],
    grid: [
      {
        bottom: '58%'
      },
      {
        top: '58%'
      }
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        data: valueList
      },
      {
        type: 'bar',
        color:['#a93226', '#d98880'],
        showSymbol: false,
        data: value1List,
        xAxisIndex: 1,
        yAxisIndex: 1
      }
    ]
  };
  option && myChart.setOption(option);
})();
(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .left-content .left-bottom .couple .couple-container .box-two .chart7'));
  var option;
  option = {
    title: {
      text: '60岁及以上人口婚姻情况',
      textStyle: {
        fontSize: 12
      },
      bottom: '0',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient:'vertical',
      top: '10%',
      right: '0',
      fontSize: 4
    },
    series: [
      {
        type: 'pie',
        center:['30%','45%'],
        radius: ['30%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        color: ['#a49375', '#7c7c7c', '#6a533b', '#a7a095'],
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 100000, name: '未婚' },
          { value: 1919687, name: '有配偶' },
          { value: 77777, name: '离婚' },
          { value: 400000, name: '丧偶' }
        ]
      }
    ]
  };



  option && myChart.setOption(option);
})();
(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .left-content .left-bottom .couple .couple-container .box-three .chart8'));
  var option;
  option = {
    title: {
      text: "60岁以上男女丧偶比例",
      textStyle:{
        fontSize:12
      },
      left: 'center',
      fontSize: 10
    },
    tooltip: {
      trigger: 'item'
    },
    color: ['#2e2f36', '#d7c7ac'],
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '60%'],
        // adjust the start and end angle
        startAngle: 180,
        endAngle: 360,
        data: [
          { value: 1496361, name: '男性' },
          { value: 4070420, name: '女性' },
        ]
      }
    ]
  };
  option && myChart.setOption(option);
})();
(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .right-content .death .card-container .chart9  '));
  var option;
  option = {
    title: {
      text: '2010-2021我国粗死亡率统计',
      textStyle: {
        fontSize: 12
      },
      subtext: '单位：%'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['男性', '女性', '城市', '农村', '合计'],
      top: '10%'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    color: ['#2d3f2d', '#a49375', '#d7c7ac', '#585039', '#bdb3a5'],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'
      ]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '男性',
        type: 'line',
        stack: 'Total',
        data: [
          10.33, 9.6, 9.48, 9.81, 9.57, 9.55, 9.21, 8.65, 8.19, 8.12, 8.48, 8.14
        ]
      },
      {
        name: '女性',
        type: 'line',
        stack: 'Total',
        data: [
          8.19, 7.96, 7.82, 7.49, 7.28, 7.0, 6.1, 6.09, 5.78, 5.63, 6.03, 5.75
        ]
      },
      {
        name: '城市',
        type: 'line',
        stack: 'Total',
        data: [
          6.03, 4.99, 5.23, 5.81, 5.52, 5.58, 5.28, 4.74, 4.65, 4.64, 5.07, 4.81
        ]
      },
      {
        name: '农村',
        type: 'line',
        stack: 'Total',
        data: [
          11.54, 11.45, 11.02, 9.99, 9.86, 9.62, 9.31, 8.79, 8.26, 8.08, 8.48, 8.1
        ]
      },
      {
        name: '合计',
        type: 'line',
        stack: 'Total',
        data: [
          9.42, 8.65, 8.65, 8.67, 8.44, 8.29, 7.97, 7.38, 6.99, 6.89, 7.26, 6.96,

        ]
      }
    ]
  };

  option && myChart.setOption(option);
})();
(function () {

  var myChart = echarts.init(document.querySelector('.mainbox .right-content .death .card-container .chart10'));
  var option;
  var dataMap = {};
  function dataFormatter(obj) {
    // prettier-ignore
    var pList = ['10-24岁', '25-44岁', '45-59岁', '60-74岁', '≥75岁'];
    var temp;
    for (var year = 2010; year <= 2021; year++) {
      var max = 0;
      var sum = 0;
      temp = obj[year];
      for (var i = 0, l = temp.length; i < l; i++) {
        max = Math.max(max, temp[i]);
        sum += temp[i];
        obj[year][i] = {
          name: pList[i],
          value: temp[i]
        };
      }
      obj[year + 'max'] = Math.floor(max / 100) * 100;
      obj[year + 'sum'] = sum;
    }
    return obj;
  }
  // prettier-ignore
  dataMap.dataMale = dataFormatter({
    //max : ,
    2021: [121.31, 119.22, 109.22, 109.81, 99.15, 95.52],
    2020: [121.06, 111.56, 114.43, 125.56, 117.17, 96.55],
    2019: [109.28, 112.46, 113.30, 119.57, 114.98],
    2018: [80.82, 121.71, 119.28, 140.27, 102.82],
    2017: [77.90, 125.19, 131.05, 153.42, 116.25],
    2016: [76.56, 135.86, 142.74, 160.24, 123.30
    ],
    2015: [88.40, 133.32, 151.85, 160.80, 145.50
    ],
    2014: [83.63, 137.18, 142.52, 162.83, 152.91
    ],
    2013: [91.56, 143.97, 149.06, 165.07, 161.39
    ],
    2012: [95.80, 130.52, 151.38, 165.94, 177.20
    ],
    2011: [102.00, 144.21, 148.53, 171.49, 201.40
    ],
    2010: [101.98, 146.98, 162.97, 185.94, 248.20	
    ]
  })
  // prettier-ignore
  dataMap.dataFe = dataFormatter({
    //max : ,
    2021: [94.04, 57.20, 73.36, 89.14, 73.99],
    2020: [83.79, 60.32, 78.85, 98.25, 86.60],
    2019: [74.06, 61.54, 84.23, 89.47, 80.73],
    2018: [49.98, 66.47, 90.63, 112.23, 72.04],
    2017: [49.86, 72.63, 96.78, 119.10, 84.40
    ],
    2016: [52.10, 85.30, 64.70, 122.72, 96.81
    ],
    2015: [54.05, 93.24, 106.63, 131.90, 110.07
    ],
    2014: [61.27, 105.38, 103.09, 133.45, 117.22
    ],
    2013: [81.93, 115.15, 108.45, 130.29, 117.12
    ],
    2012: [86.45, 110.63, 126.55, 135.58, 133.37
    ],
    2011: [98.52, 127.97, 120.55, 121.66, 161.18
    ],
    2010: [112.05, 133.30, 124.41, 127.28, 175.08
    ]
  });
    option = {
    baseOption: {
      timeline: {
        axisType: 'category',
        // realtime: false,
        // loop: false,
        autoPlay: true,
        // currentIndex: 2,
        playInterval: 1000,
        // controlStyle: {
        //     position: 'left'
        // },
        fontSize:8,
        data: [
          '2010-01-01',
          '2011-01-01',
          '2012-01-01',
          '2013-01-01',
          '2014-01-01',
          '2015-01-01',
          '2016-01-01',
          '2017-01-01',
          '2018-01-01',
          '2019-01-01',
          '2020-01-01',
          '2021-01-01',
        ],
        label: {
          formatter: function (s) {
            return new Date(s).getFullYear();
          }
        }
      },
      title: {
        textStyle:{fontSize:11},
        subtext: '数据来自国家统计局',
        subtextStyle:{
          fontSize:8
        }
      },
      color:['#2d3f2d', '#a49375'],
      tooltip: {},
      legend: {
        left: 'right',
        orient:'vertical',
        data: ['男性粗死亡率', '女性粗死亡率'],
        selected: {
         男性粗死亡率: true,
         女性粗死亡率: true
        }
      },
      calculable: true,
      grid: {
        top: '35%',
        bottom: '30%',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              formatter: function (params) {
                return params.value.replace('\n', '');
              }
            }
          }
        }
      },
      xAxis: [
        {
          type: 'category',
          data: [
            '10-24岁', '25-44岁', '45-59岁', '60-74岁', '≥75岁'
          ],
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '我国粗死亡率'
        }
      ],
      series: [
        { name: '男性粗死亡率', type: 'line' },
        { name: '女性粗死亡率', type: 'line' },
      ]
    },
    options: [
      {
        title: { text: '2010全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2010'] },
          { data: dataMap.dataFe['2010'] },
        ]
      },
      {
        title: { text: '2011全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2011'] },
          { data: dataMap.dataFe['2011'] },
        ]
      },
      {
        title: { text: '2012全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2012'] },
          { data: dataMap.dataFe['2012'] },
        ]
      },
      {
        title: { text: '2013全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2013'] },
          { data: dataMap.dataFe['2013'] },
        ]
      },
      {
        title: { text: '2014全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2014'] },
          { data: dataMap.dataFe['2014'] },
        ]
      },
      {
        title: { text: '2015全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2015'] },
          { data: dataMap.dataFe['2015'] },
        ]
      },
      {
        title: { text: '2016全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2016'] },
          { data: dataMap.dataFe['2016'] },
        ]
      },
      {
        title: { text: '2017全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2017'] },
          { data: dataMap.dataFe['2017'] },
        ]
      },
      {
        title: { text: '2018全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2018'] },
          { data: dataMap.dataFe['2018'] },
        ]
      },
      {
        title: { text: '2019全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2019'] },
          { data: dataMap.dataFe['2019'] },
        ]
      },
      {
        title: { text: '2020全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2020'] },
          { data: dataMap.dataFe['2020'] },
        ]
      },
      {
        title: { text: '2021全国粗死亡指标' },
        series: [
          { data: dataMap.dataMale['2021'] },
          { data: dataMap.dataFe['2021'] },
        ]
      },
    ]
  };

  option && myChart.setOption(option);

})();