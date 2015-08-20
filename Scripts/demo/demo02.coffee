define(["sc/widget/widget"], (widget)->
  console.log( "  ready to init widget")
  widget.init([
    {text:"btn1",callback:()-> alert("this is btn1 click callback")},
    {text:"btn2",callback:()-> alert("this is btn2 click callback")},
  ])
)