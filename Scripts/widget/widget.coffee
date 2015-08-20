define(["css!sc/widget/widget.css"], ()->
  unless widgetHTML
    widgetHTML = '<div class="js-widget" ms-important="js-widgetCtrl">
    <ul class="js-menu">
       <li  ms-repeat="menuList">
           <a href="javascript:void(0);"  ms-click="el.callback"  >{{el.text}}</a>
       </li>
    </ul>
    <a  class="js-tip" style="opacity: 1;">Show Menu</a>
    </div>'

  console.log("demo01 is loading! and widgetHTML is " + widgetHTML)
  $("body").append(widgetHTML)
  menu = $(".js-widget .js-menu")
  tip = $(".js-widget .js-tip")
  tip.click(()->
    if menu.css("right") == "0px"
      menu.animate({right: -80})
    else
      menu.animate({right: 0})
  )

  init = (menuList)->
    if !avalon.modules["js-widgetCtrl"]
      avalon.define("js-widgetCtrl", (vm)->
        vm.menuList = menuList
      )
    avalon.scan()
    return avalon.modules["js-widgetCtrl"]

  return {init: init}
)