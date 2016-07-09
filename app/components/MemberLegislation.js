var React = require('react');
var PropTypes = React.PropTypes;

function MemberLegislation (props) {
  return (
    <ul>{props.legislation}</ul>
  )
}

MemberLegislation.propTypes = {
  legislation: PropTypes.array.isRequired
};

module.exports = MemberLegislation;
