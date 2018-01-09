const keys = require('../config/keys');
var Yelp = require('yelp-v3');
var _ = require('lodash');
var yelp = new Yelp({
  access_token: keys.yelpKey
});

module.exports = app => {
  app.get('/api/getRestaurants', async (req, res) => {
    let { location } = req.query;
    // Fetch all restaurants from yelp API for given city.
    let offset = 0;
    let resultRestaurants = [];
    let response;
    do {
      response = await yelp.search({ limit: 50, offset: offset, sort_by: 'rating', term: 'restaurants', location: location });
      offset = offset + 50;
      if (response.businesses) {
        resultRestaurants = resultRestaurants.concat(response.businesses);
      }
    } while (response.businesses.length > 0);

    // Get restaurants with at least 5 reviews
    let badRestaurants = _.filter(resultRestaurants, restaurant => {
      return restaurant.review_count > 5;
    });

    let sorted = _.sortBy(badRestaurants, restaurant => {
      return restaurant.rating;
    });

    res.send(sorted.slice(0,5));
  });
}
