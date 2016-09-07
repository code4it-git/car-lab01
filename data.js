var mongoose = require ('mongoose');
mongoose.connect('mongodb://code4itdata:Pa$$w0rd@ds017886.mlab.com:17886/node');

var Schema = mongoose.Schema;
var carSchema = new Schema(
{
year: Number,
color:String,
type:String,
id:{type: String, required : true, unique: true},
created_at : Date,
updated_at : Date
});

var Car = mongoose.model('Car',carSchema);
module.exports = Car;