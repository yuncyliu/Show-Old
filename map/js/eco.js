(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .top-content .top-left .top-left-container .chart1 '));
    var option;
    const lineStyle = {
        width: 2,
        opacity: 0.4
    };
    option = {
        title: {
            text: '城乡镇60岁及以上老人人口主要生活来源',
            textStyle: {
                fontSize: 12
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        legend: {
            data: ['城市', '镇', '乡村'],
            right: '0',
            orient: 'vertical'
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '劳动收入', max: 4000000 },
                { name: '离退休金/养老金', max: 6000000 },
                { name: '最低生活保障金', max: 800000 },
                { name: '失业保险金', max: 800 },
                { name: '财产性收入', max: 130000},
                { name: '家庭其他成员供养', max:50000000},
                { name: '其他', max:  800000 }
            ],
            fontSize: 8,
            radius: 54,//缩放
            center: ['52%', '50%'],//位置

            shape: 'circle',
            splitNumber: 5,
            axisName: {
                color: '#4e3c30'
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)',
                        'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)',
                        'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)',
                        'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#bdb3a5'
                }
            }
        },
        series: [
            {
                lineStyle: lineStyle,
                type: 'radar',
                color: ['#9f8370','#bdb3a5','#4e3c30'],
                itemStyle: {
                    color: ['#9f8370','#bdb3a5','#4e3c30']
                },
                areaStyle: {
                
                    opacity: 0.1
                },
                data: [
                    {
                        value: [629030,5994356,	130290,	282,	55212	,1484248	,291167
                        ],
                        name: '城市'
                    },
                    {
                        value: [1003583	,1619901,	211687,	398,	43510	,1895337,	327220
                        ],
                        name: '镇'
                    },
                    {
                        value: [3974742	,1234626,	753498,	740,	126976	,4955727,	790571
                        ],
                        name: '乡村'
                    }
                ]
            }
        ]
    };

    option && myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .top-content .top-left .top-left-container .chart2 '));
    var option;
    option = {
        title: {
          text: '2002-2014年城乡老年人平均收入状况',
          textStyle:{
            fontSize:12
          }
        },
        grid:{
          bottom:'15%',
          top:'22%',
          left:'15%',
          right:'5%'
        },
        legend: {
          right:'0%',
          orient:'vertical'
        },
        xAxis: {
          type: 'category',
          data: ['2002', '2005', '2010', '2014']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '城市老年人',
            data: [7392, 11963, 17892, 23930],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 20,
            lineStyle: {
              color: '#4e3c30',
              width: 4,
              type: 'dashed'
            },
            itemStyle: {
              borderWidth: 3,
              borderColor: '#9f8370',
              color: 'bdb3a5'
            }
          },
          {
            name: '农村老年人',
            data: [1651, 2970, 4756, 7621],
            type: 'line',
            symbol: 'circle',
            symbolSize: 20,
            lineStyle: {
              color: '#9f8370',
              width: 4,
              type: 'dashed'
            },
            itemStyle: {
              borderWidth: 3,
              borderColor: '#bdb3a5',
              color: '#e0dbd4'
            }
          }
        ]
      };

    option && myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .top-content .top-right .top-right-container .chart4 '));
    var option;
    var option = { 
        title:{text:'不同年龄段人口在金融投资中受骗差异',
        subtext:'数据来源：2019《中老年反欺诈白皮书》'
    },
        series: [ createGaugeSeries('18-29岁', 10.19, '10%', '60%'),
        createGaugeSeries('30-39岁', 9.30, '30%', '60%'),
        createGaugeSeries('40-49岁', 9.45, '50%', '60%'), 
        createGaugeSeries('50-59岁', 17.49, '70%', '60%'),
        createGaugeSeries('30岁及以上', 23.87, '90%', '60%') ] }; // Function to create  series

    option && myChart.setOption(option);
})();
function createGaugeSeries(name, value, centerX, centerY) {
    return { name: 'Age Group', 
    type: 'gauge',
    center: [centerX, centerY], 
    radius: '40%', // radius of the gauge 
    startAngle: 90, 
    endAngle: -269, 
    min:0,
    max:100,
    detail: { formatter: '{value}%',fontSize:16 },
    data: [{ value: value, name: name }], 
    title: { // Customizing the title 
    offsetCenter: [0, '120%'], // x, y positions where 0,0 is the center of the circle 
    fontSize: 12 }, 
    axisLine: {
         lineStyle:
          { width: 10,
             color: [ 
                [value / 100, 
                '#9f8370'], // b zone
    [1, '#CCCCCC'] // Gray zone 
    ] } },
    axisLabel: { show: false }, 
    splitLine: { show: false }, 
    axisTick: { show: false }, 
    pointer: { show: true, length: '80%', width: 5 }, 
    itemStyle: { color: '#9f8370' } };
}
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .top-content .top-right .top-right-container .chart5  '));
    var option;
    const colors= ['#4e3c30', '#9f8370', '#bdb3a5'];
    option = {
        title:{
            text:'受骗人年龄段和被骗金额分布',
            textStyle:{fontSize:12}
        },
        grid:{
          bottom:'10%',
          left:'10%',
          right:'15%'

        },
        color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['人均被骗金额', '年龄段占比'],
            right:'30%',
            orient:'vertical'
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                // prettier-ignore
                data: ['45-50岁', '51-55岁', '56-60岁', '61-65岁', '66-70岁','70岁以上']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '人均被骗金额',
                position: 'right',
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} 元'
                }
            },
            {
                type: 'value',
                name: '年龄段占比',
                position: 'left',
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '人均被骗金额',
                type: 'bar',
                data: [10000,3000,900,700,400,200],
                tooltip:{
                    show:false
                },
            },
            {
                name: '年龄段占比',
                type: 'line',
                yAxisIndex: 1,
                data: [65.2,18.8,6.8,4.8,2.9,1.5]
            }
        ]
    };
    option && myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .top-content .top-right .top-right-container .chart6 '));
    var option;
    const labelRight = {
        position: 'right'
      };
      option = {
        title: {
          text: '中老年人被骗类型TOP6（单位：%）',
          textStyle:{fontSize:12}
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
           top:'15%',
           bottom:'5%',
           left:'10%',
           right:'10%'
        },
        xAxis: {
          type: 'value',
          position: 'top',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          axisLabel: { show: false }
        },
        yAxis: {
          type: 'category',
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: [
            '交易诈骗',
            '返利诈骗',
            '交友诈骗',
            '兼职诈骗',
            '仿冒诈骗',
            '金融信用诈骗'
          ]
        },
        series: [
          {
            name: 'Cost',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              formatter: '{b}'
            },
            color: ['#bdb3a5'],
            data: [
              { value: -38.1, label: labelRight },
              15.1,
              11.2,
              { value: -8.0, label: labelRight },
              { value: -7.8, label: labelRight },
              6.5
            ]
          }
        ]
      };
      
      option && myChart.setOption(option);
      
})();
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .bottom-content .bottom-container .chart7'));
    var option;
    option = {
        title: {
          text: '2000-2014年城乡老年人消费情况',
          textStyle:{
            fontSize:12
          }
        },
        grid:{
          bottom:'15%',
          top:'25%',
          right:'5%',
          left:'15%'
        },
        legend: {
          top:'8%',
          right:'5%',
          fontSize:7
        },
        xAxis: {
          type: 'category',
          data: ['2002', '2005', '2010', '2014']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '城市老年人',
            data: [7187,10028,15819,20186],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 15,
            lineStyle: {
              color: '#bdb3a5',
              width: 3
            },
            itemStyle: {
              borderWidth: 3,
              color: '#4e3c30'
            }
          },
          {
            name: '农村老年人',
            data: [1971,2691,4759,8884],
            type: 'line',
            symbol: 'star',
            symbolSize: 15,
            lineStyle: {
              color: '#e0dbd4',
              width: 3,
            },
            itemStyle: {
              borderWidth: 3,
              color: '#9f8370'
            }
          }
        ]
      };
  
    option && myChart.setOption(option);
  })();
  (function () {
    var myChart = echarts.init(document.querySelector('.mainbox .bottom-content .bottom-container .chart8'));
    var option;
    option = {
        title: {
          text: '城乡老年人消费支出TOP3(单位：%)',
          textStyle:{
            fontSize:12
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        grid:{
          containable:true,
          bottom:'15%',
          top:'20%',
          right:'5%',
          left:'10%'
        },
        legend: {
          orient:'vertical',
          right: '0%',
          fontSize:5,
          data: ['城市老年人', '乡村老年人']
        },
        radar: [
          {
            indicator: [
              { text: '食品烟酒', max: 45 },
              { text: '医疗保健', max: 45 },
              { text: '居住支出', max: 45 }
            ],
            center: ['30%', '65%'],
            radius: 45
          },
          {
            indicator: [
              { text: '食品烟酒', max: 45 },
              { text: '医疗保健', max: 45 },
              { text: '居住支出', max: 45 }
            ],
            center: ['69%', '75%'],
            radius: 45
          }
        ],
        series: [
          {
            type: 'radar',
            color: ['#7e7066'],
            tooltip: {
              trigger: 'item'
            },
            areaStyle: {
              color: ['#bdb3a5']
            },
            data: [
              {
                value: [42, 18, 15],
                name: '城市老年人'
              }
            ]
          },
          {
            type: 'radar',
            tooltip: {
              trigger: 'item'
            },
            color: ['#2e2f36'],
            radarIndex: 1,
            areaStyle: { color: ['#7e7066'] },
            data: [
              {
                value: [39, 27, 16],
                name: '乡村老年人'
              }
            ]
          }
        ]
      };
      
      option && myChart.setOption(option);
      
  })();
  (function () {
    var myChart = echarts.init(document.querySelector('.mainbox .bottom-content .bottom-container .chart9 '));
    var option;
    option = {
        title: { 
        text: '”啃老“现象(单位：%)', 
        textStyle:{
          fontSize:15
        },
       },
        tooltip: {
          formatter: '{b}:{c}%'
        },
        grid:{
          bottom:'10%',
          top:'23%',
          right:'5%',
          left:'10%'
        },
        xAxis: {
          type: 'category',
          data: ['城市', '农村']
        },
        yAxis: {
          type: 'value'
        },
        label:{
            show:true,
            formatter: '{b}:{c}%'
        },
        series: [
          {
            data: [7.7, 3.9],
            type: 'bar',
            barWidth: 45,
            color: ['#9f8370'],
            showBackground: true,
            backgroundStyle: {
              color: '#8e4e27',
              opacity: 0.06
            },
            itemStyle: {
              normal: {
                barBorderRadius: [30, 30, 20, 20],
                shadowColor: '#e0dbd4'
              }
            }
          }
        ]
      };
      
      
      option && myChart.setOption(option);
      
  })();
  (function () {
    var myChart = echarts.init(document.querySelector('.mainbox .bottom-content .bottom-container .chart10 '));
    var option;
    option = {
        title: {
          text: '老\n年\n人\n消\n费\n热\n点\n新\n态',
          textStyle:{fontSize:14},
          left: '0%',
          top:'center'
        },
        grid: {
          left: '0%',
          top: '20%',
          right: '10%',
          bottom: '5%',
        },
        itemStyle: {
          color: 'rgba(255,255,255,0)'
        },
        tooltip: {
          show: true,
          trigger: 'item'
        },
        series: [
          {
            type: 'graph',
            layout: 'force', //引导布局
            label: {
              show: true,
              color: 'auto'
            },
            data: [
              { name: '照护服务', size: 20, color: '#4e3c30', x: 50, y: 25 },
              { name: '老年旅游消费', size: 20, color: '#9f8370', x: 50, y: 50 },
              { name: '老年医药用品消费', size: 20, color: '#8e4e27', x: 120, y: 85 },
              { name: '网络消费', size: 20, color: '#7e7066', x: 135, y: 35 },
              { name: '上门看病', size: 10, color: '#4e3c30', x: 90, y: 15 },
              { name: '上门做家务', size: 10, color: '#4e3c30', x: 99, y: 25 },
              { name: '康复护理', size: 10, color: '#4e3c30', x: 60, y: 15},
              {
                name: '13%每年有明确出游计划',
                size: 10,
                color: '#9f8370',
                x: 45,
                y: 37
              },
              { name: '旅居养老', size: 10, color: '#9f8370', x: 45, y: 60 },
              { name: '候鸟式养老', size: 10, color: '#9f8370', x: 65, y: 65 },
              { name: '慢性病', size: 10, color: '#8e4e27', x: 97, y: 74 },
              { name: '保健品', size: 10, color: '#8e4e27', x: 125, y: 78 },
              { name: '看新闻 ', size: 10, color: '#7e7066', x: 95, y: 45 },
              { name: '看影视剧', size: 10, color: '#7e7066', x: 103, y: 57 },
              { name: '聊天', size: 10, color: '#7e7066', x: 123, y: 42 },
              { name: '炒股', size: 10, color: '#7e7066', x: 130, y: 49 },
              { name: '网上购物', size: 10, color: '#7e7066', x: 120, y: 65 }
            ].map((item) => ({
              name: item.name,
              //   draggable: false,
              itemStyle: {
                color: 'rgba(255,255,255,0)'
              },
              value: item.val,
              x: item.x,
              y: item.y,
              fixed: true,
              label: {
                color: item.color,
                fontSize: item.size
              }
            }))
          }
        ]
      };
      
      option && myChart.setOption(option);
      
  })();