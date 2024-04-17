(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .left-content  .chart1'));
    var option;
    option = {
      title: {
        text: '老年健康生活影响因素',
        textStyle:{
          fontSize:16
        }
      },
      grid:{
        top:'10%'
      },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          symbolSize: 30,
          roam: true,
          zoom:0.8,
          label: {
            show: true,
            position:'bottom'
          },
          color:['#5c5a46'],
          edgeLabel: {
            fontSize: 30
          },
          data: [
            {
              name: '行为特征',
              x: 500,
              y: 240,
              symbolSize:[60,60],
              symbol:'image://D:/计赛/0404/map/images/行为特征.png',
            },
            {
              name: '与年龄相关的\n身体状况改变',
              x: 440,
              y: 260,
              symbolSize:[60,60],
              symbol:'image://D:/计赛/0404/map/images/与年龄相关的身体状况改变.png',
            },
            {
              name: '基因',
              x: 440,
              y: 340,
              symbolSize:[60,60],
              symbol:'image://D:/计赛/0404/map/images/基因.png',
            },
            {
              name: '疾病',
              x: 500,
              y: 360,
              symbolSize:[60,60],
              symbol:'image://D:/计赛/0404/map/images/疾病.png',
            },
            {
              name: '居所',
              x: 600,
              y: 240,
              symbolSize:[60,60],
              symbol:'image://D:/计赛/0404/map/images/居所.png',
            },
            {
              name: '辅助科技',
              x: 660,
              y: 260,
              symbolSize:[60,60],
              symbol:'image://D:/计赛/0404/map/images/医疗科技.png',
            },
            {
              name: '交通',
              x: 660,
              y: 340,
              symbolSize:[60,60],
              symbol:'image://D:/计赛/0404/map/images/交通.png',
            },
            {
              name: '社交场所',
              x: 600,
              y: 360,
              symbolSize:[60,60],
              symbol:'image://D:/计赛/0404/map/images/社交场所.png',
            },
            {
              name: 'oldman',
              symbolSize:[50,87],
              symbol:'image://D:/计赛/0404/map/images/oldman1.png',
              x: 550,
              y: 300,
              label:{
                show:false
              }
            }
          ],
          // links: [],
          links: [
            {
              source: 'oldman',
              target: '行为特征',
              label: {
                show: false
              },
              lineStyle: {
                curveness: 0.2
              }
            },
            {
              source: 'oldman',
              target: '与年龄相关的\n身体状况改变',
              lineStyle: {
                curveness: 0.2
              }
            },
            {
              source: 'oldman',
              target: '基因',
              lineStyle: {
                curveness: 0.2
              }
            },
            {
              source: 'oldman',
              target: '疾病',
              lineStyle: {
                curveness: 0.2
              }
            },
            {
              source: 'oldman',
              target: '居所',
              lineStyle: {
                curveness: 0.2
              }
            },
            {
              source: 'oldman',
              target: '辅助科技',
              lineStyle: {
                curveness: 0.2
              }
            },
            {
              source: 'oldman',
              target: '交通',
              lineStyle: {
                curveness: 0.2
              }
            },
            {
              source: 'oldman',
              target: '社交场所',
              lineStyle: {
                curveness: 0.2
              }
            }
          ],
          lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0
          }
        }
      ]
    };
    option.graphic = [
      {
        type: 'text',
        left: '25%',
        top: '10%',
        style: {
          text: '个人因素',
          fontSize: 20,
          textFill:'#5c5a46'
        }
      },
      {
        type: 'text',
        right: '25%',
        top: '10%',
        style: {
          text: '环境因素',
          fontSize: 20,
          textFill:'#5c5a46'
        }
      }
    ];
  
  option && myChart.setOption(option);
})();
(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .left-content .chart3'));
  var option;
  option = {
  title: {
    text: '城市与农村地区老人慢性病危险因素流行率(单位：%)',
    textStyle:{
      fontSize:14
    },
    subtext: '数据来源：NCCNDC，2012'
  },
  grid:{
    bottom:'10%',
    top:'20%'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['城市', '农村'],
    right: '0%',
    top:'15%'
    
  },
  toolbox: {
    top:'6%',
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      // prettier-ignore
      data: ['经常吸烟', '有害饮酒', '膳食纤维不足', '缺乏锻炼', '体质指数高', '室内空气污染', '未经改善的水源']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '城市',
      type: 'bar',
      data: [19.9, 7.5, 49.5, 76, 38, 7.1, 1],
      color: ['#939074'],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: '农村',
      type: 'bar',
      data: [23.7, 13.3, 60.0, 92.9, 29, 89, 6.7],
      color: ['#cfcbaa'],
      markPoint: {
        data: [
          { name: 'Max', value: 92.9, xAxis: 3, yAxis: 93 },
          { name: 'Min', value: 6.7, xAxis: 6, yAxis: 7 }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    }
  ]
};

option && myChart.setOption(option);
})();
(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .left-content .chart2'));
  var option;
  option = {
       title:{
        text:'影响老人健康首要病症',
        textStyle:{
          fontSize:15
        }
        ,left:'center'
       },
      itemStyle: {
        color: 'rgba(255,255,255,0)',
      },
      tooltip: {
        show: true,
        trigger: 'item',
      },
      series: [
        {
          type: 'graph',
          layout: 'force', //引导布局
          label: {
            show: true,
            color: 'auto',
          },
          zoom:0.95,
          data: [{ name: '脑卒中', size: 50, color: '#2f2819', x: 60, y: 26 },
          { name: '恶性', size: 42, color: '#5c5a46', x: 50, y: 42 },
          { name: '肿瘤', size: 42, color: '#5c5a46', x: 50, y: 55 },
          { name: '缺血性心脏病', size: 35, color: '#4e3c30', x: 123, y: 35 },
          { name: '呼吸系统疾病', size: 30, color: '#9f8370', x: 104, y: 86 },
          { name: '糖尿病', size: 26, color: '#bdb3a5', x: 90, y: 54 },
          { name: '心理健康状况（抑郁、自杀和老年痴呆）', size: 24, color: '#cfcbaa', x: 120, y: 70 },
          { name: '高血压性心脏病', size: 22, color: '#939074', x: 154, y: 48 },
          { name: '跌倒', size: 20, color: '#e0dbd4', x: 174, y: 80 },
          ].map((item) => ({
            name: item.name,
            //   draggable: false,
            itemStyle: {
              color: 'rgba(255,255,255,0)',
            },
            value: item.val,
            x: item.x,
            y: item.y,
            fixed: true,
            label: {
              color: item.color,
              fontSize: item.size,
            },
          })),
        },
      ],
    };
  var ecConfig = echarts.config;
  myChart.on('click', eConsole);

  function eConsole(param) {
      if (typeof param.seriesIndex != 'undefined') {
          switch (param.name) {//简单的switch，大家应该能够明白怎么设置
              case "恶性":
                  window.location.href = "http://www.sina.com";
                  // window.open("http://www.sina.com", "_blank");//在新页面打开
                  break;
              default:
                  break;
          }
      }
  };


  myChart.setOption(option);
})();
(function(){
  var myChart =echarts.init(document.querySelector('.mainbox .left-content .chart4'));
  var option;
  const data = [
      [
        [15, 50, 1400, '国家老年疾病临床医学研究中心 6 个'],
        [72, 65, 2800, '老年医学科的二级及以上综合性医院 5909个'],
        [56, 68, 1154, '老年友善医疗机构综合性医院 8627个'],
        [13, 74.7, 3800, '基层医疗卫生机构 19494 个'],
        [45, 60, 2400, '设有临终关怀的医疗机构 4259 个'],
        [65, 72.1, 5694, '医疗机构与养老机构达成合作8.4 万对'],
        [28, 62, 3400, '两证齐全的医养结合机构6986家']
      ]
    ];
    option = {
     
      title: {
        text: '推进老年健康服务和医养结合',
        textStyle:{
          fontSize:15
        },
        left: 'center',
        top: '3%'
      },
      grid: {
        left: '7%',
        top: '25%',
        right:'18%',
        bottom:'12%'
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLabel: {
          show: false
        }
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLabel: {
          show: false
        },
        scale: true
      },
      series: [
        {
          name: '1990',
          data: data[0],
          type: 'scatter',
          zoom:0.7,
          symbolSize: function (data) {
            return Math.sqrt(data[2]) ;
          },
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: 'top'
          },
          emphasis: {
            focus: 'series',
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3];
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: '#939074',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              {
                offset: 0,
                color: '#5c5a46'
              },
              {
                offset: 1,
                color: '#cfcbaa'
              }
            ])
          }
        }
      ]
    };
    option && myChart.setOption(option);
})();
(function(){
  var myChart = echarts.init(document.querySelector('.mainbox .right-content .right-content-container .chart5'));
  var option ;
  var data =[0.03,0.06,0.13,0.31];
  option = {
     title:{
      text:'不同年龄段的癌症患病概率',
      textStyle:{
        fontSize:14,
        top:'20%'
      }
     },
     tooltip:{
      trigger:'axis',
      axisPointer:{
          type:'shodow'
      }
     },
     color:['#5c5a46'],
     xAxis:{
      type:'category',
      data:['0-49岁','50-59岁','60-69岁','70岁以上']
     },
     yAxis:{
      type:'value',
      show:false
  },
      series:[{
          data:data,
          type:'bar',
          label:{
            show:true,
              formatter:'{c}%',
              position:'top'
          }
  }]
  };
  myChart.setOption(option);
})();
(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .right-content .right-content-container .chart6'));
  var option;
 
const dataFat = [
  [29, 37.4, 46.8],
  [39.2, 50.8, 59.9],
  [33.2, 43.5, 50.2]
];
const dataYa = [
  [9.1, 10.6, 13.3],
  [26.3, 35.7, 37.8],
  [49.1, 58.9, 59.2]
];
const dataTang = [
  [1.3, 6.1, 6.2],
  [4.3, 13.8, 16.1],
  [6.8, 19.4, 24.6]
];
const lineStyle = {
  width: 1,
  opacity: 0.5
};
option = {
  title: {
    text: '2002/2012/2018年常见病患病率',
    left: 'center',
    textStyle: {
      color: '#2f2818',
      fontSize:14
    }
  },
  grid:{
    top:'20%',
    bottom:'0%'
  },
  legend: {
    orient:'vertical',
    left:'5%',
    top:'center',
    data: ['超重肥胖', '高血压', '糖尿病'],
    itemGap: 20,
    textStyle: {
      color: '#00000',
      fontSize: 12
    },
    selectedMode: 'single'
  },
  radar: {
    indicator: [
      { name: '18-44岁', max: 60 },
      { name: '45-59岁', max: 60 },
      { name: '60岁及以上', max: 60 }
    ],
   center:['65%','65%'],
    shape: 'circle',
    splitNumber: 5,
    axisName: {
      color: '#2f2818'
    },
    splitLine: {
      lineStyle: {
        color: [
          '#f5f7f2',
          '#cfcbaa',
          '#939074',
          '#5c5a46',
          '#2f2818',
          '#2f2818'
        ].reverse()
      }
    },
    splitArea: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(238, 197, 102, 0.5)'
      }
    }
  },
  series: [
    {
      name: '超重肥胖',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataFat,
      symbol: 'none',
      itemStyle: {
        color: '#2f2818'
      },
      areaStyle: {
        opacity: 0.1
      }
    },
    {
      name: '高血压',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataYa,
      symbol: 'none',
      itemStyle: {
        color: '#5c5a46'
      },
      areaStyle: {
        opacity: 0.05
      }
    },
    {
      name: '糖尿病',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataTang,
      symbol: 'none',
      itemStyle: {
        color: '#939074'
      },
      areaStyle: {
        opacity: 0.05
      }
    }
  ]
};
  myChart.setOption(option);
})();
(function () {
  var myChart = echarts.init(document.querySelector('.mainbox .right-content .right-content-container .chart7'));
  var option;
  option = {
      color: ['#5c5a46', '#939074', '#cfcbaa', '#FF0087', '#FFBF00'],
      title: {
        text: '不同性别血脂异常患病率（单位：%）',
        textStyle:{
          fontSize:12
        },
        subtext: '数据来源：2018年《中国居民营养与慢性病报告》'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['男性', '女性', '总计'],
        right:'10%'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['18-44岁', '45-59岁', '60岁及以上']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '男性',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#cfcbaa'
              },
              {
                offset: 1,
                color: '#f5f7f2'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [46.3, 46, 33.6]
        },
        {
          name: '女性',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#939074'
              },
              {
                offset: 1,
                color: '#f5f7f2'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [20.1, 34.6, 39.1]
        },
        {
          name: '总计',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#5c5a46'
              },
              {
                offset: 1,
                color: '#cfcbaa'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [33.2, 40.3, 36.4]
        }
      ]
    };
    


  myChart.setOption(option);
})();