define([ "text!sc/widget/index.html", "css!sc/widget/widget.css",  ], (widgetHTML)->
  console.log("demo01 is loading! and widgetHTML is "+ widgetHTML)

  $.ajax({
    type: "get",
    async: false,
    url: "http://localhost:18080/api/jsonp/jsonp_test?code=CA1998",
    dataType: "jsonp",
    jsonp: "callback", #//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
    jsonpCallback: "callback", #//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
    success: (json)-> alert('您查询到航班信息：票价： ' + json.key1 + ' 元，余票： ' + json.key2 + ' 张。')
    error: ()->
  })

  $.getScript('http://pv.sohu.com/cityjson', () ->
    result = returnCitySN
    console.log result
  )

  $.getScript('http://localhost:18080/api/jsonp/jsonp_test?code=CA1998', () ->
    result = sfun
    result()
  )
  return
)