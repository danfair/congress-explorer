var React = require('react');
var axios = require('axios');

var baseUrl = 'http://congress.api.sunlightfoundation.com';
var apiKey = '597b1042c52c4b39b80c58c4d441c38a';
var param = '?apikey=' + apiKey;
var inOfficeParam = '&in_office=true'

var helpers = {
  getMembersByNameSearch: function(searchTerm) {
    return axios.get(baseUrl + '/legislators' + param + inOfficeParam + '&query=' + searchTerm)
      .then(function(response) {
        return response.data.results
      })
  },

  getMembersByZip: function(zip) {
    return axios.get(baseUrl + '/legislators/locate' + param + inOfficeParam + '&zip=' + zip)
      .then(function(response) {
        // return response.data.results
        return response.data.results
      })
  },

  getMemberBio: function(bioguideId) {
    return axios.get(baseUrl + '/legislators' + param + inOfficeParam + '&bioguide_id=' + bioguideId)
      .then(function(response) {
        return response.data.results
      })
  },

  getLegislationByMember: function(bioguideId) {
    return axios.get(baseUrl + '/bills' + param + '&sponsor_id=' + bioguideId)
      .then(function(response) {
        return response.data.results
      })
  },

  getCommitteesByMember: function(bioguideId) {
    console.log(bioguideId);
    return axios.get(baseUrl + '/committees' + param + '&member_ids=' + bioguideId)
      .then(function(response) {
      return response.data.results
    })
  }
};

module.exports = helpers;
