var React = require('react');
var axios = require('axios');

// in case github rate limits us
var apiKey = "597b1042c52c4b39b80c58c4d441c38a";
var param = "?apikey=" + apiKey + '&in_office=true';

var helpers = {
  getMembersByNameSearch: function(searchTerm) {
    return axios.get('http://congress.api.sunlightfoundation.com/legislators' + param + '&query=' + searchTerm)
      .then(function(response) {
        return response.data.results
      })
  },

  getMembersByZip: function(zip) {
    return axios.get('http://congress.api.sunlightfoundation.com/legislators/locate' + param + '&zip=' + zip)
      .then(function(response) {
        // return response.data.results
        return response.data.results
      })
  },

  getMemberBio: function(bioguideId) {
    return axios.get('http://congress.api.sunlightfoundation.com/legislators' + param + '&bioguide_id=' + bioguideId)
      .then(function(response) {
        return response.data.results
      })
  }
};

module.exports = helpers;
