angular.module('testfolderApp')
  .controller('ChampCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
   

  	$scope.championImage1 = $routeParams.champion1;
  	$scope.championImage2 = $routeParams.champion2;




  }]);