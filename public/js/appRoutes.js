angular.module('appRoutes', [])
.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'TestController'
        })
}]);