
var app = angular.module('mainModule', ['ngRoute', 'ngAnimate'])

require('./directives/draggable')(app)
require('./directives/click')(app)

require('./controllers/nav')(app)
require('./controllers/root')(app)
require('./controllers/users')(app)


app.config(['$routeProvider', function($routeProvider){

  $routeProvider
  .when('/home', {
    controller: 'UserCtrl',
    templateUrl: 'src/views/home.html'
  })
  .when('/settings', {
    controller: 'UserCtrl',
    templateUrl: 'src/views/settings.html'
  })
  .when('/profile', {
    controller: 'UserCtrl',
    templateUrl: 'src/views/profile.html'
  })
  .when('/stats', {
    controller: 'UserCtrl',
    templateUrl: 'src/views/stats.html'
  })

}])
