var app = angular.module('app',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider)
{
$stateProvider.state('welcome',{
 url:'/',
 controller:'WelcomeController',
 templateUrl:"views/Welcome.html"

})
.state('car',{
 url:'/car',
 params:{car:null},
 controller:'CarController',
 templateUrl:"views/Car.html"
})

$urlRouterProvider.otherwise('/');
});
