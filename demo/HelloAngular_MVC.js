var myModule = angular.module("Hello",[]);

myModule.controller("HelloAngular",['$scope',
function($scope){
  $scope.greeting = {
    text: 'Hello'
  };
}
]);
