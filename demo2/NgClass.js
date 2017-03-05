var myCSSModule = angular.module("MyCSSModule",[]);

myCSSModule.controller("HeaderController",['$scope',
  function($scope){
		$scope.isError = false;
		$scope.isMarning = false;
		$scope.showError = function(){
			$scope.messageText = 'This is an error!';
			$scope.isError = true;
			$scope.isWarning = false;
		};
		$scope.showMarning = function(){
			$scope.messageText = 'Just a warning. Please carry on.';
			$scope.isWarning = true ;
			$scope.isError=false ;
		};
	}
])
