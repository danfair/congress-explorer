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
      membersList: [],
			isLoading: true
		}
	},

	getAllMembers: function() {
		sunlightHelpers.getMembersByNameSearch(this.state.searchTerm)
			.then(function(membersList) {
				this.updateMembersList(membersList)
			}.bind(this))
	},

	updateMembersList: function(membersList) {
		this.setState({
			isLoading: true
		});

		this.setState({
			membersList: membersList.map(function(member, i) {
				return (<li className='list-group-item' key={i}><Link to={'/legislator/' + member.bioguide_id }>
					{member.title + '.'} {member.first_name} {member.last_name} ({member.party} - {member.state})
				</Link></li>)
			})
		}, function() {
			this.setState({
				isLoading: false
			})
		})
	},

	componentDidMount: function() {
		this.getAllMembers();
	},

	handleUpdateZip: function(e) {
		var targetLength = e.target.value.length
		if (targetLength === 5 || targetLength === 0) {
			this.setState({
				zip: e.target.value
			}, function() {
				if (this.state.zip.length === 5) {
					sunlightHelpers.getMembersByZip(this.state.zip)
						.then(function(membersList) {
							this.updateMembersList(membersList)
						}.bind(this))
				} else {
					this.getAllMembers();
				}
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
        <MemberSearchResult membersList={this.state.membersList} isLoading={this.state.isLoading} />
      </div>
		)
	}
});

module.exports = MemberSearchContainer;
