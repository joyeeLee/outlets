$(function () {
    function Indexpage() {
        // this.phonenum;
        // this.phonenum2;
    }
    Indexpage.prototype.init = function () {
        //侧边栏功能
        var _this = this;
        $('.right_guide').on('mouseover', '.right_guide_con', function () {//鼠标悬停侧边栏小图标时触发事件
            $(this).prev().css('display', 'block').animate({ left: -70 });

        });
        $('.right_guide').on('mouseout', '.right_guide_con', function () {//鼠标离开侧边栏小图标时触发事件
            $(this).prev().css('display', 'none').animate({ left: 0 });

        });

        $('.right_guide').on('click', 'li', function () {//小图标被点击时的事件
            // console.log($(this).html() == $('.right_guide li').eq(5).html());
            if ($(this).html() == $('.right_guide li').eq(5).html()) {
                // console.log(55555);
                //联系客服

            }
            else if ($(this).html() == $('.right_guide li').eq(6).html()) {

                //回到顶部
                _this.totop();

            } else {
                //侧边栏登录，购物车等部分
                $(this).parent().parent().animate({ right: 0 }, 500);
                // console
                if ($(this).html() == $('.right_guide li').eq(1).html()) {
                    if (_this.phonenum2) {
                        $('.side_container').hide();
                        $('.sele_all').show();
                        $('.cart_foot').show();
                    }
                    else {
                        $('.empty_cart').show();
                        $('.side_container').hide();
                    }

                }
                else if ($(this).html() == $('.right_guide li').eq(0).html()) {
                    if (_this.phonenum2) {

                    } else {
                        $('.side_container').show();
                        $('.sele_all').hide();
                        $('.cart_foot').hide();
                        $('.empty_cart').hide();
                    }
                }
            }

        });
        $('.close_side').click(function () {//关闭侧边栏
            $('.sideabr').animate({ right: -335 }, 500);
        });
        /*侧边栏登录功能*/
        this.calculate();//进入页面调用产生随机验证码的方法
        $('.cal_tab').click(function () {//点击验证码的地方切换其他的验证码
            this.calculate();
        }.bind(this));
        $('.sub_panel').click(function () {//点击登录按钮
            this.logincheck();
        }.bind(this));
        $('.divLoginQR').click(function () {//登录方式切换
            $(this).parent().hide();
            $(this).parent().siblings().show();
        });

        //首页导航栏的切换
        $('.nav_ul').on('mouseover', 'li a', function () {
            $(this).attr('class', 'active');
        });
        $('.nav_ul').on('mouseout', 'li a', function () {
            $(this).attr('class', '');
        });

        //分类
        $('.category').mouseover(function () {

            $('.type_sele').show();


        });
        $('.category').mouseout(function () {
            $('.type_sele').hide();
        });
        // $('.type_sele').mouseenter(function () {
        //     $('.type_sele').show();
        //     console.log(3);

        // });
        // $('.type_sele').mouseleave(function () {
        //     $('.type_sele').show();
        //     console.log(4)

        // });
        //轮播图切换
        // this.carousel();
        var carousel = new OutlineDrawing('banner1');
        carousel.init();

        //检测是否在登录状态
        this.isgetcookie();
    }
    Indexpage.prototype.calculate = function () {//验证码计算
        var randomnum1 = parseInt(Math.random() * 10);//随机验证码1
        var randomnum2 = parseInt(Math.random() * 10);//随机验证码2
        var randomcal = ['+', '-', '*', '/'];//装运算符的数组
        var randomcal_index = parseInt(Math.random() * 3);//用于调用运算符下标的随机数

        $('.num1').html(randomnum1);
        $('.num2').html(randomnum2);
        $('.opera').html(randomcal[randomcal_index]);
        // console.log(randomnum1, randomnum2, randomcal[randomcal_index]);
        switch (randomcal_index) {
            case 0:
                $('.cal_res').html(randomnum1 + randomnum2);
                break;
            case 1:
                $('.cal_res').html(randomnum1 - randomnum2);
                break;
            case 2:
                $('.cal_res').html(randomnum1 * randomnum2);
                break;
            case 3:
                $('.cal_res').html(randomnum1 / randomnum2);
                break;
        }
        // console.log($('.cal_res').html());
    }
    Indexpage.prototype.logincheck = function () {//登录跳转
        // var _this = this;
        $.ajax({
            type: 'post',
            url: 'api/login.php',
            data: {
                "userphonenum": $('.inp1_val').val(),
                "userpwdnum": $('.inp2_val').val(),
                "timeq": new Date()
            },
            success: function (str) {
                if (str == 1) {

                    if ($('.checkcode').val() == $('.cal_res').html()) {
                        this.phonenum = setCookie('userphonenum', $('.inp1_val').val(), 1);//登录成功设置cookie

                        // console.log(this.phonenum2)
                        // location.href = "index1.html";//页面跳转

                        // console.log(this.phonenum2)
                        $('.inp1_val').val("");
                        $('.inp2_val').val("");
                        $('.err_inf').html("");
                        $('.checkcode').val("");
                        // _this.isgetcookie(phonenum2);
                    }
                    else {
                        // console.log(111111);
                        $('.err_inf').html("验证码不正确");
                    }
                }
                else {
                    $('.err_inf').html("账户或密码不正确");

                }
            }.bind(this)
        });
    }
    Indexpage.prototype.totop = function () {//回到顶部的方法
        var scrollTop = window.scrollY; //获取当前的滚动距离 
        var timer = setInterval(function () {
            scrollTop -= 100; //步长
            if (scrollTop <= 0) { //临界值
                clearInterval(timer);
                window.scrollTo(0, 0);
            } else {
                window.scrollTo(0, scrollTop); //过渡效果
            }
        }, 30);
    }
    Indexpage.prototype.isgetcookie = function () {
        this.phonenum2 = getCookie('userphonenum');//登录成功获取cookie
        if (this.phonenum2) {
            // console.log(111111);
            $('.logingo').html(this.phonenum2).attr("href", "#");
            $('.free_reg').html("退出").attr("href", "html/login.html");
            $('.free_reg').click(function () {
                removeCookie('userphonenum');
            });
        }
        else {
            $('.side_container').show();
            $('.sele_all').hide();
            $('.cart_foot').hide();
        }
    }
    // Indexpage.prototype.carousel = function () {
    //     var iw = $('.banner_list li').outerWidth();
    //     // console.log(iw);
    //     $('.banner_list li').css('left', '0');
    //     $('.banner_list li').siblings().css('left', iw);
    // }
    var indexp = new Indexpage();
    indexp.init();
})
