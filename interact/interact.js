//获取页面的每个按钮
var btns = document.getElementsByClassName("btn")
//获取内容盒子
var contents = document.getElementsByClassName("content")

//遍历每个按钮为其添加点击事件
for (var i = 0; i < btns.length; i++) {
    btns[i].index = i;
    btns[i].onclick = function () {
        //对当前点击的按钮赋予active类名及显示当前按钮对应的内容
        for (var j = 0; j < btns.length; j++) {
            btns[j].className = btns[j].className.replace(' active', '').trim();
            contents[j].className = contents[j].className.replace(' show', '').trim();
        }
        this.className = this.className + ' active';
        contents[this.index].className = contents[this.index].className + ' show';
    };

}


const menuItems = document.querySelectorAll('.menu-item');
const items = document.querySelectorAll('.item');

menuItems.forEach(function (item, index) {
    item.addEventListener('click', function () {
        // 移除所有栏目的 active 类
        menuItems.forEach(function (item) {
            item.classList.remove('active');
        });
        // 移除所有内容区域的 active 类
        items.forEach(function (item) {
            item.classList.remove('active');
        });
        // 给被点击的栏目添加 active 类
        item.classList.add('active');
        // 显示对应的内容区域
        items[index].classList.add('active');
    });
});





// 文本输入与删除的速度(间隔多少毫秒输入/删除一个字符)
const writeSpeed = 100


// 获取文本元素
const answer = document.querySelector('.answer')

// 获取文本内容
const answerContent = answer.innerHTML
const answerContentLen = answerContent.length

// 初始文本内容为空
answer.innerHTML = ''

// 要写入字符的索引
let idx = 0

// 保存定时器
let writeTimer = null


// 定时写入字符处理函数
function writing() {
    answer.innerHTML += answerContent[idx++]
    if (idx >= answerContentLen) {
        // 写完清除定时器
        clearInterval(writeTimer)
    }
}

// 定时写入一个字符
writeTimer = setInterval(writing, writeSpeed)


var audios = document.getElementsByTagName("audio");
// 暂停函数
function pauseAll() {
    var self = this;
    [].forEach.call(audios, function (i) {
        // 将audios中其他的audio全部暂停
        i !== self && i.pause();
    })
}
// 给play事件绑定暂停函数
[].forEach.call(audios, function (i) {
    i.addEventListener("play", pauseAll.bind(i));
})