var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function MemberCommittees (props) {
  return (
    <ul style={styles.noListStyleType}>{props.committees}</ul>
  )
}

MemberCommittees.propTypes = {
  committees: PropTypes.array.isRequired
};

module.exports = MemberCommittees;
