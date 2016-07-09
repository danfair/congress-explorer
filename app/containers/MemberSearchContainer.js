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

	updateMembersList: function(membersList) {
		this.setState({
			membersList: membersList.map(function(member) {
				return (<li className='list-group-item'><Link to={'/legislator/' + member.bioguide_id }>
					{member.title + '.'} {member.first_name} {member.last_name} ({member.party} - {member.state})
				</Link></li>)
			})
		})
	},

	componentDidMount: function() {
		sunlightHelpers.getMembersByNameSearch(this.state.searchTerm)
			.then(function(membersList) {
				this.updateMembersList(membersList)
			}.bind(this))
	},

	handleUpdateZip: function(e) {
		if (e.target.value.length === 5) {
			this.setState({
				zip: e.target.value
			}, function() {
				sunlightHelpers.getMembersByZip(this.state.zip)
					.then(function(membersList) {
						this.updateMembersList(membersList)
					}.bind(this))
			})
		}
	},

	handleUpdateSearchTerm: function(e) {
		this.setState({
			searchTerm: e.target.value
		}, function() {
			sunlightHelpers.getMembersByNameSearch(this.state.searchTerm)
			.then(function(membersList) {
				this.updateMembersList(membersList)
			}.bind(this))
		})
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
