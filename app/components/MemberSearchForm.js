var React = require('react');
var PropTypes = React.PropTypes;

function MemberSearchForm(props) {
	return (
		<div className='row'>
			<div className='col-sm-5'>
				<h2>Enter your ZIP</h2>
				<input
					className="form-control"
					placeholder="01234"
					type="text"
					onChange={props.onUpdateZip}
					value={props.zip}
				/>
			</div>
			<div className='col-sm-2'>
				OR
			</div>
			<div className='col-sm-5'>
				<h2>Search for a Member</h2>
				<input
					className="form-control"
					placeholder="George Washington"
					type="text"
					onChange={props.onUpdateSearchTerm}
					value={props.searchTerm}
				/>
			</div>
		</div>
	)
}

MemberSearchForm.propTypes = {
	onUpdateZip: PropTypes.func.isRequired,
	onUpdateSearchTerm: PropTypes.func.isRequired,
	searchTerm: PropTypes.string
};

module.exports = MemberSearchForm;

