
module.exports = function(app){
  
app.controller('RootCtrl', function($scope, $rootScope, $location){
  $scope.initialize = function(){
    $scope.user = {
      name: 'Rob',
      rank: 'master',
      completed: 20000
    }
  }
})

}
