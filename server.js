let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let pizzapi = require('dominos');

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('./public'));

 app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.post('/data', function(req, res) {
    console.log(req.body.info);
    let data = req.body.info;
    pizzapi.Util.findNearbyStores(
        data.postalCode,
        'Delivery',
        function(storeData){
            var stores = storeData.result.Stores;
            app.get('/pizza', function (req, res) {
                res.json(stores[0]);
            })
        }
    );
});








app.listen(8080, function() {
    console.log("server has started on port 8080");
});
