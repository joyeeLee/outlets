$(function () {
    function ShopcarI() {
        this.goodprices = {};
    }
    ShopcarI.prototype.init = function () {
        this.romance();
        this.ischecked();
    }
    ShopcarI.prototype.romance = function () {//渲染购物车
        var _this = this;
        $.ajax({
            type: 'get',
            url: '../api/shopcar.php',
            success: function (str) {
                // console.log(str);
                var arr = JSON.parse(str);
                _this.prolen = arr.length;//有多少商品
                console.log(arr);
                var res = arr.map(function (item) {
                    return ` <ul data-id='${item.sc_id}'>
                    <li>
                        <div class="g_left">
                            <input type="checkbox" class="checkbtn">
                            <a href="###" id="g_img"><img src="../images/${item.img}" alt=""></a>
                            <h4>
                                <p class="g_title">

                                    <i></i>
                                    <a href="###">
                                       ${item.title}</a></p>   
                            </h4>
                        </div>
                        <h3 class="g_price">
                            <p>
                                ￥
                                <span>${item.price}</span> </p>
                        </h3>
                        <h3 class="up">
                            <input type="button" value="-" class="subtract">
                            <input type="text" value="${item.num}" class="num_pro">
                            <input type="button" value="+" class="addbtn">
                        </h3>
                        <h3 class="x_price">
                            ￥
                            <span class="subtotal">${(item.price * item.num).toFixed(2)}</span>
                        </h3>
                        <h3 class="favorite">
                           
                            <a href="###" class="del_data">删除</a>
                        </h3>
                    </li>
                </ul>`
                });
                $('.car_goods').html(res);
                $('.pro_list_txt').html(_this.prolen);//根据ajax传过来的数组的长度来判断购物车有多少个商品
                _this.subtrev();
                _this.addev();
                _this.evremove();
                _this.evtrigger(_this.prolen);
                // _this.ischecked();
            }
        });
    }
    ShopcarI.prototype.updatenum = function (num1, num2) {//更新数量
        $.ajax({
            type: 'get',
            url: '../api/shopcar.php',
            data: {
                "numval": num2,
                "p_id": num1
            },
            success: function (str) {
                // console.log(str);
            }
        })
    }
    ShopcarI.prototype.deldata = function (good_id) {//删除数据
        $.ajax({
            type: 'get',
            url: '../api/deldata.php',
            data: {
                'goods_id': good_id
            },
            success: function (str) {
                // console.log(str);
            }
        });
    }
    ShopcarI.prototype.subtrev = function () {//数量减少
        var _this = this;
        $('.up').on('click', '.subtract', function () {//点击- 数量减少
            _this.p_id = $(this).parents('ul').attr('data-id');
            _this.numval = parseInt($(this).next().val());//获取输入框内的值,即是想购买的该商品的数量
            _this.numval--;
            if (_this.numval <= 0) {//限制商品数量不能小于1
                _this.numval = 1;
            }
            _this.smalltot = _this.numval * parseFloat($(this).parent().siblings('.g_price').children().children().html());//小计的计算
            $(this).parent().siblings('.x_price').children().html(_this.smalltot.toFixed(2));//小计更新
            $(this).next().val(_this.numval);//页面的输入框的值的变换
            var ischecked = $(this).parent().siblings('.g_left').children().eq(0).prop('checked');//判断是否选中的状态
            var sumpri = 0;
            if (ischecked) {//如果在选中状态下的话，还点击了添加数量的按钮，总价也要跟着变化
                for (var att2 in _this.goodprices) {
                    if (att2 == _this.p_id) {
                        _this.goodprices[att2] = parseInt($(this).parent().siblings('.x_price').children().html());
                    }
                    sumpri += _this.goodprices[att2];
                }
                $('.sum_pri').html(sumpri.toFixed(2));
            }
            _this.updatenum(_this.p_id, _this.numval);//更新数据库
            _this.evtrigger();
        });
    }
    ShopcarI.prototype.addev = function () {//点击增加数量按钮
        var _this = this;
        $('.up').on('click', '.addbtn', function () {//点击+数量增加
            _this.p_id = $(this).parents('ul').attr('data-id');
            // console.log(_this.p_id);
            _this.numval = parseInt($(this).prev().val());
            _this.numval++;
            _this.smalltot = _this.numval * parseFloat($(this).parent().siblings('.g_price').children().children().html());//小计的计算
            $(this).parent().siblings('.x_price').children().html(_this.smalltot.toFixed(2));//小计更新
            $(this).prev().val(_this.numval);
            var ischecked = $(this).parent().siblings('.g_left').children().eq(0).prop('checked');//判断是否选中的状态
            var sumpri = 0;
            if (ischecked) {//如果在选中状态下的话，还点击了添加数量的按钮，总价也要跟着变化
                for (var att2 in _this.goodprices) {
                    if (att2 == _this.p_id) {
                        _this.goodprices[att2] = parseInt($(this).parent().siblings('.x_price').children().html());
                    }
                    sumpri += _this.goodprices[att2];
                }
                $('.sum_pri').html(sumpri.toFixed(2));
            }
            _this.updatenum(_this.p_id, _this.numval);//更新数据库
            _this.evtrigger();
        });
    }
    ShopcarI.prototype.evremove = function () {//点击删除商品
        $('.favorite').on('click', '.del_data', function () {//删除
            var goods_id = parseInt($(this).parents('ul').attr('data-id'));//根据整个商品那个框的data-id
            // console.log(goods_id);
            _this.deldata(goods_id);
            $(this).parents('ul').remove();
        });
    }
    ShopcarI.prototype.evtrigger = function (prolen) {
        var _this = this;
        // console.log(1111);
        this.smalltot = 1;
        $('.checkbtn').click(function () {//选中商品
            // console.log($(this).prop('checked'));
            _this.goodsid = parseInt($(this).parents('ul').attr('data-id'));//ul的data-id
            _this.goodsubtot = parseFloat($(this).parent().siblings('.x_price').children().html());//每个商品的小计
            _this.sumtot = 0;//总计
            _this.length = 0;//有多少个选中的
            if ($(this).prop('checked')) {
                _this.goodprices[_this.goodsid] = _this.goodsubtot;//把每个商品小计放在一个对象里面
                // console.log(_this.goodprices);
            } else {
                delete _this.goodprices[_this.goodsid];
                // console.log(_this.goodprices);
            }
            for (var attr in _this.goodprices) {
                _this.length++;//计算有多少件商品
                _this.sumtot += (_this.goodprices[attr]);
            }
            $('.sum_pri').html(_this.sumtot.toFixed(2));
            $('.pro_num').html(_this.length);
            console.log(_this.length)
            _this.ischecked(prolen, _this.length);
        });
    }
    ShopcarI.prototype.ischecked = function (length1, length2) {
        // console.log(length1, length2);
        var _this = this;
        this.pro_id = {};
        if ($('.checkbtn').prop("checked")) {
            // console.log(66363);
            if (length1 == length2) {//如果选中的商品等于渲染出来的商品长度，那么全选按钮的状态应该是选中的
                // console.log('全选选中');
                $('#check_all').prop("checked", true);
                // console.log(637373);
            }
            else {
                // console.log("全选未选中");
                $('#check_all').prop("checked", false);
            }
        }
        else {
            $('#check_all').prop("checked", false);
        }
        $('#check_all').click(function () {
            if ($(this).prop("checked")) {
                $('.checkbtn').prop("checked", true);
                // console.log($('.subtotal').html());
                // console.log(_this.goodprices);
                var sum2 = 0;
                var num3 = 0;
                $(".subtotal").each(function (item) {
                    sum2 += parseInt($(this).html());
                    // console.log(sum2)
                    num3++;
                });
                $('.sum_pri').html(sum2.toFixed(2));
                $('.pro_num').html(num3);
                // console.log(55353535);
            } else {
                $('.checkbtn').prop("checked", false);
            }

        });

        // if ($('#checked_all').prop("checked")) {
        //     $('.checkbtn').prop("checked");
        // }
    }
    var carshop = new ShopcarI();
    carshop.init();
});