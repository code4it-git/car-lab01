app.service('CarService',function($http,$q){

var baseUrl ="";

/*
function addCar(data)
{
    return $q(function(resolve,reject)
    {
        $http({
            method:"POST",
            data:data,
            url: baseUrl + "/api/insert",
            
        }).then(function(result)
        {
          return resolve(result);  
        },function(error)
        {
            return reject(result);
        } )



    })
}
function updateCar(data)
{
    return $q(function(resolve,reject)
    {
        $http({
            method:"PUT",
            data:data,
            url: baseUrl + "/api/update",
            
        }).then(function(result)
        {
          return resolve(result);  
        },function(error)
        {
            return reject(result);
        } )



    })
}
function deleteCar(id)
{
    return $q(function(resolve,reject)
    {
        $http({
            method:"DELETE",
            url: baseUrl + "/api/delete/"+id,
            
        }).then(function(result)
        {
          return resolve(result);  
        },function(error)
        {
            return reject(result);
        } )

    })
}

function getCars()
{
    return $q(function(resolve,reject)
    {
        $http({
            method:"GET",
            url: baseUrl + "/api/getAll/",
            
        }).then(function(result)
        {
          return resolve(result);  
        },function(error)
        {
            return reject(result);
        } )

    })
}

function getCarById(id)
{
    return $q(function(resolve,reject)
    {
        $http({
            method:"GET",
            url: baseUrl + "/api/getById/"+id,
            
        }).then(function(result)
        {
          return resolve(result);  
        },function(error)
        {
            return reject(result);
        } )

    })
}
*/
function addCar(data)
{
    return $q(function(resolve,reject)
    {
        $http({
            method:"POST",
            data:data,
            url: baseUrl + "/api/insertData",
            
        }).then(function(result)
        {
          return resolve(result);  
        },function(error)
        {
            return reject(result);
        } )



    })
}
function updateCar(data)
{
    return $q(function(resolve,reject)
    {
        $http({
            method:"PUT",
            data:data,
            url: baseUrl + "/api/updateData",
            
        }).then(function(result)
        {
          return resolve(result);  
        },function(error)
        {
            return reject(result);
        } )



    })
}
function deleteCar(id)
{
    return $q(function(resolve,reject)
    {
        $http({
            method:"DELETE",
            url: baseUrl + "/api/deleteData/"+id,
            
        }).then(function(result)
        {
          return resolve(result);  
        },function(error)
        {
            return reject(result);
        } )

    })
}

function getCars()
{
    return $q(function(resolve,reject)
    {
        $http({
            method:"GET",
            url: baseUrl + "/api/getAllData/",
            
        }).then(function(result)
        {
          return resolve(result);  
        },function(error)
        {
            return reject(result);
        } )

    })
}

function getCarById(id)
{
    return $q(function(resolve,reject)
    {
        $http({
            method:"GET",
            url: baseUrl + "/api/getByIdData/"+id,
            
        }).then(function(result)
        {
          return resolve(result);  
        },function(error)
        {
            return reject(result);
        } )

    })
}
return {
addCar:addCar,
updateCar:updateCar,
deleteCar:deleteCar,
getCars: getCars,
getCarById : getCarById

}

})