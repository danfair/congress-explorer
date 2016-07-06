var React = require('react');
var axios = require('axios');

// in case github rate limits us
var apiKey = "597b1042c52c4b39b80c58c4d441c38a";
var param = "?apikey=" + apiKey + '&in_office=true';

var helpers = {
  getMembersByNameSearch: function(username) {
  // returns a Promise
    return axios.get('http://congress.api.sunlightfoundation.com/legislators' + param + '&query=' + username)
      .then(function(response) {
        return response.data.results.map(function(curVal) {
          return (<li>{curVal.last_name} {curVal.first_name} - {curVal.party}</li>)
        })
      })
  },
};

module.exports = helpers;
