
var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
	getInitialState: function() {
		return {
			zip: '',
			searchTerm: ''
		}
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
			});
		}
	},

	render: function() {
		return (
			<Prompt onUpdateSearchTerm={this.handleUpdateSearchTerm} onUpdateZip={this.handleUpdateZip} />
		)
	}
});

module.exports = PromptContainer;
	