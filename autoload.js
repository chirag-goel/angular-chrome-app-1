
module.exports = function(){
  var files = []

  require('filefetcher')([
    { path:__dirname+'/src/js', type:'js', recursive:true, cb:include }
  ])

  function include(file){
    files.push("\trequire('"+file+"')(app)")
  }

  function compose(){
    return "module.exports = function(app){\n"+files.join("\n")+"\n}"
  }

  require('fs').writeFileSync('modules.js', compose())
}()
