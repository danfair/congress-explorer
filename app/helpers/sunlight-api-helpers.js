var React = require('react');
var axios = require('axios');

// in case github rate limits us
var apiKey = "597b1042c52c4b39b80c58c4d441c38a";
var param = "?apikey=" + apiKey + '&in_office=true';

var helpers = {
  getMembersByNameSearch: function(username) {
    return axios.get('http://congress.api.sunlightfoundation.com/legislators' + param + '&query=' + username)
      .then(function(response) {
        return response.data.results
      })
  },

  getMembersByZip: function(zip) {

  },

  getMemberBio: function(bioguideId) {
    return axios.get('http://congress.api.sunlightfoundation.com/legislators' + param + '&bioguide_id=' + bioguideId)
      .then(function(response) {
        return response.data.results[0]
      })
  }
};

module.exports = helpers;
