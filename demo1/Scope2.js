var myModule = angular.module("Scope2",[]);

myModule.controller("EventController",['$scope',
function EventController($scope){
  $scope.count = 0;
  $scope.$on('MyEvent',function(){
    $scope.count++;
  });
}
]);
