
module.exports = function(app){

app.controller('navCtrl', function($scope, $rootScope, $location){
  $scope.items = [
    { text:'Home', link:'/' },
    { text:'Profile', link:'/profile' },
    { text:'Settings', link:'/settings' },
    { text:'Stats', link:'/stats' },
  ]

  $scope.navigate = function(page){
    $location.path(page)
  }
})

}
