// ==UserScript==
// @name         test demo
// @author       me
// @description  脚本油猴端入口 加载
// @namespace
// @icon        http://img.duoluohua.com/appimg/script_dupanlink_icon_48.png
// @license     GPL version 3
// @encoding    utf-8
// @date        26/08/2013
// @modified    05/09/2014
// @include     *
// @require     http://localhost:10089/libs/jquery/jquery-1.10.2.js
// @require     http://localhost:10089/libs/avalon/avalon.js
// @grant       unsafeWindow
// @run-at      document-end
// @version     0.0.1
// ==/UserScript==
require.config({
    baseUrl:"http://localhost:10089/"
});

String.prototype.format = function () {
    var args = arguments;
    var reg = /\{(\d+)}/g;
    return this.replace(reg, function (g0, g1) {
        return args[+g1];
    });
};
var str = "this is :{0} and {1} , and  {0}".format("arg1","arg2")

require(["Scripts/main?_v="+ (new Date - 0)], function () {

});







