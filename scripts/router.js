angular.module('myApp', [ 'ui.router' , 'angularLocalStorage'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainController',
        templateUrl: 'templates/main.html'
      })
      .state('articles', {
        url: '/articles/{id:int}',
        controller: 'ArticlesController',
        templateUrl: 'templates/articles.html'
      })
      .state('search', {
        url: '/search/*keyword',
        controller: 'SearchController',
        templateUrl: 'templates/search.html'
      });
    $urlRouterProvider.otherwise('/');
  }])

  .controller('MainController', ['$scope', 'storage', function($scope, storage) {
    $scope.msg = 'ようこそWINGSプロジェクトへ!';


// storage.remove('arakawa@example.com');

console.log("$scope前", $scope.user2);

var list = [{data:"a"},{data:"b"}];

var user2 = {email: 'arakawa@example.com', list: list};



storage.bind($scope, 'user2', {storeName: user2.email, defaultValue: user2});

console.log("$scope後", $scope.user2);


  }])
  .controller('ArticlesController', ['$scope', '$stateParams',
    function($scope, $stateParams) {
    $scope.id = $stateParams.id;
  }])
  .controller('SearchController', ['$scope', '$stateParams',
    function($scope, $stateParams) {
    $scope.keyword = decodeURIComponent($stateParams.keyword);
  }]);
