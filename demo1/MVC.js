function CommonController($scope){
  #scope.commonFn=function(){
    alert("这里是通用功能！");
  };
}

function Controller($scope){
  $scope.greeting = {
    text: 'Hello1'
  };
  $scope.test1=function(){
    alert("test1");
  };
}

function Controller2($scope){
  $scope.greeting = {
    text: 'Hello2'
  };
  $scope.text2=function(){
    alert("test2");
  };
}
