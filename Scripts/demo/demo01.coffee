define([ "text!sc/widget/index.html", "css!sc/widget/widget.css",  ], (widgetHTML)->
  console.log("demo01 is loading! and widgetHTML is "+ widgetHTML)

  $.ajax({
    type: "get",
    async: false,
    url: "http://localhost:18080/api/jsonp/jsonp_test?code=CA1998",
    dataType: "jsonp",
    jsonp: "callback", #//���ݸ�����������ҳ��ģ����Ի��jsonp�ص��������Ĳ�����(һ��Ĭ��Ϊ:callback)
    jsonpCallback: "callback", #//�Զ����jsonp�ص��������ƣ�Ĭ��ΪjQuery�Զ����ɵ������������Ҳ����д"?"��jQuery���Զ�Ϊ�㴦������
    success: (json)-> alert('����ѯ��������Ϣ��Ʊ�ۣ� ' + json.key1 + ' Ԫ����Ʊ�� ' + json.key2 + ' �š�')
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