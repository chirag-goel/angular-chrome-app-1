
chrome.app.runtime.onLaunched.addListener(function(){
  var screenWidth = screen.availWidth
  var screenHeight = screen.availHeight
  var height = 900
  var width = 750

  chrome.app.window.create('index.html', {
    bounds: {
      width: width,
      height: height,
      left: 0,
      top: 0
    }
  })
})
