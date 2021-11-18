/* 
rem.js 适配文件

*/
;
(function(win){
    // doc,获得整个document文档
    var doc = document;
    // docEl,获得整个页面的所有标签元素
    var docEl = document.documentElement;
    // console.log(doc);
    // console.log(docEl);
    // console.log("rem 666");
    var metaEl = doc.querySelector('meta[name="viewport"]');
    //  获取设备像素比
    var devicePixelRatio = win.devicePixelRatio;
    var tid;
    metaEl.setAttribute("content","initial-scale=.5, maximum-scale=.5, minimum-scale=.5,user-scalable=no viewport-fit=cover")
    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        // navigator.userAgent ，只读字符串，声明了浏览器用于http请求的用户代理头的值
        var ua = navigator.userAgent.toLowerCase();
        // console.log(ua);
        // 当ua中不包含ipad时，进入条件，即当用户使用的设备是普通手机时，进入条件
        if(!/ipad/.test(ua)){
            // console.log("普通手机进入本条件");
            if(width / 2 >750){
                width = 750 * 2;
            }
            var rem  = width / 10;
            docEl.style.fontSize = rem + 'px';
        }
        win.addEventListener('resize',function(){
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        },false);
        win.addEventListener('pageshow',function(e){
            if(e.persisted){
                cleatTimeout(tid);
                tid = setTimeout(refreshRem,300);
            }
        },false)
        // console.log(width);
    }
    refreshRem();
})(window)