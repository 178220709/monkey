// ==UserScript==
// @name         test demo
// @author       me
// @description  test demo
// @namespace
// @icon        http://img.duoluohua.com/appimg/script_dupanlink_icon_48.png
// @license     GPL version 3
// @encoding    utf-8
// @date        26/08/2013
// @modified    05/09/2014
// @include     *
// @require     http://cdn.bootcss.com/jquery/2.1.4/jquery.js
// @require     http://localhost:4041/libs/avalon/avalon.js
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

require.config({
    baseUrl:"http://localhost:4041/",
    urlArgs: {
        "*": "v=" + (new Date - 0)
        // "*": "v=" + "0.0.0.1"
    },

    paths: {
        "libs": "Content/libs",
        "avalon": "Content/libs/avalon",
        "lte": "Content/libs/AdminLTE",
        "public": "Scripts/Public",
        "page": "Scripts/Pages",
        "util": "Scripts/public/util"
    }
});

require(["Scripts/home"], function () {

});





