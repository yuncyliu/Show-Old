
var myChart = echarts.init(document.querySelector(".map .chart"));
echarts.registerMap("china", jsonData)
var data2020 = [
    { name: '北京市', population: 4298590, supportRatio: 17.768 },
    { name: '天津市', population: 3002688, supportRatio: 20.555 },
    { name: '河北省', population: 14812048, supportRatio: 21.142 },
    { name: '山西省', population: 6607025, supportRatio: 18.237 },
    { name: '内蒙古自治区', population: 4757233, supportRatio: 17.903 },
    { name: '辽宁省', population: 10954467, supportRatio: 24.371 },
    { name: '吉林省', population: 5551165, supportRatio: 21.473 },
    { name: '黑龙江省', population: 7395690, supportRatio: 21.080 },
    { name: '上海市', population: 5815462, supportRatio: 22.023 },
    { name: '江苏省', population: 18505345, supportRatio: 23.614 },
    { name: '浙江省', population: 12072684, supportRatio: 18.103 },
    { name: '安徽省', population: 11469236, supportRatio: 22.827 },
    { name: '福建省', population: 6637869, supportRatio: 15.949 },
    { name: '江西省', population: 7624781, supportRatio: 17.966 },
    { name: '山东省', population: 21220806, supportRatio: 22.897 },
    { name: '河南省', population: 17964048, supportRatio: 21.281 },
    { name: '湖北省', population: 11794995, supportRatio: 21.110 },
    { name: '湖南省', population: 13211281, supportRatio: 22.556 },
    { name: '广东省', population: 15565066, supportRatio: 11.824 },
    { name: '广西壮族自治区', population: 8363779, supportRatio: 19.006 },
    { name: '海南省', population: 1476599, supportRatio: 14.987 },
    { name: '重庆市', population: 7010440, supportRatio: 25.480 },
    { name: '四川省', population: 18163804, supportRatio: 25.283 },
    { name: '贵州省', population: 5931357, supportRatio: 17.924 },
    { name: '云南省', population: 7038030, supportRatio: 15.421 },
    { name: '西藏自治区', population: 310984, supportRatio: 8.128 },
    { name: '陕西省', population: 7591202, supportRatio: 19.214 },
    { name: '甘肃省', population: 4260991, supportRatio: 18.496 },
    { name: '青海省', population: 719402, supportRatio: 12.308 },
    { name: '宁夏回族自治区', population: 974142, supportRatio: 13.742 },
    { name: '新疆维吾尔自治区', population: 2917009, supportRatio: 11.119 },
    { name: '台湾省', population: 0, supportRatio: 0 }
];
var data2010 = [
    { name: '北京市', population: 2460108, supportRatio: 10.538 },
    { name: '天津市', population: 1684685, supportRatio: 10.431 },
    { name: '河北省', population: 9342266, supportRatio: 10.995 },
    { name: '山西省', population: 4117841, supportRatio: 10.056 },
    { name: '内蒙古自治区', population: 2836413, supportRatio: 9.649 },
    { name: '辽宁省', population: 6750752, supportRatio: 13.170 },
    { name: '吉林省', population: 3626548, supportRatio: 10.530 },
    { name: '黑龙江省', population: 4992615, supportRatio: 10.382 },
    { name: '上海市', population: 3469655, supportRatio: 12.464 },
    { name: '江苏省', population: 12574637, supportRatio: 14.296 },
    { name: '浙江省', population: 7558633, supportRatio: 12.054 },
    { name: '安徽省', population: 8931533, supportRatio: 14.203 },
    { name: '福建省', population: 4212388, supportRatio: 10.299 },
    { name: '江西省', population: 5099258, supportRatio: 10.785 },
    { name: '山东省', population: 14130461, supportRatio: 13.227 },
    { name: '河南省', population: 11968210, supportRatio: 11.832 },
    { name: '湖北省', population: 7973958, supportRatio: 11.803 },
    { name: '湖南省', population: 9555853, supportRatio: 13.456 },
    { name: '广东省', population: 10152391, supportRatio: 8.899 },
    { name: '广西壮族自治区', population: 6036234, supportRatio: 13.382 },
    { name: '海南省', population: 982246, supportRatio: 11.183 },
    { name: '重庆市', population: 5024394, supportRatio: 16.446 },
    { name: '四川省', population: 13109909, supportRatio: 15.191 },
    { name: '贵州省', population: 4461272, supportRatio: 13.189 },
    { name: '云南省', population: 5085327, supportRatio: 10.644 },
    { name: '西藏自治区', population: 230365, supportRatio: 7.221 },
    { name: '陕西省', population: 4796819, supportRatio: 11.111 },
    { name: '甘肃省', population: 3180858, supportRatio: 11.185 },
    { name: '青海省', population: 531899, supportRatio: 8.662 },
    { name: '宁夏回族自治区', population: 609295, supportRatio: 8.851 },
    { name: '新疆维吾尔自治区', population: 2107617, supportRatio: 8.871 },
];
var currentYear = '2010';
var currentIndicator = 'population';
function setOption(year, indicator) {
    var data = year === '2010' ? data2010 : data2020; // Calculate the maximum values for population and supportRatio if needed 
    var maxPopulation = Math.max(...data.map(item => item.population));
    var maxSupportRatio = Math.max(...data.map(item => item.supportRatio));
    var visualMax = indicator === 'population' ? maxPopulation : maxSupportRatio; // Assuming a formatter is defined to format the tooltip text 
    myChart.setOption({
        visualMap: {
            type: 'continuous',
            min: 0,
            max: visualMax,
            inRange: {
                color: ['#afb2be', '#999c7d', '#83866b', '#6e6f59', '#585947']
            },
            calculable: true,
            text: ['高', '低'],
            orient: 'horizontal',
            left: '10%',
            bottom: '0%'
        },
        
        series: [{
            type: 'map',
            map: 'china',
            data: data.map(item => ({
                name: item.name,
                value: item[indicator]
            })),
            label: {
                show: true,
                formatter: '{b}'
            },
            itemStyle:{
                normal:{
                    areaColor:'#dcd9bf',
                    borderColor:'#d1cdaa'
                },
                emphasis:{
                    areaColor:'#dcd9bf',
                }
               
            }
        }]
    });
}
//  listeners for buttons
document.querySelectorAll('#controls button').forEach(btn => {
    btn.addEventListener('click', function () {
        if (this.id.startsWith('year')) {
            document.querySelectorAll("#controls button[id^='year']").forEach(b => b.classList.remove('active'));
        } else {
            document.querySelectorAll("#controls button:not([id^='year'])").forEach(b => b.classList.remove('active'));
        } 
        this.classList.add('active');
        if (this.id.startsWith('year')) {
            currentYear = this.id.replace('year', '');
        } else {
            currentIndicator = this.id;
        } 
        setOption(currentYear, currentIndicator);
    });
}); 
setOption(currentYear, currentIndicator);
document.querySelector('#year2010').classList.add('active');
document.querySelector('#population').classList.add('active');
