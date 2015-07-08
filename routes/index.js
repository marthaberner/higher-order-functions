var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var monk = require('monk')('localhost/higher-order-function-practice')
var cities = monk.get('cities')

router.get('/', function(req, res, next) {
  cities.find({}, function (err, records) {
    res.render('index', { cities: records });
  })
});

router.get('/cities/:city_id', function(req, res, next) {
  cities.findOne({_id: req.params.city_id}, function (err, city) {
    res.render('show', { city: city });
  })
});

router.get('/weather', function(req, res, next) {
  unirest.get('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&mode=json').end(function (response) {
    res.render('weather', { data: response.body });
  })
});

module.exports = router;
