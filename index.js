var express = require('express');
var app = express();
var logic = require("./logic");
var path = require('path');
//static object
var l = new logic();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));

var port = 3000;

//ROUTES
var router = express.Router();
//route for test
router.get('/test',function(req,res)
{
    res.json({message:'Welcome'});
});

//*************************************************************
router.get('/getAll',function(req,res)
{
    l.getAll(function(err,data)
    {
        res.json(data);
    })
});
router.get('/getAllData',function(req,res)
{
    l.getAllData(function(err,data)
    {
        res.json(data);
    })
});
//*************************************************************
router.get('/getById/:key',function(req,res)
{
    l.getCarById(req.params.key,function(err,data)
    {
        res.json(data);
    })
});
router.get('/getByIdData/:key',function(req,res)
{
    l.getCarByIdData(req.params.key,function(err,data)
    {
        res.json(data);
    })
});
//*************************************************************
router.post('/insert',function(req,res)
{
    l.createCar(req.body,function(err,data)
    {
        res.json(data);
    })
});
router.post('/insertData',function(req,res)
{
    l.createCarData(req.body,function(err,data)
    {
        res.json(data);
    })
});
//*************************************************************
router.put('/update',function(req,res)
{
    l.updateCar(req.body,function(err,data)
    {
        res.json(data);
    })
});
router.put('/updateData',function(req,res)
{
    l.updateCarData(req.body,function(err,data)
    {
        res.json(data);
    })
});
router.delete('/delete/:key',function(req,res)
{
    l.removeCar(req.params.key,function(err,data)
    {
        res.json(data);
    })
});
router.delete('/deleteData/:key',function(req,res)
{
    l.removeCarData(req.params.key,function(err,data)
    {
        res.json(data);
    })
});
app.use('/api',router);
//Server start
app.listen(port);
console.log('code4IT server start at ' + port);