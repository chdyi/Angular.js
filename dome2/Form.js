var userInfoModule=angular.module('UserInfoModule',[]);

userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){
  $scope.userInfo={
    email:"248120147@qq.com",
    password:"248120147",
    autoLogin:true
  };
  $scope.getFormData=function(){
    console.log($scope.userInfo);
  };
  $scope.setFormData=function(){
      $scope.userInfo={
        email:"haoyiwm@gmail.com",
        password:"haoyi",
        autoLogin:false
      }
  };
  $scope.resetForm=function(){
    $scope.userInfo={
      email:"248120147@qq.com",
      password:"248120147",
      autoLogin:true
    }
  };
}])
