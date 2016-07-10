var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function Loading (props) {
  return (
    <div>
      <img style={styles.centered} src={require('../img/gears.gif')} />
    </div>
  )
}

module.exports = Loading;
