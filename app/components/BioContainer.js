var React = require('react');
var PropTypes = React.PropTypes;

function BioContainer (props) {
  return (
    <div>
      {props.bioData.first_name}
    </div>
  )
}

BioContainer.propTypes = {
  bioData: PropTypes.object.isRequired
};

module.exports = BioContainer;
