import React from 'react';

const ProfileContent = React.createClass({
  renderImg: function(){
    var img = this.props.user.avatar_url;
    if (img){
      return (
        <div className="profile-image">
          <img src={img} className="display-image" />
        </div>
      );
    } else {
      return (
        <div className="profile-image">
          <img src="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png" className="display-image" />
        </div>
      );
    }
  },
  renderName: function(){
    var name = this.props.user.name;
    if (name){
      return (
        <h3>{name}</h3>
      );
    } else {
      return
    }
  },
  renderBio: function(){
    var bio = this.props.user.bio;
    if (bio){
      return (
        <p>{bio}</p>
      );
    } else {
      return
    }
  },
  renderLocation: function(){
    var location = this.props.user.location;
    if (location){
      return (
        <p><i className="fa fa-map-marker" aria-hidden="true"></i> {location}</p>
      );
    } else {
      return
    }
  },
  renderCompany: function(){
    var company = this.props.user.company;
    if (company){
      return (
        <p><i className="fa fa-building" aria-hidden="true"></i> {company}</p>
      );
    } else {
      return
    }
  },
  renderEmail: function(){
    var email = this.props.user.email;
    if (email){
      return (
        <p><i className="fa fa-envelope-o" aria-hidden="true"></i> {email}</p>
      );
    } else {
      return
    }
  },
  renderBlog: function(){
    var blog = this.props.user.blog;
    if (blog){
      return (
        <p><i className="fa fa-link" aria-hidden="true"></i> {blog}</p>
      );
    } else {
      return
    }
  },
  render: function(){
    var user = this.props.user;
    return(
      <div className="profile-content">
        {this.renderImg()}
        <div>
          {this.renderName()}
          <h4>{user.login}</h4>
        </div>
        <div className="profile-details">
          {this.renderBio()}
          {this.renderLocation()}
          {this.renderCompany()}
          {this.renderEmail()}
          {this.renderBlog()}
          <p><i className="fa fa-clock-o" aria-hidden="true"></i> {user.created_at}</p>
        </div>
      </div>
    )
  }
});

export default ProfileContent;
