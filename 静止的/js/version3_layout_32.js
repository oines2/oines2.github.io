$(function () {



    //解决兼容问题
    var userAgent = navigator.userAgent.toLowerCase();
    jQuery.browser = {
        version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
        safari: /webkit/.test(userAgent),
        opera: /opera/.test(userAgent),
        msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
        mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
    };

    if ($.browser.msie && ($.browser.version == "7.0" || $.browser.version == "8.0")) {
        $(".indexmainB .indexnav ul").css({ "padding-left": 154 });
        $(".indexnav ul").css({ "padding-left": 30 });
        if ($(".indexmainB").length == 0) { $(".indexnav ul").css({ "padding-left": 70 }); }
    };

});
function swidthnum(b) {
    var distance = b.width()
        + parseFloat(b.css("margin-right"))
        + parseFloat(b.css("padding-right"))
        + parseFloat(b.css("padding-left"));
    return distance;
}
function clickHonce(leftBtn, rightBtn, _this, num) {
    var lenLi = _this.find("ul li").length;
    var distance = swidthnum(_this.find("ul li"));
    _this.find("ul").css("width", distance * lenLi);
    var i = 0;
    _this.find(leftBtn).click(function () {
        distance = swidthnum(_this.find("ul li"));
        if (lenLi > num) {
            if (!_this.find("ul").is(":animated")) {
                if (i > 0) { i --; } else { return false; }
                _this.find("ul").animate({ "margin-left": -distance * i }, 500);
            }
        }
    })
    _this.find(rightBtn).click(function () {
        distance = swidthnum(_this.find("ul li"));
        if (lenLi > num) {
            if (!_this.find("ul").is(":animated")) {
                if (i < lenLi - num) { i ++; } else { return false; }
                _this.find("ul").animate({ "margin-left": -distance * i }, 500);
            }
        }
    })
}
function clickHonce2(leftBtn, rightBtn, _this,dot, num) {
    var lenLi = _this.find("ul li").length;
    var distance = swidthnum(_this.find("ul li"));
    _this.find("ul").css("width", distance * lenLi);
    var i = 0;
    var j = 0;
    if (lenLi > num) {
        for (var x = lenLi; x > 0;) {
            x -= num;
            _this.find(dot).append('<a href="javascript:;"></a>');
        }
        _this.find(dot).find("a").eq(j).addClass("cur");
        _this.find(dot).find("a").each(function () {
            $(this).click(function () {
                var nowindex = $(this).index();
                $(this).addClass("cur").siblings().removeClass("cur");
                i = nowindex * num;
                j = nowindex;
                _this.find("ul").animate({ "margin-left": -distance * i }, 500);
            })
        })
    }
    _this.find(leftBtn).click(function () {
        if (lenLi > num) {
            if (!_this.find("ul").is(":animated")) {
                if (i > 0) { i -= num;j-- } else { return false; }
                _this.find("ul").animate({ "margin-left": -distance * i }, 500);
                _this.find(dot).find("a").removeClass("cur");
                _this.find(dot).find("a").eq(j).addClass("cur");
            }
        }
    })
    _this.find(rightBtn).click(function () {
        if (lenLi > num) {
            if (!_this.find("ul").is(":animated")) {
                if (i < lenLi - num) { i += num; j++} else { return false; }
                _this.find("ul").animate({ "margin-left": -distance * i }, 500);
                _this.find(dot).find("a").removeClass("cur");
                _this.find(dot).find("a").eq(j).addClass("cur");
            }
        }
    })
}

$(function () {
    $(".headsearch").hover(function () {
        $(this).find(".searchbox").show();
    }, function () {
        $(this).find(".searchbox").hide();
    })

    $(".footweixin").hover(function () {
        $(this).find("img").show();
    }, function () {
        $(this).find("img").hide();
    })

    //首页
    $(".indexlump1list ul li").each(function () {
        var nowindex = $(this).index();
        if (nowindex % 4 == 0) {
            $(this).addClass("li1");
        } else if (nowindex % 4 == 1) {
            $(this).addClass("li2");
        } else if (nowindex % 4 == 2) {
            $(this).addClass("li3");
        } else if (nowindex % 4 == 3) {
            $(this).addClass("li4");
        }

        $(this).hover(function () {
            $(this).find(".slidebox").css({ "padding-left": "12px","padding-right":"12px" });
            $(this).find(".slidebox").stop().animate({ "top": 0,"padding-top":"27px" }, 500);
            $(this).find(".slidebox .name2").stop().animate({ "line-height": "26px" }, 500);
            $(this).find(".slidebox .name2").css({ "font-size": 18 });
        }, function () {
            var _this = $(this);
            $(this).find(".slidebox").stop().animate({ "top": 125,"padding-top":"0px"}, 300);
            $(this).find(".slidebox .name2").stop().animate({ "line-height": "37px" }, 300, function () {
                $(this).css({ "font-size": 14 });
                _this.find(".slidebox").css({ "padding-left": 0,"padding-right":0 })
            });
            
        })
    })
    clickHonce(".prevbtn", ".nextbtn", $(".indexlump1M"), 4);

    $(".indexexpressL dl").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    })

    $(".footer .friendlink").hover(function () {
        $(this).addClass("hover");
        $(this).find(".links").stop().slideDown();
    }, function () {
        $(this).removeClass("hover");
        $(this).find(".links").stop().slideUp();
    })
    $(".navbtn").on("touchstart", function (event) {
        if (!$(this).hasClass("show")) {
            $(".header .nav").stop().slideDown();
            $(this).addClass("show");
        } else {
            $(".header .nav").stop().slideUp(500, function () {
                $(this).removeAttr("style");
            });
            $(this).removeClass("show");
        }
    })
    $(".navbtn").hover(function () {
        
    }, function () {
        $(".header .nav").stop().slideUp(500, function () {
            $(this).removeAttr("style");
        });
        $(this).removeClass("show");
    })
    
    $(".header .nav").hover(function () {
        var winW = $(window).width();
        if (winW < 991) {
            $(".header .nav").stop().slideDown();
        }
    }, function () {
        var winW = $(window).width();
        if (winW < 991) {
            $(".header .nav").stop().slideUp(500, function () {
                $(this).removeAttr("style");
            });
        }
    })

    //内页
    $(".insidenavM .nownav").click(function () {
        if ($(this).parents(".insidenavM").hasClass("show")) {
            $(this).parents(".insidenavM").find("ul").stop().slideUp(500, function () {
                $(this).removeAttr("style");
            });
            $(this).parents(".insidenavM").removeClass("show");
        } else {
            $(this).parents(".insidenavM").find("ul").stop().slideDown();
            $(this).parents(".insidenavM").addClass("show");
        }
    })
})