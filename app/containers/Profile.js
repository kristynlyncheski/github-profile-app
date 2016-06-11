import React from 'react';
import {Link, IndexLink} from 'react-router';
import ProfileContent from '../components/ProfileContent';
import ajaxHelpers from '../utils/ajaxHelpers';

const Profile = React.createClass({
  getInitialState: function(){
    return {
      userInfo: [],
    };
  },
  componentDidMount: function(){
    var that = this;
    ajaxHelpers.getUser()
    .then(function(response){
      console.log("profile response", response);
      that.setState({
        userInfo: response.data,
      });
    });
  },
  render: function(){
    return(
      <div className="profile-container">
        <div className="inner-container">
          <h2><i className="fa fa-github" aria-hidden="true"></i> app name</h2>
          <ProfileContent user={this.state.userInfo}/>
          <div className="repo-button">
            <Link to="/repos" activeClassName="active-nav">
              <button type="button">View All Repos</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
});

export default Profile;
