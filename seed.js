var monk = require('monk')('localhost/higher-order-function-practice')
var cities = monk.get('cities')

var promises = [
  cities.remove({}),
  cities.insert({name: 'New York', country: 'us'}),
  cities.insert({name: 'London', country: 'uk'}),
  cities.insert({name: 'Denver', country: 'us'}),
  cities.insert({name: 'Los Angeles', country: 'us'}),
  cities.insert({name: 'Seattle', country: 'us'}),
  cities.insert({name: 'Austin', country: 'us'}),
  cities.insert({name: 'Paris', country: 'fr'})
]

Promise.all(promises).then(function () {
  monk.close()
})
