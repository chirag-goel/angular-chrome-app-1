
var app = angular.module('dragModule', [])

require('./directives/draggable')(app)
// require('./controllers/lists')(app)

// app.config(function($router){
//   $router.when('/', {
//     controller: 'ListCtrl as list',
//     templateUrl: 'src/views/list.html'
//   })
// })
