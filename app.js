/*global angular*/
angular.module('app', ['ngRoute'])

.controller('MainController', function($scope, $route, $location) {
   $scope.isActive = function(href) {
       return href == $location;
   };
   
})

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/home', { templateUrl: 'views/home.html' })
    .when('/europe-2086', { templateUrl: 'views/europe.html' })
    .otherwise('/home');
    
    //$locationProvider.html5Mode({enabled: true, requireBase: false});
}]);