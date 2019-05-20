$(function () {
    function Reg() {
        this.reginput = $('#reg_val');//注册输入框的值
        this.reginfo = $('#reg_info');//注册输入框的提示信息
        this.pwdval = $('#pwd_val');//密码输入框id
        this.pwdinfo = $('#pwd_info');//密码输入框下面的id
        this.compwd = $('#com_pwd');//确认密码框的id
        this.pwdcomfinf = $('#pwd_comfinf');//确认密码提示信息
        this.vercodeimgd = $('#vercodeimgd');//验证码
        this.messreg = $('.mess_reg');
        this.isok1 = null;//注册手机号验证的开关
        this.n_isok = null;//注册手机号的第二个开关
        this.random_num = "";//生成随机数
        this.pwdiosk = null;//密码开关
        this.compwdisok = null;//密码确认开关
        this.verswitch = null;//手机验证码开关
        this.verimgswitch = null;
        this.isok2 = null;
    }
    Reg.prototype.init = function () {//初始化
        this.reginput.blur(function () {//手机注册输入框失去焦点
            this.regver();//验证注册手机号的函数调用
            if (this.reginput.val() == '') {//手机号输入框的值为空的话，那么提示信息不显示，并把提示信息字体颜色样式转换成黑色
                this.reginfo.html("").css('color', 'black');
                this.messreg.css('color', '#666');
            }
        }.bind(this));
        this.pwdval.focus(function () {//密码输入框聚焦事件
            this.pwdinfo.html("6-20位字符,可使用字母、数字或字符的组合").css('color', 'black');
        }.bind(this));
        this.pwdval.blur(function () {//密码失去焦点的时候进行验证
            this.pwdreg();
            if (this.pwdval.val() == '') {
                this.pwdinfo.html("").css('color', 'black');
            }
        }.bind(this));
        this.compwd.focus(function () {//确认密码输入框聚焦事件
            if (this.compwd.val() == '') {
                this.pwdcomfinf.html("请再次输入密码").css('color', 'black');
            }
        }.bind(this));
        this.compwd.blur(function () {//确认密码失去焦点
            var pwdval1 = this.pwdval.val();
            var pwdcomval = this.compwd.val();
            if (pwdcomval != '') {
                if (pwdcomval == pwdval1) {
                    this.pwdcomfinf.html("");
                    this.compwdisok = true;
                } else {
                    this.pwdcomfinf.html("两次密码输入不一致").css('color', 'red');
                    this.compwdisok = false;
                }
            } else {
                this.pwdcomfinf.html("").css('color', 'black');
                this.compwdisok = false;
            }
        }.bind(this));
        // ============================这里是随机验证码生成======================================
        var verifyCode = new GVerify("vercodeimgd");//使用插件，new一个GVerify对象，调用他下面的方法
        // var verrel = verifyCode.validate($('#ver_code1').val());//验证输入框的值和对应的验证码是否匹配，validate是GVerify下的一个方法
        $('#ver_code1').focus(function () {//图片验证码输入框聚焦
            $('#ver_inf').html("输入验证码").css('color', 'black');
        });
        $('#ver_code1').blur(function () {//图片验证码输入框失去焦点
            $('#ver_inf').html("");
        });
        $('#reg_but').click(function () {//点击注册按钮触发事件
            var verrel = verifyCode.validate($('#ver_code1').val());
            if (verrel) {
                $('#ver_inf').html('');
                this.verimgswitch = true;
            } else if ($('#ver_code1').val() == '') {
                $('#ver_inf').html('');
                this.verimgswitch = false;
            } else {
                $('#ver_inf').html("验证码不正确").css('color', 'red');
                this.verimgswitch = false;
            }
            if (this.isok2 && this.pwdiosk && this.compwdisok && this.verimgswitch && this.verswitch) {
                // console.log(111);
                this.userinsert();
            }
            // console.log(this.isok2, this.pwdiosk, this.compwdisok, this.verimgswitch, this.verswitch);
        }.bind(this));
        //=========================这里是手机验证码部分===================================================

        this.messreg.click(function () {//获取验证码点击事件
            // console.log(this.isok1);
            this.verifyphonemess();
            console.log(this.random_num);
        }.bind(this))
        $("#ver_code2").blur(function () {//验证码输入框失去焦点事件
            if ($('#ver_code2').val() == this.random_num) {
                this.verswitch = true;
                // console.log($('#ver_code2').val(), this.random_num);
            } else {
                this.verswitch = false;
            }
        }.bind(this))
    }
    Reg.prototype.regver = function () {//手机号注册验证
        var phone = this.reginput.val();
        var reg2 = /^1[3-9]\d{9}$/;//正则验证
        var regres = reg2.test(phone);
        // console.log(regres);
        if (regres) {//如果验证通过那么验证数据库的内容
            this.n_isok = true;
            $.ajax({
                type: 'get',
                url: '../api/reg.php',
                data: {
                    regver: this.reginput.val(),
                    timecatch: new Date()
                },
                //'regver=' + this.reginput.val(),
                success: function (str) {
                    if (str == 1) {
                        this.reginfo.html("您已经注册过了").css('color', 'red');
                        this.messreg.css('color', '#666');
                        this.isok1 = false;
                        this.isok2 = false;
                    }
                    else {
                        this.reginfo.html("");
                        this.messreg.css('color', 'black');
                        this.isok1 = true;
                        this.isok2 = true;
                        // console.log(this.isok1)
                    }
                }.bind(this)
            });
        }
        else {
            this.n_isok = false;
            this.reginfo.html("现在暂时只支持手机号注册！").css('color', 'red');
            this.messreg.css('color', '#666');
            this.isok1 = false;
            this.isok2 = false;
        }
    }
    Reg.prototype.pwdreg = function () {
        var preg = /[a-zA-Z0-9!-_$.]{6,20}/;
        var preg2 = /^[0-9]{6,11}$/;//只有数字，长度在6-11的长度提示密码过于简单
        var pwd = this.pwdval.val();
        var regres = preg.test(pwd);
        var regres2 = preg2.test(pwd);
        // console.log(regres2);
        if (regres) {
            if (regres2) {
                this.pwdinfo.html("您的密码过于简单,有被盗风险").css('color', 'red');
            }
            else {
                this.pwdinfo.html("");
            }
            this.pwdiosk = true;
        }
        else {
            this.pwdinfo.html("6-20位字符,可使用字母、数字或字符的组合").css('color', 'red');
            this.pwdiosk = false;
        }
    }
    Reg.prototype.verifyphonemess = function () {
        // console.log(this.random_num);
        if (this.isok1) {
            this.isok1 = !this.isok1;
            var num = 60;
            this.rannum();
            $.ajax({
                type: 'get',
                url: '../api/phonemess.php',
                data: {
                    mobile: this.reginput.val(),
                    tpl_id: 156985,
                    tpl_value: '%23code%23%3D' + this.random_num,
                    key: 'eeed7cc6040dbde772969dce2b18cab8',
                    timecatch: new Date()
                },
                // 'mobile=' + this.reginput.val() + '&tpl_id=156985&tpl_value=%23code%23%3D' + this.random_num + '&key=eeed7cc6040dbde772969dce2b18cab8',
                success: function (str) {
                    // console.log(str);
                }.bind(this)
            });

            var timer = setInterval(function () {
                num--;
                if (num == 0) {
                    clearInterval(timer);
                    this.random_num = "";
                    this.isok1 = false;
                    if (this.n_isok == true) {
                        this.messreg.val("获取验证码").css('color', 'black');
                        this.isok1 = !this.isok1;
                    } else {
                        this.messreg.val("获取验证码").css('color', '#666');
                    }
                } else {
                    this.messreg.val(num + "秒后重新获取").css('color', '#666');
                }
            }.bind(this), 1000);


        }
    }
    Reg.prototype.rannum = function () {//生成随机验四位数
        for (var i = 0; i < 4; i++) {
            var num2 = parseInt(Math.random() * 10);
            this.random_num += num2;
        }
    }
    Reg.prototype.userinsert = function () {
        console.log("hahha");
        if ($('.check1').prop("checked")) {
            $.ajax({
                type: 'post',
                url: '../api/reginsert',
                data: {
                    phonenum: this.reginput.val(),
                    password: this.pwdval.val(),
                    timecatch: new Date()
                },
                success: function (str) {
                    // console.log(str);

                    if (str == "yes") {//插入成功之后将所有输入框的值都清空
                        // $('.reg_val').val("");
                        // $('.ver_code').val("");
                        // 这里少个登录跳转
                        var makecookie = setCookie('userphonenum', $('#reg_val').val(), 1);
                        location.href = "../index.html";

                    }

                }.bind(this)
            })
        }
        else {
            alert("请同意协议");
        }

    }
    var reg1 = new Reg();
    reg1.init();
})