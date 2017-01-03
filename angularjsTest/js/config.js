var app = angular.module('myCommunity', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/memberMenuList', {
            templateUrl:"memberMenuList.html",
            controller: 'memberMenuListController'
        })
         .when('/courseResourceList', {
            templateUrl:"courseResourceList.html",
            controller: 'courseResourceListController'
        })
          .when('/shareResourceList', {
            templateUrl:"shareResourceList.html",
             controller: 'shareResourceListController'
        })
           .when('/postList', {
            templateUrl:"postList.html",
            controller: 'postListController'
        })
            .when('/communityList', {
            templateUrl:"communityList.html",
            controller: 'communityListController'
        })
        .when('/discoverable', {
            templateUrl:"discoverable.html",
        })
        .when('/topic', {
            templateUrl:"topic.html",
        })
        .otherwise({
            templateUrl:"discoverable.html",
        });
}]);  