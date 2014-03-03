
module.exports = function(type){
  var fs = require('fs')
  var files = []

  if (type === 'dev') {
    var anim = fs.readFileSync('./build/lib/animate.css/animate.css', 'utf8')
    fs.writeFileSync('./assets/styles/animate.css', anim)
  } else {
    var anim = fs.readFileSync('./build/lib/animate.css/animate.min.css', 'utf8')
    fs.writeFileSync('./assets/styles/animate.css', anim)
  }

  require('filefetcher')([
    { path:__dirname+'/src/js', type:'js', recursive:true, cb:include }
  ])

  function include(file){
    if (!/main\.js/gi.test(file))
      files.push("\trequire('"+file+"')(app)")
  }

  function compose(){
    return "module.exports = function(app){\n"+files.join("\n")+"\n}"
  }

  fs.writeFileSync('./build/modules.js', compose())
}
