$(function () {
    function Detailpage() {

    }
    Detailpage.prototype.init = function () {
        this.turndata();

    }
    Detailpage.prototype.turndata = function () {//根据列表页传过来的id进行数据库查询渲染
        this.cid = decodeURI(location.search).slice(1);
        // console.log(cid)
        var _this = this;
        var P = new Promise(function (sucfn) {
            $.ajax({
                type: 'get',
                url: '../api/detail.php',
                data: {
                    "cid": _this.cid,
                },
                success: function (str) {
                    // console.log(str);
                    var arr = JSON.parse(str);
                    sucfn(arr);
                }
            })
        });
        P.then(function (data) {
            // console.log(data);
            var imgs = data[0]['img'].split('&');

            // console.log(imgs);
            var res = data.map(function (item) {
                return ` <div class="left_data">
                <div class="prev_img tabimg"></div>
                <ul class="small_img">
                ${item.img.split('&').map(function (item2) {
                    return `<li> <img src="../images/${item2}" alt=""> </li>`
                }).join('')}
                     </ul>
                <div class="next_img tabimg"></div>

            </div>
            <div class="master_img">
                <img src="../images/${imgs[0]}" class="bigimg1" alt="">
            </div>
            <div class="left_foot">
                <ul class="clearfix">
                    <li>
                        <div class="zp_sure pro_icon"></div>
                        <a href="">正品保障</a>
                    </li>
                    <li>
                        <div class="dd_lowpri pro_icon"></div>
                        <a href="">天天低价</a>
                    </li>
                    <li>
                        <div class="share1 pro_icon"></div>
                        <a href="">分享</a>
                    </li>
                    <li>
                        <div class="favorite1 pro_icon"></div>
                        <a href="">收藏商品</a>
                    </li>
                </ul>
            </div>
            <div class="right_cont">
                <p class="pro_title">
                    <span class="zgtb"></span>
                    <span>${item.title}</span>
                </p>
                <div class="price_panel">
                    <span>奥莱价:</span>
                    <span class="price_ori">
                        <span>￥</span>
                        <span class="pri_show">${item.now_price}</span>
                    </span>
                    <span class="price_now1">
                        <span>￥</span>
                        <span class="pri_line">${item.ori_price}</span>
                    </span>
                </div>
                <div class="imp_sale">
                    <div class="discount">
                        <i class="yh_txt">优惠</i>
                        <span>下单购满1件打9.00折/件</span>
                    </div>
                </div>
                <div class="choose_pan">
                    <ul class="clearfix">
                        <li class="att1">选择颜色：</li>
                        <li class="att2">
                            <div class="att22 pitch_on">k00</div>
                        </li>
                    </ul>
                    <ul class="c_size clearfix">
                        <li class="att1">选择尺码：</li>
                        ${item.size.split("&").map(function (item3) {
                    return `  <li class="att2">
                        <div class="att22">${item3}</div>
                        </li>`
                }).join('')}
                    </ul>
                    <ul class="clearfix" style=" border-bottom: 1px dashed #e6e6e6;padding-bottom:10px;">
                        <li class="att1 attother">
                            <div>选择数量</div>
                        </li>
                        <li class="sele_num">
                            <div class="input_num">
                                <input type="text" class="input_num_val" value="1">
                            </div>
                            <div class="add_subtract">
                                <input type="button" value="+" class="addbtn">
                                <input type="button" value="-" class="subtractbtn">
                            </div>
                        </li>
                        <li class="add_shopcar">
                            <input type="button" value="加入购物车" class="add_shopcarbtn">
                        </li>
                        <li class="phone_shop">
                            <span class="phone_img">
                                <img src="../images/icon_phone.png" alt="">
                            </span>
                            <span class="phonebuy">手机购买</span>
                            <span class="d_icon">
                                <img src="../images/more_unfold.png" alt="">
                            </span>
                            <div class="QR_icon">
                                <img src="../images/CggUFlzGqL2AFASsAAAIzT5J0Wc249.png" alt="">
                                <p>打开奥莱购app扫一扫</p>
                            </div>
                        </li>
                    </ul>
                    <ul class="clearfix aolets_service">
                        <li>奥莱服务:</li>
                        <li>
                            工厂直供
                        </li>
                        <li>
                            极速配送
                        </li>
                        <li>
                            专柜同步
                        </li>
                    </ul>
                </div>
            </div>`
            }).join('');
            $('.main').html(res);
            $('.c_size .att2').eq(1).children().addClass('pitch_on');
            _this.climouev();
            $(".bigimg1").imagezoomsl({//放大镜
                zoomrange: [3, 3]
            });
        });
    }
    Detailpage.prototype.climouev = function () {//事件的方法
        var _this = this;
        $('.small_img').on('mouseover', 'li', function () {//小图片放大
            // console.log(987365);
            var imgpath = $(this).children().attr('src');
            $('.master_img').children().attr('src', imgpath);
            $(this).children().css('border', '1px solid red').parent().siblings().children().css('border', 'none');
        });
        $('.c_size').on('click', '.att2', function () {//选择尺码
            $(this).children().addClass('pitch_on').parent().siblings().children().removeClass('pitch_on');
        });
        $('.input_num_val').keydown(function () {//限定数量输入框的值不能小于1
            var isnum = $.isNumeric($(this).val());
            // console.log($.isNumeric($(this).val()));
            if ($(this).val() <= 0 || $(this).val() == '' || isnum == false) {
                $(this).val(1);
            }

        });
        var num1 = parseInt($('.input_num_val').val());
        $('.addbtn').click(function () {//增加购买数量
            num1++;
            $('.input_num_val').val(num1);
        });
        $('.subtractbtn').click(function () {//减少购买数量
            // var num1 = parseInt($('.input_num_val').val());
            num1--;
            if (num1 > 0) {
                $('.input_num_val').val(num1);
            }
            else {
                $('.input_num_val').val(1);
            }
        });
        $('.add_shopcarbtn').click(function () {
            var pro_num = $('.input_num_val').val();//获取商品数量
            var size_type;//商品的尺寸
            for (var i = 0; i < $(".c_size .att2").size(); i++) {//获取尺寸的值
                if ($(".c_size .att22").eq(i).attr("class") == "att22 pitch_on") {
                    // console.log($(".c_size .att22").eq(i))
                    size_type = $(".c_size .att22").eq(i).html();
                    // console.log(size_type);
                }
            }
            var priceget = $('.pri_show').html();//商品的单价
            var tittxt = $('.zgtb').siblings().html();//商品的标题
            var getimg = $('.bigimg1').attr('src');
            var getimg2 = getimg.split('/')[2];

            // console.log(getimg2);
            $.ajax({
                type: 'get',
                url: '../api/insertshopcar.php',
                data: {
                    'pro_num': pro_num,
                    'size_type': size_type,
                    'priceget': priceget,
                    'tittxt': tittxt,
                    'getimg2': getimg2,
                    'cid2': _this.cid
                },
                success: function (str) {
                    // console.log(str);
                    if (str == 1) {//加入购物车成功之后弹出提示
                        $('.prom').css('display', 'block');
                        var timer = setTimeout(function () {
                            $('.prom').css('display', 'none');
                        }, 500);
                    }
                }
            });
        });
    }

    //下面的是留言功能

    function MessageDoard() {
        this.message = $("#y_mes");//留言信息
        this.sub_but = $("#sub");//提交
        this.isok = true;
    }
    MessageDoard.prototype.init = function () {
        this.sub()
        this.xun("content3");
    }
    MessageDoard.prototype.xun = function (ele) {


        $.ajax({
            type: "get",
            url: "../api/mes_select.php",
            success: function (str) {
                var arr = JSON.parse(str);
                var nu = 0;
                var html = arr[ele].map(function (item, i) {
                    nu = i;
                    return `<li>
                <h3 class="x_ative">
                somebody
        </h3>
                     <p class="m_content">${item.m_content}</p>
                     <p class="m_time">${item.m_time}</p>
                 </li>`
                }.bind(this)).join("");
                $(".board").html(html);
                $("#all_eva").html("全部评价(" + nu + ")")
            }.bind(this)
        })
    }
    //过滤信息
    MessageDoard.prototype.fuck = function (te) {
        var text = ["操", "MMP", "废物", "垃圾", "去你爸", "去你妈", "屌", "叼", "金三胖", "fuck"];
        text.forEach(function (item) {
            var reg = new RegExp(item, 'gi')
            te = te.replace(item, "***")
        })
        return te;
    }
    //提交
    MessageDoard.prototype.sub = function () {
        //过滤过的信息
        this.sub_but.click(function () {
            if (getCookie("userphonenum")) {
                var uer_name = getCookie("userphonenum");

                if (this.message.val() != "") {
                    this.isok = false;
                    this.guo_mes = this.fuck(this.message.val());
                    var time = new Date();
                    this.time = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate()
                    console.log(this.time)
                    $.ajax({
                        type: "get",
                        url: "../api/mes_board.php",
                        data: {
                            mes_content: this.guo_mes,
                            mes_time: this.time
                        },
                        success: function (str) {
                            this.xun("content3");
                            this.message.val("");
                        }.bind(this)
                    });
                } else {
                    alert("请写评语")
                }
            }
        }.bind(this))
    }
    var MDoard = new MessageDoard();
    MDoard.init();

    var details = new Detailpage();
    details.init();
});