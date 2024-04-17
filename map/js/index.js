// 柱状图模块1
(function () {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2. 指定配置项和数据
  var option = {
    color: ['#48472d'],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "第五次人口普查",
          "第六次人口普查",
          "第七次人口普查",
        ],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "2f2818 ",
          fontSize: "12"
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "2f2818 ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "2f2818",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "#e0dbd4"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [8811,11883,19064],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5,
          color: '#847c74',
        }
      }
    ]
  };
  // 3. 把配置项给实例对象
  option && myChart.setOption(option)
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 柱状图2
(function () {

  var myChart = echarts.init(document.querySelector('.bar2 .chart'));
  var option;
  var dataMap = {};
  function dataFormatter(obj) {
    // prettier-ignore
    var pList = ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'];
    var temp;
    for (var year = 2010; year <= 2022; year++) {
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
  dataMap.dataRsum = dataFormatter({
    //max : 4000,
    2022: [37.3, 42.8, 52, 42.7, 38.9, 43.7, 39.9, 37.1, 39.7, 47.1, 38.6, 51.1, 44, 49, 52.8, 55.8, 46.4, 52.2, 39, 54.5, 43.4, 49, 49.6, 54.3, 43.7, 44.2, 45.9, 47.4, 43.9, 42.9, 41.3],
    2021: [35.8, 41.2, 51.8, 42, 38.1, 42, 38.7, 36.2, 37.5, 46.5, 37.8, 51.7, 43.8, 49.9, 52.3, 56.7, 45.6, 52.3, 38.6, 55.1, 43.7, 49.3, 49.7, 54.5, 43.9, 44, 45.2, 47.5, 44, 43, 42.3],
    2020: [33.6, 39.3, 51.8, 41.3, 37.2, 39.9, 37.6, 35.0, 35.3, 45.8, 36.5, 52.1, 43.7, 51.2, 51.3, 57.8, 44.7, 52.3, 37.8, 55.8, 43.7, 49.2, 49.3, 55.1, 43.5, 43.3, 44.2, 47.0, 41.8, 42.9, 43.3],
    2019: [28, 28.8, 47, 35.8, 30.3, 35.4, 33.4, 31.2, 35.7, 40.6, 37.2, 48.4, 36.7, 43.6, 50.4, 48.5, 40.2, 49.6, 32.5, 47.1, 40.5, 47.3, 47.4, 51.1, 38.7, 47.2, 36.2, 40.1, 39, 43.3, 47.5],
    2018: [27.8, 26.9, 45.3, 35, 30.1, 33.6, 32.7, 29.5, 33, 38.9, 36.4, 46.6, 35.5, 42.9, 49.6, 47.8, 38.6, 47, 33.6, 46.8, 37.7, 45.8, 45.7, 50.6, 38.2, 41.3, 34.3, 40.7, 37.3, 41, 42.4],
    2017: [30.6, 29.2, 42.4, 32.6, 32.3, 32, 32.7, 28.3, 31.9, 37.7, 32.7, 47.3, 38.9, 45.7, 44.1, 46.4, 39, 44.1, 32.6, 47.1, 38.9, 44.2, 42.4, 45.4, 37.6, 42.4, 36.5, 38.7, 38.8, 36.7, 43.2],
    2016: [9.2, 28.6, 41.6, 31.7, 28.6, 31.3, 30.7, 28.2, 29.3, 37.4, 32.6, 40.9, 39.4, 44.6, 40, 44.6, 37.1, 43, 32.3, 45, 38.9, 41.7, 42.2, 46.8, 38.7, 40.9, 34.4, 36.8, 36.9, 36.9, 42.4],
    2015: [26.2, 25.7, 39.7, 32, 29.2, 30.7, 29.7, 27.3, 28.5, 35.6, 31.9, 40.8, 36.2, 44, 38.9, 44.6, 35.9, 42.1, 30.5, 47.9, 39.4, 40.6, 40.5, 46.9, 38, 41.4, 34, 36, 37.3, 37.9, 40.7],
    2014: [23, 29, 38.8, 30.5, 29.7, 28.9, 28.8, 26.6, 24.7, 34.8, 27.6, 39.5, 33.7, 42.8, 37.5, 42.2, 35.6, 41.2, 32.9, 45.8, 36.4, 41.6, 43.3, 45.6, 38.3, 43, 34.3, 33.9, 34.1, 36.1, 38.9],
    2013: [22.7, 29.3, 36.9, 31.1, 28.7, 26, 27.3, 26.5, 25, 34.4, 26.8, 40.8, 33.4, 40.3, 36, 42.2, 33.1, 40.5, 31.5, 44.4, 36.8, 40.6, 41.5, 45.7, 39, 39.7, 33.2, 34.8, 37.1, 37.6, 37.4],
    2012: [21.9, 28.5, 37.1, 31, 27.8, 25.5, 25, 26.5, 21.2, 32.7, 26.7, 39.7, 33.9, 42.1, 36.3, 41.6, 33.1, 42.4, 30.5, 46.9, 35.8, 41.5, 39, 47.3, 37.6, 38, 30.4, 34.8, 38.2, 38.9, 37.5],
    2011: [21.3, 25.7, 34.7, 31.5, 25.9, 28.4, 27.3, 24.6, 19.3, 31.2, 26.9, 39.9, 30.6, 41, 35.7, 41.9, 32.3, 39.6, 31.2, 46, 36.6, 39.8, 39.3, 49.9, 37.5, 38.7, 30.7, 34.7, 36, 35.9, 36.2],
    2010: [33.6, 39.3, 51.8, 41.3, 37.2, 39.9, 37.6, 35.0, 35.3, 45.8, 36.5, 52.1, 43.7, 51.2, 51.3, 57.8, 44.7, 52.3, 37.8, 55.8, 43.7, 49.2, 49.3, 55.1, 43.5, 43.3, 44.2, 47.0, 41.8, 42.9, 43.3]
  })
  // prettier-ignore
  dataMap.dataRpart = dataFormatter({
    //max : 26600,
    2022: [20.8, 24.3, 23.8, 20.7, 20.4, 28.8, 24.8, 24.4, 26.1, 26.3, 20.7, 23.9, 17.6, 19.4, 25.6, 22.7, 23.9, 24.5, 13.3, 20.3, 16.2, 27.3, 27.1, 18.7, 16.8, 8.5, 21.4, 19.8, 14.7, 14.9, 11.9],
    2021: [19.3, 22.5, 22.7, 19.4, 19.1, 26.7, 23.2, 22.8, 24, 25, 19.5, 23.4, 16.6, 18.6, 24.3, 21.9, 22.5, 23.6, 12.6, 19.5, 15.5, 26.5, 26.3, 18.2, 16.2, 8.4, 20.3, 19.2, 14.2, 14.4, 11.5],
    2020: [17.768, 20.555, 21.142, 18.237, 17.903, 24.371, 21.473, 21.080, 22.023, 23.614, 18.103, 22.827, 15.949, 17.966, 22.897, 21.281, 21.110, 22.556, 11.824, 19.006, 14.987, 25.480, 25.283, 17.924, 15.421, 8.128, 19.214, 18.496, 12.308, 13.742, 11.119],
    2019: [14.7, 15.6, 19.3, 14.9, 13.3, 21.6, 17.7, 18.1, 22.1, 21.2, 19.3, 20.7, 13.7, 14.6, 23.8, 17.2, 18.3, 19.7, 11.4, 15, 13.1, 22.6, 23.2, 17.5, 13.7, 8.9, 16.4, 16.1, 11.9, 13.6, 11.9],
    2018: [14.4, 13.9, 18.4, 13.9, 12.8, 20, 16.4, 15.8, 19.9, 19.9, 17.7, 19.4, 12.9, 13.9, 22.7, 16.3, 17.3, 18.4, 11, 14.7, 11.3, 21.1, 21.8, 17.1, 13.2, 8, 15, 15.9, 10.4, 12.7, 10.2],
    2017: [16.3, 14.6, 16.8, 11.9, 14.3, 18.6, 16.2, 15.6, 18.8, 19.2, 16.6, 19.1, 13.2, 14.2, 18.6, 15.9, 17, 17.5, 10.3, 14.3, 11.4, 20.6, 19.8, 14.5, 11.6, 8.2, 15.1, 14.3, 11, 11.6, 10.4],
    2016: [15.2, 14.6, 15.4, 11.5, 12.1, 17.4, 14.2, 15.3, 16.8, 18.6, 15.4, 16.2, 13.9, 13.9, 16.3, 14.6, 15.9, 17, 10.2, 14.1, 11.5, 19.8, 19.5, 14.1, 11.6, 7, 14.4, 13.6, 9.9, 10.7, 10.3],
    2015: [13.5, 12.9, 14.2, 12.1, 12.4, 16.8, 14.2, 13.8, 16.5, 17.2, 14.9, 15.7, 12.3, 13, 16.2, 14.2, 15.3, 16, 9.6, 14.4, 11.8, 18.7, 18.2, 13.9, 11.6, 8.1, 13.9, 12.7, 9.7, 10.2, 10],
    2014: [10.5, 15.1, 12.9, 11.1, 12.1, 15.7, 13.1, 11.9, 12.1, 16.3, 12.3, 14.5, 10.1, 13.2, 15.8, 12.5, 13.9, 15.4, 11, 13.9, 10.5, 20, 20, 13.4, 12.1, 7.9, 14.3, 12, 9.5, 9.2, 9.5],
    2013: [10.5, 14.8, 12.6, 10.5, 11, 12.9, 12.3, 11.3, 13.3, 16.5, 11.7, 14.8, 10.9, 12.6, 14.9, 12.7, 13.2, 14.9, 9.5, 13.4, 11.2, 18.6, 18.1, 13.5, 11.1, 7.2, 13.1, 12, 9.8, 9.7, 8.8],
    2012: [10.5, 13.4, 12.5, 10.4, 10.1, 12.5, 9.7, 11.2, 10.9, 15.3, 11.1, 14.4, 11.5, 11.5, 14.3, 12.5, 14.3, 15.8, 9.1, 13.7, 9.9, 18.3, 16.4, 13.5, 10.7, 7.5, 12.1, 12.5, 9.7, 9.2, 9.3],
    2011: [10.7, 12.3, 11, 10.2, 8.7, 13.8, 11.1, 10, 9.4, 14.2, 10.9, 14.7, 10, 10.8, 14.6, 12.5, 13.4, 14.6, 8.6, 13.9, 9.4, 17.4, 16.8, 13.6, 10.6, 6.7, 11.1, 12, 8.1, 7.4, 9],
    2010: [10.538, 10.431, 10.995, 10.056, 9.649, 13.170, 10.530, 10.382, 12.464, 14.296, 12.054, 14.203, 10.299, 10.785, 13.227, 11.832, 11.803, 13.456, 8.899, 13.382, 11.183, 16.446, 15.191, 13.189, 10.644, 7.221, 11.111, 11.185, 8.662, 8.851, 8.871]
  });
  option = {
    baseOption: {
      timeline: {
        axisType: 'category',
        // realtime: false,
        // loop: false,
        color:'#6e6f59',
        autoPlay: true,
        // currentIndex: 2,
        playInterval: 1000,
        // controlStyle: {
        //     position: 'left'
        // },
        data: [
          '2010-01-01',
          '2011-01-01',
          '2012-01-01',
          {
            value: '2013-01-01',
            tooltip: {
              formatter: '{b}'
            },
            symbol: 'diamond',
            symbolSize: 16
          },
          '2013-01-01',
          '2014-01-01',
          '2015-01-01',
          '2016-01-01',
          '2017-01-01',
          '2019-01-01',
          '2020-01-01',
          '2021-01-01',
          {
            value: '2022-01-01',
            tooltip: {
              formatter: function (params) {
                return params.name + '';
              }
            },
            symbol: 'diamond',
            symbolSize: 18
          }
        ],
        label: {
          formatter: function (s) {
            return new Date(s).getFullYear();
          }
        }
      },
      title: {
        subtext: '数据来自国家统计局'
      },
      tooltip: {},
      legend: {
        left: 'right',
        data: ['总抚养比', '老年人抚养比'],
        selected: {
          总抚养比: false,
          老年抚养比: false
        }
      },
      calculable: true,
      grid: {
        top: 80,
        bottom: 100,
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
          axisLabel: { 
            interval: 0,
            formatter:function(value)  
            {  
                return value.split("").join("\n");  
            }
},
          data: [
            '北京',
            '天津',
            '河北',
            '山西',
            '内蒙古',
            '辽宁',
            '吉林',
            '黑龙江',
            '上海',
            '江苏',
            '浙江',
            '安徽',
            '福建',
            '江西',
            '山东',
            '河南',
            '湖北',
            '湖南',
            '广东',
            '广西',
            '海南',
            '重庆',
            '四川',
            '贵州',
            '云南',
            '西藏',
            '陕西',
            '甘肃',
            '青海',
            '宁夏',
            '新疆'
          ],
          splitLine: { show: false }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '抚养比（%）'
        }
      ],
      series: [
        { name: '总抚养比', type: 'bar' ,color:'#c6bca8'},
        { name: '老年人抚养比', type: 'bar' ,color:'#585947'},
      ]
    },
    options: [
      {
        title: { text: '2010全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2010'] },
          { data: dataMap.dataRpart['2010'] },
        ]
      },
      {
        title: { text: '2011全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2011'] },
          { data: dataMap.dataRpart['2011'] },
        ]
      },
      {
        title: { text: '2012全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2012'] },
          { data: dataMap.dataRpart['2012'] },
        ]
      },
      {
        title: { text: '2013全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2013'] },
          { data: dataMap.dataRpart['2013'] },
        ]
      },
      {
        title: { text: '2014全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2014'] },
          { data: dataMap.dataRpart['2014'] },
        ]
      },
      {
        title: { text: '2015全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2015'] },
          { data: dataMap.dataRpart['2015'] },
        ]
      },
      {
        title: { text: '2016全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2016'] },
          { data: dataMap.dataRpart['2016'] },
        ]
      },
      {
        title: { text: '2017全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2017'] },
          { data: dataMap.dataRpart['2017'] },
        ]
      },
      {
        title: { text: '2018全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2018'] },
          { data: dataMap.dataRpart['2018'] },
        ]
      },
      {
        title: { text: '2019全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2019'] },
          { data: dataMap.dataRpart['2019'] },
        ]
      },
      {
        title: { text: '2020全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2020'] },
          { data: dataMap.dataRpart['2020'] },
        ]
      },
      {
        title: { text: '2021全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2021'] },
          { data: dataMap.dataRpart['2021'] },
        ]
      },
      {
        title: { text: '2022全国抚养比指标' },
        series: [
          { data: dataMap.dataRsum['2022'] },
          { data: dataMap.dataRpart['2022'] },
        ]
      }
    ]
  };

  option && myChart.setOption(option);

})();
// 折线图1模块制作
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置
  option = {
    tooltip: {
      trigger: 'axis'
    },
    grid:{
      top:'15%',
      bottom:'15%',
      left:'10%'
    },
    legend: {
      show:false
    },
    toolbox: {
      top:'0%',
      right:'20%',
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2000', '2005', '2010', '2015', '2019']
    },
    yAxis: {
      type: 'value',
      splitLine:false,
      min: 70,
      axisLabel: {
        formatter: '{value} '
      }
    },
    series: [
      {
        name: '平均寿命（岁）',
        type: 'line',
        color:'#747066',
        data: [71.4, 73.0, 74.8, 76.3, 77.3],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }
    ]
  };
  option.graphic = [
    {
      type: 'text',
      right: '10%',
      top: '50%',
      style: {
        text: '我国居民平均寿命增长到77.3岁，\n比1949年增加了42岁，\n比1981年增加了9.5岁，\n比1990年增加了8.8岁',
        fontSize: 12
      }
    }
  ];
  
  option && myChart.setOption(option);
  
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // 5.点击切换效果
  $(".line h2").on("click", "a", function () {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option);
  });
})();
// 饼图2 模块制作
(function () {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
        grid: {
          //grid 组件离容器上下左右侧的距离
          left: "0%",
          right: "0%",
          top: "-10%",
          bottom: "0%",
          containLabel: true,
        },
        series: [
          {
            // 第一环
            type: "pie",
            zlevel: 1,
            silent: true,
            radius: ["40%", "41%"],
            hoverAnimation: false,
            color: "rgba(88,142,197,0.1)",
            // animation:false,    //charts3 no
            label: {
              normal: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [1],
          },
          {
            name: "",
            type: "pie",
            radius: ["55%", "62%"],
            labelLine: {
              length: 15,
              length2: 0,
              maxSurfaceAngle: 80,
            },
            itemStyle: {
              // 此配置
              normal: {
                borderWidth: 1,
                borderColor: "#233d40",
              },
            },
            label: {
              // position: "inside",
              textStyle: {
                color: "#233d40",
              },
              formatter: "{b|{b}：}{c}万人{abg|}\n{a|{a}}",
              borderRadius: 4,
              rich: {
                a: {
                  color: "#233d40",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 5,
                  // height: 0,
                },
                b: {
                  color: "#4C5058",
                  lineHeight: 22,
                },
                c: {
                  color: "rgba(255, 255, 255, 0.65)",
                  fontSize: 14,
                  fontWeight: "bold",
                },
                per: {
                  color: "rgba(0,0,0 ,0.6)",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            labelLayout: function (params) {
              const isLeft = params.labelRect.x < myChart.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points,
              };
            },
            data: [
              {
                value: 25277,
                name: "0-14岁",
                itemStyle: { normal: { color: "#31322c" } },
              },
              {
                value: 96871,
                name: "15-65岁",
                itemStyle: { normal: { color: "#847c74" } },
              },
              {
                value: 19064,
                name: "65岁以上",
                itemStyle: { normal: { color: "#f1eee5" } },
              },
            ],
          },
        ],
      };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//饼状图1
(function(){
  var myChart = echarts.init(document.querySelector('.pie .chart'));
  var option;
  option = {
      baseOption:{
          timeline:{
              axisType:'category',
              autoPlay:false,
              playInterval:1000,
              data:['2010年','2020年']
          },
          title: {
              text: '',
              left: 'center',
              top: 20,
              textStyle: {
                color: 'rgba(0,0,0 ,0.6)'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                colorLightness: [0, 1]
              }
            },
            series:[{
              type:'pie',
              radius:'55%',
              center:['50%','50%'],
            }

            ]
      },
      options :[
          {series: [
              {
                name: '2010年',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    { value: 1048, name: '65-69岁人口' },
                    { value: 735, name: '70-74岁人口' },
                    { value: 580, name: '75-79岁人口' },
                    { value: 484, name: '80-84岁人口' },
                    { value: 300, name: '85-89岁人口 ' },
                    { value: 234, name: '90-94岁人口' },
                    { value: 453, name: '95岁以上人口' }
                ].sort(function (a, b) {
                  return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                  color: '#374e51'
                },
                labelLine: {
                  lineStyle: {
                    color: 'rgba(0,0,0 ,0.4)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                },
                itemStyle: {
                  color: '#2f2818',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                  return Math.random() * 200;
                }
              }
  
          ]},
          {series: [
              {
                name: '2020年',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    { value: 986, name: '65-69岁人口' },
                    { value: 333, name: '70-74岁人口' },
                    { value: 324, name: '75-79岁人口' },
                    { value: 483, name: '80-84岁人口' },
                    { value: 666, name: '85-89岁人口 ' },
                    { value: 989, name: '90-94岁人口' },
                    { value: 2344, name: '95岁以上人口' }
                ].sort(function (a, b) {
                  return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                  color: '#374e51'
                },
                labelLine: {
                  lineStyle: {
                    color: 'rgba(0,0,0 ,0.4)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                },
                itemStyle: {
                  color: '#2f2818',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                  return Math.random() * 200;
                }
              }
  
          ]}
      ]
      
  }
    myChart.setOption(option);
})();
