var myModule = angular.module("Hello",[]);

myModule.controller("HelloAngular",['$scope',
function HelloAngular($scope){
  $scope.greeting = {
    text: 'Hello'
  };
}
]);
