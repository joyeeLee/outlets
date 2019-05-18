$(function () {
    function Loginq() {
        this.divLoginQR = $('.divLoginQR');
        this.divLoginQR2 = $('.divLoginQR');
        this.userifo = $('.userifo');
        this.userpwd2 = $('.userpwd2');
        this.loginbtn1 = $('.loginbtn1');
        this.phonenum;
    }
    Loginq.prototype.init = function () {
        this.divLoginQR.click(function () {//点击这个按钮切换到二维码登录页面
            // console.log(111);
            $(this).parent().css("display", "none");
            $(this).parent().next().css("display", "block");
        });
        this.divLoginQR2.click(function () {//点击这个按钮切换到用户手机号和密码登录
            $(this).parent().css("display", "none");
            $(this).parent().prev().css("display", "block");
        });
        this.loginbtn1.click(function () {
            this.logincheck();
        }.bind(this));

    }
    Loginq.prototype.logincheck = function () {
        // console.log(this.userifo.val(), this.userpwd2.val());
        $.ajax({
            type: 'post',
            url: '../api/login.php',
            data: {
                "userphonenum": this.userifo.val(),
                "userpwdnum": this.userpwd2.val(),
                "timeq": new Date()
            },
            success: function (str) {
                // console.log(1);

                if (str == 1) {
                    this.phonenum = setCookie('userphonenum', $('.userifo').val(), 1);//登录成功设置cookie
                    location.href = "../index1.html";
                }
                else {
                    $('.errortip').css('display', 'block');
                    var timer = setTimeout(function () {
                        $('.errortip').css('display', 'none');
                    }, 3000);

                }
            }.bind(this)
        });
    }
    var loginw = new Loginq();
    loginw.init();
})