
module.exports = function(app){

app.directive('ngDraggable', function($document){
  return function(scope, element, attr){
    var height = element[0].clientHeight
    var width = element[0].clientWidth
    var pos, matrix, click
    pos = { x:0, y:0 }

    element.css({
      top: pos.x,
      left: pos.y,
      position: 'relative',
      cursor: 'pointer'
    })

    record_translation(pos, get_pos(element))

    function record_translation(local, global){
      matrix = {
        x: local.x - global.x,
        y: local.y - global.y
      }
    }
    function apply_translation(loc){
      loc.x = matrix.x + loc.x
      loc.y = matrix.y + loc.y
      return loc
    }

    element.on('mousedown', function(event){
      event.preventDefault()
      click = { x: event.offsetX, y: event.offsetY }
      $document.on('mousemove', mousemove)
      $document.on('mouseup', mouseup)
    })
    function mousemove(event){
      pos = {
        x: event.x - click.x,
        y: event.y - click.y
      }

      pos.x = Math.max(0, Math.min(pos.x, window.innerWidth - width))
      pos.y = Math.max(0, Math.min(pos.y, window.innerHeight - height))

      pos = apply_translation(pos)
      element.css({ top: pos.y+'px', left: pos.x+'px' })
    }
    function mouseup(){
      $document.unbind('mousemove', mousemove)
      $document.unbind('mouseup', mouseup)
    }
  }
})

function get_pos(elm) { 
  try {return elm.offset();} catch(e) {}
  var rawDom = elm[0]
  var _x = 0
  var _y = 0
  var body = document.documentElement || document.body
  var scrollX = window.pageXOffset || body.scrollLeft
  var scrollY = window.pageYOffset || body.scrollTop
  _x = rawDom.getBoundingClientRect().left + scrollX
  _y = rawDom.getBoundingClientRect().top + scrollY
  return { x:_x, y:_y }
}

}
