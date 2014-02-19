
var app = angular.module('mainModule', ['ngRoute'])

require('./directives/draggable')(app)
require('./directives/click')(app)

require('./controllers/nav')(app)
require('./controllers/lists')(app)
require('./controllers/users')(app)


app.config(['$routeProvider', function($routeProvider){

  $routeProvider
  .when('/settings', {
    controller: 'UserCtrl',
    templateUrl: 'src/views/settings.html'
  })
  .when('/', {
    controller: 'UserCtrl',
    templateUrl: 'src/views/user-home.html'
  })

}])
