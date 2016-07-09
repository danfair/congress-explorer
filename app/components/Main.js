var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<Link to='/'>
					<h1 className='text-center'>Congress Explorer</h1>
				</Link>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;
