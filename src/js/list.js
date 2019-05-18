$(function () {
    function Listpage() {
        this.ipage = 12;//一个页面渲染12条数据
        this.pageno = 1;//第几页
        this.lastpage;//总页数，也可以说最后一页
        this.ttpage;//数据总条数
        // this.sorttype;//根据什么排序
        this.sortway = "ASC";//升序还是降序
        this.sortswitch = true;
    }
    Listpage.prototype.init = function () {
        var _this = this;
        this.render();
        this.clickevent();
        this.sortev();
    }
    Listpage.prototype.sortev = function () {
        var _this = this;
        $('.goodsdesc').click(function () {//根据什么排序事件
            $(this).addClass('sortactive').siblings().removeClass('sortactive');
            if ($(this).html() == "价格") {//根据价格排序
                // console.log(78559);
                _this.sorttype = "now_price";
                if (_this.sortswitch) {//给个开关判断升序降序
                    _this.sortway = "ASC";//升序
                }
                else {
                    _this.sortway = "DESC";//降序
                }

            } else if ($(this).html() == "销量") {
                _this.sorttype = "sale_volumn";
                if (_this.sortswitch) {//给个开关判断升序降序
                    _this.sortway = "ASC";//升序
                }
                else {
                    _this.sortway = "DESC";//降序
                }
            }
            _this.sortswitch = !_this.sortswitch;
            _this.render();
        });
    }
    Listpage.prototype.render = function () {//分页请求数据的部分
        var _this = this;
        $.ajax({
            type: 'get',
            url: '../api/list.php',
            data: {
                'page': _this.pageno,
                'num': _this.ipage,
                'type': _this.sorttype,
                'order': _this.sortway
            },
            success: function (str) {
                var arr = JSON.parse(str);
                // console.log(arr.total);
                // console.log(arr.data);
                var html1 = arr.data.map(function (item) {
                    return `  <li>
                        <div class="pro_sketch">
                            <a href="#" data-id="${item.id}">
                            <img src="../images/${item.img.split("&")[0]}" alt="" class="bigimg1"></a>
                        </div>
                        <div class="small_img">
                            <dl class="clearfix">
                    ${item.img.split("&").map(function (it) {
                        return `<dd><img src="../images/${it}" alt=""></dd>`
                    }).join("")}
                        </dl>
                        </div>
                        <div class="benefit_spot">
                            <div class="sale_icon">
                                <span class="now_pri">￥
                                    <span class="pri_inse1">${item.now_price}</span> </span>
                                <span class="ori_pri">￥
                                    <span class="pri_inse2">${item.ori_price}</span> </span>
                            </div>
                        </div>
                        <div class="pro_tit">
                            <span class="pro_tit_cont">${item.title}</span>
                        </div>
                    </li>`
                }).join("");
                $('.pro_list').html(html1);
                _this.lastpage = Math.ceil(arr.total / _this.ipage);//总页数或最后一页显示的数据
                // console.log(_this.lastpage);
                _this.ttpage = arr.total;//总条数
                _this.pagedraw();//分页方法
                _this.pageturn();//页面跳转
                _this.minimgtab();//小图片放大
            }
        });
    }
    Listpage.prototype.pageturn = function () {//页面跳转
        $('.pro_sketch').on('click', 'a', function () {
            var cid = $(this).attr('data-id');
            location.href = "detail.html?" + cid;
        });

    }
    Listpage.prototype.minimgtab = function () {//小图标放大
        $('.small_img').on('mouseover', 'img', function () {
            var srcpath = $(this).attr('src');
            var srcpath = $(this).attr('src');
            $(this).parent().parent().parent().prev().children().children().attr('src', srcpath);
        });
    }
    Listpage.prototype.clickevent = function () {//分页点击事件
        var _this = this;

        $('#page').on('click', 'a', function () {

            if ($(this).html() == $('#firstPage').html()) {
                _this.pageno = 1;
                // console.log('点击回到首页')
            }
            else if ($(this).html() == $('#prePage').html()) {
                if (_this.pageno <= 1) {
                    _this.pageno = 1;
                } else {
                    _this.pageno--;
                    // console.log('点击上一页');
                }
            }
            else if ($(this).html() == $('#nextPage').html()) {
                if (_this.pageno >= _this.lastpage) {
                    _this.pageno = _this.lastpage;
                    // console.log('点击下一页')
                } else {
                    _this.pageno++;
                }
            }
            else if ($(this).html() == $('#lastPage').html()) {
                // console.log('点击到最后一页');
                _this.pageno = _this.lastpage;
            }
            else {
                console.log(12345);
                _this.pageno = $(this).html();
                _this.render();
                _this.pagedraw();
                if (_this.pageno != 1) {
                    $('#prePage').css('color', 'black');
                    console.log(0)
                    $('#firstPage').css('color', 'black');
                }
                // $(this).addClass('active').siblings().removeClass('active');
            }

        });
    }
    Listpage.prototype.pagedraw = function () {//分页按钮生成的方法
        var _this = this;
        $('#page').paging({
            pageNo: _this.pageno,//第几页
            totalPage: _this.lastpage,//一共多少页
            totalSize: _this.ttpage,//一共多少数据
            callback: function (num) {
                _this.render(num);
                _this.clickevent();
            }
        });
        // $('#page a:eq(2)').addClass('active');
        _this.clickevent();
    }

    var listp = new Listpage;
    listp.init();
});