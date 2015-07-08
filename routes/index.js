var express = require('express');
var router = express.Router();
var goGet = require('../lib/data');

router.get('/', function(req, res, next) {
  var cities = goGet.cities(function(cities) {
    res.render('index', { cities: cities });
  });
});

router.get('/cities/:city_id', function(req, res, next) {
  var city = goGet.city(function(city) {
    res.render('show', { city: city });
  }, req.params.city_id);
});

router.get('/weather', function(req, res, next) {
  var weather = goGet.weather(function(weather){
    res.render('weather', { data: weather });
  });
});

module.exports = router;
