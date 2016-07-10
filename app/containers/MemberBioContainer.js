var React = require('react');
var MemberBio = require('../components/MemberBio');
var sunlightHelpers = require('../helpers/sunlight-api-helpers');
var styles = require('../styles');

var MemberBioContainer = React.createClass({
  getInitialState: function() {
    return {
      bio: {},
      legislation: [],
      committees: []
    }
  },

  componentDidMount: function() {
    sunlightHelpers.getMemberBio(this.props.routeParams.bioguideId)
      .then(function(bioData) {
        this.setState({
          bio: bioData[0]
        })
      }.bind(this))
      .then(function() {
        sunlightHelpers.getLegislationByMember(this.state.bio.bioguide_id)
          .then(function(legData) {
            console.log(legData);
            this.setState({
              legislation: legData.map(function(bill, i) {
        				return (
                  <li style={styles.allCaps} key={i}>
                    <h4>{bill.bill_id}</h4>
                    <h5>{bill.official_title}</h5>
                    <a href={bill.last_version.urls.html}>Read the full bill
                    </a>
          				</li>
                )
              })
            })
          }.bind(this))
      }.bind(this))

      // get committees for member
      sunlightHelpers.getCommitteesByMember(this.props.routeParams.bioguideId)
        .then(function(committeesData) {
          console.log(committeesData);
          this.setState({
            committees: committeesData.map(function(committee, i) {
              return (
                <li key={i}>
                  <h5>{committee.name}{committee.subcommittee && <span> (Subcommittee)</span>}</h5>
                </li>
              )
            })
          })
        }.bind(this))
  },

  render: function() {
    return (
      <MemberBio bioData={this.state.bio} legislation={this.state.legislation} committees={this.state.committees} />
    )
  }
});

module.exports = MemberBioContainer;
