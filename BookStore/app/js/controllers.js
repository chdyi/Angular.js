var bookStoreCtrls = angular.module('bookStoreCtrls',[]);

bookStoreCtrls.controller('HelloCtrl',['$scope',
  function($scope){
		$scope.greeting={
			text:'Hello'
		};
		$scope.pageClass="hello";
	}
]);

bookStoreCtrls.controller('BookListCtrl',['$scope',
  function($scope) {
		$scope.books = [{
			title: "《惊悚乐园》",
			auther:"三天两觉"
		},{
			title:"《间客》",
			auther:"猫腻"
		},{
			title:"《法师三定律》",
			auther:"笑狮弹剑"
		}];
		$scope.pageClass="list";
	}
]);
