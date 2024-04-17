var videos = document.getElementsByTagName("video");
// 暂停函数
function pauseAll() {
    var self = this;
    [].forEach.call(videos, function (i) {
        // 将videos中其他的audio全部暂停
        i !== self && i.pause();
    })
}
// 给play事件绑定暂停函数
[].forEach.call(videos, function (i) {
    i.addEventListener("play", pauseAll.bind(i));
})