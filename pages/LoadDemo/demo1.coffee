String.prototype.format = (args...)->
  this.replace(/\{(\d+)}/g, (g0, g1)-> args[+g1])

require.config(
  baseUrl: "http://localhost:10089/"
  urlArgs:
    "Scripts/*": "v=" + (new Date - 0)
# "*": "v=" + "0.0.0.1"
  paths:
    "lib": "libs"
    "sc": "Scripts"
)

require(["lib/jquery/jquery-1.10.2",
         "lib/underscore/underscore"
        ],
  ()->

    return
)





