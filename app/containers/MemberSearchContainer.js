var React = require('react');
var Link = require('react-router').Link;
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
        this.setState({
          membersList: membersList.map(function(member) {
            return (<li><Link to={'/legislator/' + member.bioguide_id }>
              {member.last_name}, {member.first_name} ({member.party})
            </Link></li>)
          })
        })
      }.bind(this));
  },

  componentDidMount: function() {
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
		this.setState({
			searchTerm: e.target.value
		}, this.updateSearchResults);
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

