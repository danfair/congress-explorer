var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function MemberLegislation (props) {
  return (
    <ul style={styles.noListStyleType}>{props.legislation}</ul>
  )
}

MemberLegislation.propTypes = {
  legislation: PropTypes.array.isRequired
};

module.exports = MemberLegislation;
