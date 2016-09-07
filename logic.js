var car = require("./car");
var carData = require("./data");
var logic = function()
{
    this.tmpArray = [];
    logic.prototype.self = this;
}

//************************************************
logic.prototype.createCar = function(car, resultMethod)
{
     logic.prototype.self.tmpArray.push(car);
     return resultMethod(null,true);
}

//************************************************
logic.prototype.createCarData = function(car, resultMethod)
{
    var carD = new carData(
        {
        year : car.year,
        id : car.id,
        color : car.color,
        type : car.type,
        created_at : Date.now(),
        updated_at : Date.now()
        }
    );
       carD.save(function(err)
       {
           if(err)
            return resultMethod(err,false);
            else
            return resultMethod(null,true);

       });
}
//************************************************
logic.prototype.updateCar = function(car, resultMethod)
{
    for(var i=0; i< logic.prototype.self.tmpArray.length ; i++)
    {
       if(logic.prototype.self.tmpArray[i].id == car.id)
       {
           logic.prototype.self.tmpArray[i].type = car.type;
           logic.prototype.self.tmpArray[i].car = car.car;
           logic.prototype.self.tmpArray[i].year = car.year;
           return resultMethod(null, true);
       }

    }
      return resultMethod(null, false);
}
//************************************************
logic.prototype.updateCarData = function(car, resultMethod)
{
    carData.findOne({id:car.id},function(err,data)
    {

try{
      if(data)
      {
          data.type = car.type;
          data.color = car.color;
          data.year = car.year;
          data.save();
      }
        return resultMethod(null, true);
}catch(error)
{
 return resultMethod(error, false);

}
    })
    
      
}
//************************************************
logic.prototype.removeCar = function(id, resultMethod)
{
    for(var i=0; i< logic.prototype.self.tmpArray.length ; i++)
    {
       if(logic.prototype.self.tmpArray[i].id == id)
       {
           logic.prototype.self.tmpArray.splice(i,1);
           return resultMethod(null, true);
       }

    }
      return resultMethod(null, false);
}
logic.prototype.removeCarData = function(id, resultMethod)
{
   carData.remove({id:id},function(err)
   {
         if(err)
            return resultMethod(err,false);
            else
            return resultMethod(null,true);

   })
      
}
//************************************************
logic.prototype.getCarById = function(id, resultMethod)
{
    for(var i=0; i< logic.prototype.self.tmpArray.length ; i++)
    {
       if(logic.prototype.self.tmpArray[i].id == id)
       {
         
           return resultMethod(null, logic.prototype.self.tmpArray[i]);
       }

    }
      return resultMethod(null, undefined);
}
//************************************************
logic.prototype.getCarByIdData = function(id, resultMethod)
{
    carData.findOne({id:id},function(err,data)
    {

try{
      if(data)
      {
          return resultMethod(null, data);
      }
        return resultMethod(null, null);
}catch(error)
{
 return resultMethod(error, null);

}
    })
    
      
}
//************************************************
logic.prototype.getAll = function( resultMethod)
{
    
      return resultMethod(null, logic.prototype.self.tmpArray);
}
logic.prototype.getAllData = function( resultMethod)
{
    carData.find(function(err,data)
    {

try{
      if(data)
      {
          return resultMethod(null, data);
      }
        return resultMethod(null, null);
}catch(error)
{
 return resultMethod(error, null);

}
    })
    
      
}
module.exports = logic;