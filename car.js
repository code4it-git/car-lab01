var car = function()
{
 this.type = undefined;
 this.id = undefined;
 this.color = undefined;
 this.year = undefined;

}
car.prototype.create = function(data)
{
this.type = data.type;
 this.id = data.type;
 this.color =data.color;
 this.year = data.year;


}
module.exports = car;