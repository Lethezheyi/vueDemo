/* 
作者：pzy
备注：移动端字体适配js
version:0.1
*/
;
(function(win){
    var doc = document; //返回整个document对象
    // console.log(doc);
    var docEl = doc.documentElement; //返回整个网页
    var _width;
    // console.log(docEl);
    var _t; //计时器
    function refreshRemFn(){
        //getBoundingClientRect方法返回元素的大小及其相对于视口的位置
        var _width = docEl.getBoundingClientRect().width; //获取指定对象的宽度，实际上就是整个网页的宽度
        // console.log(docEl.getBoundingClientRect().width);
        if(_width > 640){
            _width = 640; //判断其宽度是不是手机
        }
    }
    // 事件监听，当页面缩放时自动刷新字体大小
    win.addEventListener('resize',function(){
        clearTimeout(_t);
        _t = setTimeout(refreshRemFn,3000);//设置计时器，300毫秒后自动执行refreshRemFn函数
        // 我们设定1rem为100px
        var rem = _width / 6.4;
        docEl.style.fontSize = rem + 'px';
    },false);
    // 页面一打开就运行
    refreshRemFn();
})(window)