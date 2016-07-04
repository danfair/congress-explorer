var React = require('react');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Main!</h1>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;
	