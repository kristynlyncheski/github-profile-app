import React from 'react';

const ProfileContent = React.createClass({
  render: function(){
    var user = this.props.user;
    return(
      <div className="profile-content">
        <div className="profile-image">
          <img src={user.avatar_url} className="display-image" />
        </div>
        <div>
          <h3>{user.name}</h3>
          <h4>{user.login}</h4>
        </div>
        <div>
          <p>{user.bio} xxxx</p>
        </div>
        <div className="details">
          <p><i className="fa fa-github" aria-hidden="true"></i> {user.location}</p>
          <p><i className="fa fa-github" aria-hidden="true"></i> {user.company}</p>
          <p><i className="fa fa-github" aria-hidden="true"></i> {user.email}</p>
          <p><i className="fa fa-github" aria-hidden="true"></i> {user.blog}</p>
          <p><i className="fa fa-github" aria-hidden="true"></i> {user.created_at}</p>
        </div>
      </div>
    )
  }
});

export default ProfileContent;
