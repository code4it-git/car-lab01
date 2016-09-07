app.controller('CarController',function($scope,$state,$stateParams,$q,CarService){

$scope.car ={ };
$scope.isNew = true;

$scope.goTo = function(path,parameters)
{
     $state.go(path,parameters);
}
//***************************************************************************
$scope.loadData = function()
{
  if($stateParams.car)
  {
      $scope.isNew = false;
      $scope.car = $stateParams.car;
  }
}
//***************************************************************************

$scope.saveCar =function(car)
{
 if($scope.isNew ==true)
 {
      $scope.createCar(car);
 }
 else
 {
     $scope.updateCar(car);
 }


}

$scope.createCar = function(car)
{
   CarService.addCar(car).then(function(data)
   {
       console.log("success");
       $scope.goTo('welcome',null);
       
   },function(error)
   {
       console.log(error);
   })
}

$scope.updateCar = function(car)
{
   CarService.updateCar(car).then(function(data)
   {
       console.log("success");
       $scope.goTo('welcome',null);
   },function(error)
   {
       console.log(error);
   })
}

$scope.loadData();
})