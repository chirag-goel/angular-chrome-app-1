
module.exports = function(app){

app.controller('NavCtrl', function($scope, $rootScope, $location){
  $scope.currentView = 'home'
  
  $scope.items = [
    { text:'Home', link:'home' },
    { text:'Profile', link:'profile' },
    { text:'Settings', link:'settings' },
    { text:'Stats', link:'stats' },
  ]

  $scope.navigate = function(page){
    $location.path(page)
    // $scope.currentView = page
  }
})

}
