// ==UserScript==
// @name         下载种子 去广告
// @author      me
// @description
// @namespace
// @icon        http://img.duoluohua.com/appimg/script_dupanlink_icon_48.png
// @license     GPL version 3
// @encoding    utf-8
// @date        26/08/2013
// @modified    05/09/2014
// @include     *.happytogether2015.com/freeone/*
// @include     http://www.dygod.net/html/gndy/jddy/*/*.html
// @include     http://www.quanji.cc/*
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

var url = document.location.href;


//document.getElementById("down_btn").removeAttribute("onclick");
if( url.indexOf("happytogether2015")>=0 ){
    $("#down_btn").removeAttr("onclick");
}

if( url.indexOf("dygod")>=0 ){
    console.log("recognize dygod ");
    var a =  $("a[title='迅雷专用高速下载']");
    var table  = a.closest("table");
    var htmlStr = "<a about=''  > "

    table.append("<tr>  <td> <input style='width: 100%'  type='text' value='{0}' />   </td></tr>".format(a.html()))
}

if( url.indexOf("quanji")>=0 ){
   var urls =[];
    $("#ul1 .dwon_xl a").each(function(){
        urls.push($(this).attr("href"))
    });
    var result = urls.join("\n");

    unsafeWindow.result = result;

    $(".ckall").append("<textarea type='button' id='btnShowResult'  > </textarea>")
    $("#btnShowResult").html(result)

 }




