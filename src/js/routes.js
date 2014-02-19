
var app = angular.module('sandbox', [])

require('./directives/draggable')(app)
require('./controllers/nav')(app)
// require('./controllers/lists')(app)

// app.config(function($router){
//   $router.when('/', {
//     controller: 'ListCtrl as list',
//     templateUrl: 'src/views/list.html'
//   })
// })
