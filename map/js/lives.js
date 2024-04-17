(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .top-content .left-content .left-content-container .chart1 '));
    var option;
    const lineStyle = {
        width: 2,
        opacity: 0.4
    };
    option = {
        title: {
            text: '2021-2023网民结构变化',
            textStyle: {
                fontSize: 12
            },
            subtext: '数据来自：\n\n《中国互联网络发展状况统计报告》',
            subtextStyle: {
                fontSize: 8
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        legend: {
            data: ['2021年', '2022年', '2023年'],
            right: '0',
            orient: 'vertical'
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '10岁以下', max: 20 },
                { name: '10-19岁', max: 20 },
                { name: '20-29岁', max: 20 },
                { name: '30-39岁', max: 20 },
                { name: '40-49岁', max: 20 },
                { name: '50-59岁', max: 20 },
                { name: '60岁及以上', max: 20 }
            ],
            fontSize: 8,
            radius: 58,//缩放
            center: ['55%', '55%'],//位置

            shape: 'circle',
            splitNumber: 5,
            axisName: {
                color: '#283747'
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
                    color: '#34495e'
                }
            }
        },
        series: [
            {
                lineStyle: lineStyle,
                type: 'radar',
                itemStyle: {
                    color: '#283747'
                },
                areaStyle: {
                    opacity: 0.1
                },
                data: [
                    {
                        value: [4.3, 13.3, 17.3, 19.9, 18.4, 15.3, 11.5],
                        name: '2021年'
                    },
                    {
                        value: [4.4, 14.3, 14.2, 19.6, 16.7, 16.5, 14.3],
                        name: '2022年'
                    },
                    {
                        value: [3.8, 14.7, 13.7, 19.2, 16.0, 16.9, 15.6],
                        name: '2023年'
                    }
                ]
            }
        ]
    };

    option && myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .top-content .left-content .left-content-container .chart2'));
    var option;
    const lineStyle = {
        width: 2,
        opacity: 0.4
    };
    option = {
        grid: { 
            bottom:'10%',
            top:'20%'
         },
        title: {
            text: '2017-2022年60岁及以上网民占比变化',
            textStyle: {
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{b}:{c}%'
        },
        toolbox: {
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
        color: ['#2e4053'],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2017', '2018', '2019', '2010', '2021', '2022', '2023']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} %'
            }
        },
        series: [
            {
                name: '老年人口变化',
                type: 'line',
                data: [5.2, 6.6, 6.7, 11.2, 11.5, 14.3, 15.6],
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                label: {
                    formatter: '{b}:{c}%', // 显示百分比，
                    position: 'outer',
                    alignTo: 'edge',
                    margin: 10
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
    var myChart = echarts.init(document.querySelector('.mainbox .bottom-content .bottom-left .bottom-left-container .chart3'));
    var option;
    const colors = ['#34495e', '#aeb6bf', '#aeb6bf'];
    option = {
        color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid:{
            top:'30%',
            bottom:'10%',
            left:'15%',
            right:'25%'
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['老年用户规模', '使用率']
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                // prettier-ignore
                data: ['即时通信', '网络视频', '互联网政务服务', '网络新闻', '网络支付']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '老年用户规模',
                position: 'right',
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} 万人'
                }
            },
            {
                type: 'value',
                name: '使用率',
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
                name: '老年用户规模',
                type: 'bar',
                barWidth:'50%',
                data: [10743, 10048, 9578, 9236, 8368]
            },
            {
                name: '使用率',
                type: 'line',
                yAxisIndex: 1,
                data: [90.6, 84.8, 80.8, 77.9, 70.6]
            }
        ]
    };


    option && myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .bottom-content .bottom-left .bottom-left-container .chart4'));
    var option;
    option = {
        title: [
            {
                text: '老年网民能独立完成\n\n网络活动比例',
                textStyle: {
                    fontSize: 11
                }
            }
        ],
        color: ['#85929e'],
        center: ['70%', '50%'],//位置ssss
        polar: {
            radius: ['20%', '60%']
        },
        
        angleAxis: {
            max: 75,
            startAngle: 75
        },
        radiusAxis: {
            type: 'category',
            data: [
                '出示公交码等',
                '叫车出行',
                '订票（门票、车票等）',
                '购买生活用品',
                '网上挂号问诊',
                '查找信息（地图等）',
                '使用网上银行'
            ]
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}%'
        },
        series: {
            type: 'bar',
            data: [69.7, 34.8, 33.9, 52.1, 33.0, 46.2, 32.8],
            coordinateSystem: 'polar',
            label: {
                show: true,
                position: 'top',
                formatter: '{b}: {c}%'
            }
        }
    };

    option && myChart.setOption(option);


})();
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .bottom-content .bottom-right .bottom-right-container .chart5'));
    var option;
    option = {
        title: [
            {
                text: '老年群体非网民规模',
                textStyle: {
                    fontSize: 12
                }
            }
        ],
        grid: { height: 75 },
        color: ['#85929e'],
        polar: {
            radius: [20, '80%']
        },
        radiusAxis: {
            max: 1.6
        },
        angleAxis: {
            type: 'category',
            data: ['2021', '2022', '2023'],
            startAngle: 75
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}亿人'
        },
        series: {
            type: 'bar',
            data: [1.26, 1.29, 1.56],
            coordinateSystem: 'polar',
            label: {
                show: true,
                position: 'middle',
                formatter: '{b}: {c}亿人'
            }
        },
        animation: false
    };


    option && myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .bottom-content .bottom-right .bottom-right-container .chart6'));
    var option;
    option = {
        dataset: {
            source: [
                ['score', '比例', 'product'],
                [20.1, 20.1, '买东西不方便'],
                [18.6, 18.6, '办事缴费麻烦'],
                [15.3, 15.3, '很难和家人朋友联系'],
                [14.7, 14.7, '看病挂号买药难'],
                [13.7, 13.7, '缺少休闲娱乐活动'],
                [13.4, 13.4, '很难买到车票'],
                [13.1, 13.1, '很难打车']
            ]
        },
        title: {
            text: '非网民的不便',
            textStyle: {
                fontSize: 12
            }
        },
        grid: {
            containLabel: true,
            left: '5%',
            right:'15%',
            top: '20%'
        },
        xAxis: { name: '比例' },
        yAxis: { type: 'category' },
        visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 13,
            max: 20,
            text: ['极其不便', '尚可'],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ['#aeb6bf', '#34495e', '#283747']
            }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: '比例',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
    };

    option && myChart.setOption(option);

})();
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .top-content .right-content .right-top .right-top-container .chart7 '));
    var option;
    // 漏斗图
    option = {
        title: {
            text: '老年人需求',
            subtext: '数据来自：亿欧智库-科技产业',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c}%'
        },
        calculable: false,
        series: [
            {
                name: '漏斗图',
                type: 'funnel',
                left: '5%',
                top: '20%',
                bottom: '7%',
                width: '40%',
                min: 0,
                max: 60,
                minSize: '0%',
                maxSize: '100%',
                sort: 'ascending', //设置漏斗图方向，
                //'ascending'，'descending'，'none'（表示按 data 顺序）
                gap: 8,
                legendHoverLink: false,
                labelLine: {
                    //视觉引导线样式
                    length: 30,
                    lineStyle: {
                        width: 10,
                        color: 'gray',
                        opacity: 0.4,
                        type: 'solid'
                    }
                },

                label: {
                    formatter: (data) => {
                        return data.data.tip;
                    },
                    color: ['#283747'],
                    fontSize: '30px'
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    normal: {
                        color: function (params) {
                            //自定义颜色渐变
                            var colorList = [
                                {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#5d6d7e' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#283747' // 100% 处的颜色
                                        }
                                    ],
                                    global: false // 缺省为 false
                                },
                                {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#85929e' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#2e4053' // 100% 处的颜色
                                        }
                                    ],
                                    global: false // 缺省为 false
                                },
                                {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#aeb6bf' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#34495e' // 100% 处的颜色
                                        }
                                    ],
                                    global: false // 缺省为 false
                                }
                            ];
                            return colorList[params.dataIndex];
                        }
                    }
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [
                    { value: 60, name: '生存需求', num: 1200, tip: '身体健康 行为安全' },
                    { value: 40, name: '消费需求', num: 1100, tip: '需求增加 消费升级' },
                    { value: 20, name: '精神需求', num: 800, tip: '社会联动 价值满足' }
                ]
            },
            {
                name: '漏斗图',
                type: 'funnel',
                left: '5%',
                top: '20%',
                bottom: '7%',
                width: '40%',
                min: 0,
                max: 60,
                minSize: '0%',
                maxSize: '100%',
                sort: 'ascending', //设置漏斗图方向，
                //'ascending'，'descending'，'none'（表示按 data 顺序）
                gap: 8,
                legendHoverLink: false,
                labelLine: {
                    //视觉引导线样式
                    length: 30,
                    lineStyle: {
                        width: 10,
                        color: 'gray',
                        opacity: 0.4,
                        type: 'solid'
                    }
                },

                label: {
                    position: 'inside',
                    formatter: (data) => {
                        return data.data.name;
                    },
                    color: ['#283747'],
                    fontSize: '30px'
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    normal: {
                        color: function (params) {
                            //自定义颜色渐变
                            var colorList = [
                                {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#5d6d7e' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#283747' // 100% 处的颜色
                                        }
                                    ],
                                    global: false // 缺省为 false
                                },
                                {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#85929e' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#2e4053' // 100% 处的颜色
                                        }
                                    ],
                                    global: false // 缺省为 false
                                },
                                {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#aeb6bf' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#34495e' // 100% 处的颜色
                                        }
                                    ],
                                    global: false // 缺省为 false
                                }
                            ];
                            return colorList[params.dataIndex];
                        }
                    }
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [
                    { value: 60, name: '生存需求', num: 1200, tip: '身体健康 行为安全' },
                    { value: 40, name: '消费需求', num: 1100, tip: '需求增加 消费升级' },
                    { value: 20, name: '精神需求', num: 800, tip: '社会联动 价值满足' }
                ]
            }
        ]
    };
    option.graphic = [
        {
            type: 'text',
            right: '30%',
            top: '30%',
            style: {
                text: '老年人渴望社会支持带来情感\n互动、社会认可和尊重的需要。'
            }
        },
        {
            type: 'text',
            right: '20%',
            top: '55%',
            style: {
                text: '老年人消费类型趋向多样化，\n消费需求升级态势明显。'
            }
        },
        {
            type: 'text',
            right: '10%',
            top: '80%',
            style: {
                text: '老年人对维持最基本的良好生存状态\n主要包括身体健康和行为安全。'
            }
        }
    ];

    option && myChart.setOption(option);

})();
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .top-content .right-content .right-bottom .right-bottom-container .chart9'));
    var option;
    var data = {
        "name": "我国首批适老化产品",
        "children": [
            {
                "name": "新闻资讯",
                "children": [
                    {
                        "name": "腾讯新闻",
                        value: 3321,
                    },
                    {
                        "name": "新浪微博",
                        "value": 3322
                    },
                    {
                        "name": "今日头条",
                        "value": 3322
                    }
                ]
            },
            {
                "name": "社交通讯",
                "children": [
                    { "name": "微信、QQ", "value": 8833 },
                    { "name": "电信移动联通营业厅", "value": 1732 },
                ]
            },
            {
                "name": "生活购物",
                "children": [
                    {
                        "name": "购物",
                        "children": [
                            { "name": "淘宝", value: 3321 },
                            
                            { "name": "拼多多", value: 3321 },
                            ]
                    },
                    {
                        "name": "美食外卖",
                        "children": [
                            { "name": "饿了么", value: 3321 },
                            { "name": "美团", value: 3321 },]
                    },
                    {
                        "name": "住房",
                        "children": [
                            { "name": "链家", value: 3321 },
                            { "name": "贝壳", value: 3321 },
                          ]
                    },
                    {
                        "name": "娱乐",
                        "children": [
                            { "name": "抖音", value: 3321 },
                            { "name": "喜马拉雅听书", value: 3321 },
                            { "name": "爱奇艺", value: 3321 },
                            
                            { "name": "全民K歌", value: 3321 },]
                           
                    },
                    {
                        "name": "工具",
                        "children": [
                            { "name": "百度", value: 3321 },
                            { "name": "搜狗", value: 3321 },
                        ]
                    },

                ]
            },
            {
                "name": "金融服务",
                "children": [
                    { "name": "支付类","children": [
                        { "name": "支付宝", value: 3321 },
                        { "name": "微信支付", value: 3321 },
                        ] },
                    { "name": "银行类", "children": [
                        { "name": "中国工商银行", value: 3321 },
                        { "name": "中国农业银行", value: 3321 },
                        { "name": "中国银行", value: 3321 },
                       ] },
                ]
            },
            {
                "name": "旅游出行",
                "children": [
                    { "name": "地图类",  "children": [
                    
                        { "name": "高德地图", value: 3321 },
                        { "name": "腾讯地图", value: 3321 },
                       ]  },
                    { "name": "网约车",  "children": [
                        { "name": "滴滴出行", value: 3321 },
                       ]  },
                    { "name": "票务类",  "children": [
                        { "name": "铁路12306", value: 3321 },
                       
                       ]  },
                ]
            },
            {
                "name": "医疗健康",
                "children": [
                    { "name": "寻医问诊类",  "children": [
                        { "name": "114健康", value: 3321 },
                        { "name": "好大夫在线", value: 3321 },
                       
                       ] },
                    { "name": "医药类",  "children": [
                        { "name": "京东到家", value: 3321 },
                        { "name": "叮当快药", value: 3321 },
                       ] },
                ]
            }
        ]
    };

    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',
                id: 0,
                name: 'tree1',
                data: [data],
                orient:'TB',//从上到下
                left: '5%',
                right: '7%',
                top: '8%',
                bottom: '30%',
                layout: 'orthogonal',
                itemStyle:{
                    symbol: 'emptyCircle',
                symbolSize: 6,
                color:'#2f4554'
                },
                
                edgeShape: 'curve',//控制是否为折线
                edgeForkPosition: '63%',
                initialTreeDepth: 2,
                lineStyle: {
                    width: 2
                },

                label: {
                    position: 'top',
                   
                    verticalAlign: 'middle',
                    align: 'center',
                    fontSize:8,
                },
                leaves: {
                    label: {
                        position: 'bottom',
                    rotate: -90,
                        verticalAlign: 'middle',
                        align: 'left',
                        
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    };

    option && myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .top-content .right-content .right-bottom .right-bottom-container .chart8'));
    var option;
    const axisData = [
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
        '2024'
      ];
      const data = ['9.7', '10.1', '10.5', '10.8', '11.4', '11.9', '12.6', '13.5'];
      const links = data.map(function (item, i) {
        return {
          source: i,
          target: i + 1
        };
      });
      links.pop();
      option = {
        title: {
          text: '2017-2024年我国适老化产品增速',
          textStyle:{
            fontSize:14
          }
        },
        grid:{
            top:'15%',
            bottom:'12%'
        },
        tooltip: {
          formatter: '{b}:{c}%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: axisData
        },
        yAxis: {
          min: 8,
          type: 'value'
        },
        series: [
          {
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 40,
            color: '5d6d7e',
            label: {
              show: true
            },
            edgeSymbol: ['circle', 'arrow'],
      
            edgeSymbolSize: [4, 10],
            data: data,
            links: links,
            lineStyle: {
              color: '#2f4554'
            }
          }
        ]
      };
      

    option && myChart.setOption(option);
})(); 
