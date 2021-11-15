/* 
js打飞机功能模块js

*/
// 引入common.js

// 采用原型模式进行设计

function airFn(_obj){
    // 初始化函数
    this.init(_obj);
}

airFn.prototype = {
    // 修复原型链
    constructor:airFn,
    // 初始化方法init,用于注册事件
    init:function(_domObj){
        var _self = this;
        // bulletNum 弹夹数，最大不超过10
        _self._bulletNum = 10;
        // 弹夹_bullets
        _self._bullets=[];
        // 飞船的数量
        _self._UFOsNum = 20;
        //飞船数组
        _self._UFOs = [];


        // 获取index页面的Dom元素
        _self.getDom(_domObj);
        _self.airMouseEvent();
        _self.airBulletClick();
        // 定时生成飞船
        setInterval(() => {
            _self.createUFO();
        }, 2000);
    },
    // 获取Dom
    getDom:function(_domObj){
        var _self = this;
        for(let i in _domObj){
            // i 是index
            // console.log(_domObj[i]);
            // 获取Dom节点作为属性存入到构造函数airFn中
            _self[_domObj[i]] = gId(_domObj[i]);
            // console.log(_self);
            // console.log(window);
        }
    },
    // 飞机跟随鼠标移动事件
    airMouseEvent:function(){
        var _self = this;
        // console.log(window);
        // 操作dom
        _self.wrap.onmousemove = function(e){
            // 获得鼠标的x轴和y轴
            // offsetLeft Dom对象的左边距，同样可以获得width\height\top
            let _lx = e.pageX - _self.wrap.offsetLeft - _self.airImg.offsetWidth/2;
            let _ly = e.pageY - _self.wrap.offsetTop - _self.airImg.offsetHeight/2;
            // 设置airImg的属性为当前的鼠标坐标
            _self.airImg.setAttribute('style','top:' + _ly + 'px;' + 'left:' + _lx + 'px');
        }    
    },
    // 点击发射子弹事件
    airBulletClick:function(){
        var _self = this;
        _self.airImg.onclick = function(){
            _self.createBullet();
        }

    },
    // 创建单个子弹
    createBullet :function(){
        var _self = this;
        let _bullet = createDom('div');
        //生成子弹,优化成固定的个数，且子弹生成后会开始移动
        if(_self._bullets.length<_self._bulletNum){
            let e = window.event;
            let _lx = e.pageX - _self.wrap.offsetLeft;
            let _ly = e.pageY - _self.wrap.offsetTop;
            // 设置子弹的属性为当前的鼠标坐标
            _bullet.setAttribute('style','top:' + _ly + 'px;' + 'left:' + _lx + 'px');
            _self.wrap.appendChild(_bullet);
            _self._bullets.push(_bullet);
            var n = _bullet.offsetTop;
            // 保存定时器为_s
            var _s = setInterval(function(){
                // 定时更改子弹的top属性并重新进行赋值，实现子弹动态射击
                n--;
                _bullet.setAttribute('style','top:' + n + 'px;' + 'left:' + _lx + 'px');
                // 获得飞船目标
                var _fireTraget_x = gId('wrap').querySelectorAll('span');
                // 判断子弹是否击中飞船的逻辑
                for(var i in _fireTraget_x){
                    if(_bullet.offsetLeft>_fireTraget_x[i].offsetLeft &&_bullet.offsetLeft<_fireTraget_x[i].offsetLeft + 50 && _bullet.offsetTop>_fireTraget_x[i].offsetTop &&_bullet.offsetTop<_fireTraget_x[i].offsetTop + 20){
                        // 设置击中的目标的样式
                        _fireTraget_x[i].setAttribute('class','targetSpan yes-boom');
                        // // 清除击中飞船的子弹
                        _self.wrap.removeChild(_bullet);
                        // 将击中飞船的子弹从弹夹中清空
                        _self._bullets.pop();
                        clearInterval(_s);
                        // 事件监听，用于等动画结束后再做清除操作
                        _fireTraget_x[i].addEventListener('transitionend',function(){
                            // 动画结束后清除被击中的飞船
                            _self.wrap.removeChild(_fireTraget_x[i]);
                            // 将击中的UFO从飞船集合中清除
                            _self._UFOs.pop(_fireTraget_x[i]);
                        },false);

                    }
                }
                // 子弹没有击中飞船的话，就按照下面的条件判断并清除子弹
                if(_bullet.offsetTop<0){
                    _self.wrap.removeChild(_bullet);
                    _self._bullets.pop();
                    clearInterval(_s);
                }
            },10);
        }
    },
    // 生成飞船
    createUFO(){
        var _self = this;
        let _UFO = createDom('span');
        if(_self._UFOs.length<_self._UFOsNum){
            // 设置飞船的随机位置，飞船生成后会定时向下移动
            _UFO.setAttribute('style','top:' + Math.floor(Math.random()*100) +'px;' + 
            'left:' + Math.floor(Math.random()*500) +'px;');
            _UFO.setAttribute('class','targetSpan no-boom');
            _self._UFOs.push(_UFO);
            _self.wrap.appendChild(_UFO);
            var _T = _UFO.offsetTop;
            var _L = _UFO.offsetLeft;
            var _s = setInterval(() => {
                _T++;
                // console.log(typeof _T);
                _UFO.setAttribute('style','top:' + _T +'px;' + 
                        'left:' + _L +'px;');
                if(_UFO.offsetTop > 500){
                    _self.wrap.removeChild(_UFO);
                    _self._UFOs.pop(_UFO);
                    clearInterval(_s);
                }
            }, 10);
        }
    }
}

new airFn(['wrap','airImg']);




