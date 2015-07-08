var unirest = require('unirest');
var monk = require('monk')('localhost/higher-order-function-practice')
var cities = monk.get('cities')

module.exports = {

  cities: function(cb) {
    cities.find({}, function(err, records) {
      cb(records);
    });
  },

  city: function(cb, id) {
    cities.findOne({_id: id}, function (err, city) {
      cb(city)
    });
  },

  weather: function(cb) {
    unirest.get('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&mode=json')
    .end(function (response) {
      cb(response.body);
    });
  }
}
