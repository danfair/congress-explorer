var React = require('react');

var Main = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<h1 className='text-center'>Congress Explorer</h1>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;
	