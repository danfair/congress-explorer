var React = require('react');
var MemberSearchForm = require('../components/MemberSearchForm');
var MemberSearchResult = require('../components/MemberSearchResult');
var sunlightHelpers = require('../helpers/sunlight-api-helpers');

var MemberSearchContainer = React.createClass({
	getInitialState: function() {
		return {
			zip: '',
			searchTerm: '',
      membersList: []
		}
	},

  updateSearchResults: function() {
    sunlightHelpers.getMembersByNameSearch(this.state.searchTerm)
      .then(function(membersList) {
        console.log(membersList);
        this.setState({
          membersList: membersList
        })
      }.bind(this));
  },

  componentDidMount: function() {
    // returns a Promise
    this.updateSearchResults();
  },

	handleUpdateZip: function(e) {
		if (e.target.value.length === 5) {
			this.setState({
				zip: e.target.value
			}, function() {
				console.log(this.state.zip);
			});
		}
	},

	handleUpdateSearchTerm: function(e) {
		if (e.target.value.length >= 2) {
			this.setState({
				searchTerm: e.target.value
			}, this.updateSearchResults);
		}
	},

	render: function() {
		return (
			<div>
        <MemberSearchForm onUpdateSearchTerm={this.handleUpdateSearchTerm} onUpdateZip={this.handleUpdateZip} />
        <MemberSearchResult membersList={this.state.membersList} />
      </div>
		)
	}
});

module.exports = MemberSearchContainer;

