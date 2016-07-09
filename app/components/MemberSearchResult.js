var React = require('react');
var PropTypes = React.PropTypes;

function MemberSearchResult(props) {
  return (
    <div>
      <h2>Members:</h2>
      <ul className='list-group'>
        {props.membersList}
      </ul>
    </div>
  )
}

MemberSearchResult.propTypes = {
  membersList: PropTypes.array
};

module.exports = MemberSearchResult;
