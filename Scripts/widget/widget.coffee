define(["text!sc/widget/index.html", "css!sc/widget/widget.css",], (widgetHTML)->
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

  return {init:init}

)