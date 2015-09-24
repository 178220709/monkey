// ==UserScript==
// @name         PostSteelData
// @author      me
// @description
// @namespace
// @icon        http://img.duoluohua.com/appimg/script_dupanlink_icon_48.png
// @license     GPL version 3
// @encoding    utf-8
// @date        26/08/2013
// @modified    05/09/2014
// @include     http://finance.sina.com.cn/futures/quotes/*.shtml
// @include     http://localhost:10089/*.html
// @require     http://cdn.bootcss.com/jquery/2.1.4/jquery.js
// @grant       unsafeWindow
// @run-at      document-end
// @version     0.0.1
// ==/UserScript==

String.prototype.format = function () {
    var args = arguments;
    var reg = /\{(\d+)}/g;
    return this.replace(reg, function (g0, g1) {
        return args[+g1];
    });
};

var jsonp_url = "http://localhost:18080/spider/getSteel";
function PostSteelData (data){
    $.ajax({
        type: "post",
        async: false,
        data:data,
        url: jsonp_url,
        dataType: "jsonp",
        jsonp: "jsonpRequest", //传递给服务端的参数名，告诉服务端是否需要返回jsonp，值是随机的，由jQuery自动管理
        success: function(json) {
          console.log(json)
        },
        error: function(p1,p2,p3) {
            console.log(json)
        }
    });
}

function setData (data,fun){
    fun(data);
    return this
}

function doPostSteelData(){
    var data = {};
    data.Price =  $("#box-futures-hq-wrap .real-price ").text()
    data.DateTime =  $("#box-futures-hq-wrap .trade-time").text()
    PostSteelData(data);
}

$("#box-futures-hq-wrap .real-price ").css("cursor","pointer").click(function(){
    doPostSteelData();
    console.log("doPostSteelData")
});





