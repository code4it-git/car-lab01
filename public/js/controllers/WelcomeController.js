app.controller('WelcomeController',function($scope,$state,$stateParams,$q,CarService){

$scope.message ={ 

    title :"",
    message:""
}
$scope.cars =[];

$scope.goTo = function(path,parameters)
{
     $state.go(path,parameters);
}
//***************************************************************************
$scope.loadData = function()
{
    $scope.message.title = "Welcome";
    $scope.message.message = "You are about to enter to the car system";
    CarService.getCars().then(function(cars)
    {
        $scope.cars = cars.data;
        console.log("success");
    },function (error)
    {
        console.log(error);
    })
}
$scope.deleteCar = function(id)
{
  
    CarService.deleteCar(id).then(function(cars)
    {
        $scope.loadData();
        console.log("success");
    },function (error)
    {
        console.log(error);
    })
}

$scope.updateCar = function(car)
{
  
   $scope.goTo('car',{car:car}) 
}

//***************************************************************************
$scope.loadData();
})