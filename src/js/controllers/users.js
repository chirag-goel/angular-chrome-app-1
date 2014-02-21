
module.exports = function(app){
  
app.controller('UserCtrl', function($scope, $rootScope, $location){
  $scope.user = {
    name: 'Rob',
    rank: 'master',
    tests_completed: 20000
  }
})

}