// JavaScript Document
$(function () {
    if (navigator.appName == "Microsoft Internet Explorer" && navigator.userAgent.indexOf("MSIE 6.") > 0) {
        $('.CWhint,.masker02').show();
    }
    else if (navigator.appName == "Microsoft Internet Explorer" && navigator.userAgent.indexOf("MSIE 7.") > 0) {
        $('.CWhint,.masker02').show();
    }
    else if (navigator.appName == "Microsoft Internet Explorer" && navigator.userAgent.indexOf("MSIE 8.") > 0) {
        $('.CWhint,.masker02').show();
    }
    else if (navigator.appName == "Microsoft Internet Explorer" && navigator.userAgent.indexOf("MSIE 9.") > 0) {
        $('.CWhint,.masker02').show();
    }

    $('.CWclsoe,.CWhintrighthref').click(function () {
        $('.CWhint,.masker02').hide();
    })

});