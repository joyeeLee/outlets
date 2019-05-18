function OutlineDrawing(id) {
    this.box = document.getElementById(id);
    this.nextBut = this.box.getElementsByTagName("p")[1];
    this.prevBut = this.box.getElementsByTagName("p")[0];
    this.ul = this.box.children[0];
    this.lis = this.ul.children;
    this.h1 = this.box.children[1];
    this.span = this.h1.getElementsByTagName("a");
    this.lw = this.box.offsetWidth;
    this.now = 0;
    this.timer = null;
}

OutlineDrawing.prototype.init = function () {
    //第一张图片高亮
    var init_this = this;
    this.timer = setInterval(this.next.bind(this), 2000)//开启定时器
    this.nav();// 下标的渲染
    this.play(init_this)  //下标的点击事件
    var oldtime = new Date();//获取当前的时间

    //下一张点击事件
    this.nextBut.onclick = function () {

        if (new Date() - oldtime >= 800) { //判断两个时间的间隔是否大于800ms，大于执行
            this.next()
            this.inter()
        }
        oldtime = new Date();

    }.bind(init_this)

    //上一张点击事件
    this.prevBut.onclick = function () {
        if (new Date() - oldtime >= 800) {
            this.prev()
            this.inter()
        }
        oldtime = new Date();
    }.bind(this)

    //移除box框 开启定时器
    this.box.onmouseout = function () {
        init_this.timer = setInterval(init_this.next.bind(init_this), 2000)
    }
    //移进box框 清除定时器
    this.box.onmouseover = function () {
        clearInterval(init_this.timer)
    }
    // this.nav()
    this.inter()
}

//设置lis[this.now]图片高亮
OutlineDrawing.prototype.active = function () {
    for (var i = 0; i < this.lis.length; i++) {
        this.lis[i].className = '';

    }
    this.lis[this.now].className = "active2";
}
//下一张
OutlineDrawing.prototype.next = function () {
    // console.log(11111);
    this.now = ++this.now > this.lis.length - 1 ? 0 : this.now;
    this.inter();
    this.active();
}

//上一张
OutlineDrawing.prototype.prev = function () {
    this.now = --this.now < 0 ? this.lis.length - 1 : this.now;
    this.inter();
    this.active();
}


// //下标渲染
OutlineDrawing.prototype.nav = function () {
    var html = "";
    for (var i = 0; i < this.lis.length; i++) {
        html += '<span><a href="javascript: void (0);  "></a></span>';
    }
    this.h1.innerHTML = html;
}

//下标跟随高亮
OutlineDrawing.prototype.inter = function () {
    for (var i = 0; i < this.lis.length; i++) {
        this.span[i].className = "";
    }
    this.span[this.now].className = "active2";
}

//下标点击事件
OutlineDrawing.prototype.play = function (_this) {
    for (let j = 0; j < this.lis.length; j++) {
        this.span[j].onclick = function () {
            _this.now = j;
            _this.active();
            _this.inter();
        }
    }
}
