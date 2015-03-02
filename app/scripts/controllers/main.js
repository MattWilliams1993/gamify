'use strict';

/**
 * @ngdoc function
 * @name testfolderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testfolderApp
 */
angular.module('testfolderApp')
  .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
   
    $scope.getData = function() {

			$scope.isFound = false;
			var $id = "";

			$http.get("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" + $scope.textBox + "?api_key=5a004bee-ad5a-49c0-bce5-06f9b924338f")
			.success(function ($data){

		
			angular.forEach($data, function(ids, key) {

				$id = ids.id;
				$scope.isFound = true;
			});

			$scope.fredsid = $id;


			$http.get("https://euw.api.pvp.net/api/lol/euw/v1.3/stats/by-summoner/" + $id+ "/summary?season=SEASON2015&api_key=5a004bee-ad5a-49c0-bce5-06f9b924338f")
			.success(function ($ids){

				console.log($ids);
				var $summary = $ids.playerStatSummaries;

				$scope.lol = $summary;

			});

		}).error(function() {

			$scope.loldata = "No Summoner Found";

		});

	}


  }]);
