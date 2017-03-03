var myModule = angular.module("MVC",[]);

myModule.controller("Controller1",['$scope',
function Controller1($scope){
  $scope.greeting={
    text: 'Hello1'
  };
  $scope.test1=function(){
    alert("test1");
  };
};
]);

myModule.controller("Contoller2",['$scope',
function Controller1($scope){
  $scope.greeting={
    text: 'Hello2'
  };
  $scope.test1=function(){
    alert("test2");
  };
};
]);

myModule.controller("CommonController",['$scope',
function CommonController($scope){
  $scope.commonFn=function(){
    alert("这里是通用功能！");
  };
};
]);
