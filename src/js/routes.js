
module.exports = function(app){

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

}