var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');

function MemberSearchResult(props) {
  return props.isLoading === true ?
    <Loading /> :
    <div>
      <h2>Members:</h2>
      <ul className='list-group'>
        {props.membersList}
      </ul>
    </div>
}

MemberSearchResult.propTypes = {
  membersList: PropTypes.array,
  isLoading: PropTypes.bool.isRequired
};

module.exports = MemberSearchResult;
