define(["text!sc/widget/index.html", "css!sc/widget/widget.css",], (widgetHTML)->
  console.log("demo01 is loading! and widgetHTML is " + widgetHTML)

  $("body").append(widgetHTML)
  nav = $(".js-widget")
  $("#toc-actuator").click(()->

    nav.animate({ left: 10 })
  )

  return
)