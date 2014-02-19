
module.exports = function(app){

app.controller('navCtrl', function($scope){
  $scope.items = [
    { text:'Home', link:'/home' },
    { text:'Profile', link:'/profile' },
    { text:'Settings', link:'/settings' },
    { text:'Stats', link:'/stats' },
  ]
})

}