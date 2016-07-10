var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var MemberLegislation = require('./MemberLegislation');

function MemberBio (props) {
  return (
    <ul className='list-group'>
      <li className='list-group-item'>
        <h5 className='text-muted' style={styles.allCaps}>Name</h5>
        {props.bioData.first_name} {props.bioData.last_name}
      </li>
      <li className='list-group-item'>
        <h5 className='text-muted' style={styles.allCaps}>State/Party</h5>
        {props.bioData.state_name} - {props.bioData.party}
      </li>
      <li className='list-group-item'>
        <h5 className='text-muted' style={styles.allCaps}>Chamber</h5>
        <span style={styles.capitalize}>{props.bioData.chamber}</span>
      </li>
      <li className='list-group-item'>
        <h5 className='text-muted' style={styles.allCaps}>Contact Info</h5>
        {props.bioData.office}<br />
        {props.bioData.phone}<br />
      {props.bioData.oc_email && <div><a href={'mailto:' + props.bioData.oc_email}>{props.bioData.oc_email}</a></div>}
        {props.bioData.website && <div><a href={props.bioData.website}>Website</a></div>}
        {props.bioData.twitter_id && <div><a href={'https://twitter.com/' + props.bioData.twitter_id}>Twitter</a></div>}
        {props.bioData.facebook_id && <div><a href={'https://facebook.com/' + props.bioData.facebook_id}>Facebook</a></div>}
      </li>
      <li className='list-group-item'>
        <h5 className='text-muted' style={styles.allCaps}>Sponsored Legislation</h5>
        <MemberLegislation legislation={props.legislation} />
      </li>
    </ul>
  )
}

MemberBio.propTypes = {
  bioData: PropTypes.object.isRequired
};

module.exports = MemberBio;
