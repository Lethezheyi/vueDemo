/* 
rem移动端样式自适应文件
*/
// console.log("xxx");
(function(win){
    var doc = document;
    var docEl = doc.documentElement;
    // 获取meta标签
    var metaEl = doc.querySelector('meta[name="viewport"');
    // console.log(metaEl);
    // viewport-fit=cover 设置页面占满整个屏幕
    metaEl.setAttribute('content','initial-scale=.5,maximum-scale=.5,minimum-scale=.5,user-scalable=no viewport-fit=cover')
    var _t; //定时器
    function remRefreshFn(){
        // getBoundingClientRect用于返回元素的大小，以及元素相对视口(viewport)的位置
        var width = docEl.getBoundingClientRect().width;
        // console.log(width);
        
        var _rem = width / 10;
        docEl.style.fontSize = _rem + 'px';
    }
    clearTimeout(_t);
    _t = setTimeout(function(){
        win.addEventListener('resize',()=>{
            remRefreshFn();
        })
    },300);
    remRefreshFn();
})(window)
