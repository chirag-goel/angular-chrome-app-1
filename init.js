chrome.app.runtime.onLaunched.addListener(function(){
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 750,
      'height': 900
    }
  })
})
