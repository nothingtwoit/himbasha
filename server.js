var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pizzapi = require('dominos');
var port = 8080;

// app.use(function(req, res, next) {
//   console.log(req.method, req.url);
//   next();
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.post('/data', function(req, res) {
    var postalCode = req.body.info;
    console.log(postalCode);
    pizzapi.Util.findNearbyStores(
        postalCode,
        'Delivery',
        function(storeData){
            var stores = storeData.result.Stores;
            app.get('/pizza', function (req, res) {
                res.json(stores);
            })
        }
    );
});








app.listen(port, function() {
    console.log("server has started on port 8080");
});
