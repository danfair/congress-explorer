var React = require('react');
var BioContainer = require('../components/BioContainer');
var sunlightHelpers = require('../helpers/sunlight-api-helpers');

var MemberBioContainer = React.createClass({
  getInitialState: function() {
    return {
      bio: {}
    }
  },

  componentDidMount: function() {
    sunlightHelpers.getMemberBio(this.props.routeParams.bioguideId)
      .then(function(bioData) {
        console.log(bioData);
        this.setState({
          bio: bioData
        })
      }.bind(this))
  },

  render: function() {
    return (
      <BioContainer bioData={this.state.bio} />
    )
  }
});

module.exports = MemberBioContainer;
