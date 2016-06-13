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
        <p className="user-bio">{bio}</p>
      );
    } else {
      return
    }
  },
  renderLocation: function(){
    var location = this.props.user.location;
    if (location){
      return (
        <p><i className="fa fa-2x fa-map-marker" aria-hidden="true"></i> {location}</p>
      );
    } else {
      return
    }
  },
  renderCompany: function(){
    var company = this.props.user.company;
    if (company){
      return (
        <p><i className="fa fa-2x fa-building" aria-hidden="true"></i> {company}</p>
      );
    } else {
      return
    }
  },
  renderEmail: function(){
    var email = this.props.user.email;
    if (email){
      return (
        <p><i className="fa fa-2x fa-envelope-o" aria-hidden="true"></i> <a href={email} target="_blank">{email}</a></p>
      );
    } else {
      return
    }
  },
  renderBlog: function(){
    var blog = this.props.user.blog;
    if (blog){
      return (
        <p><i className="fa fa-2x fa-link" aria-hidden="true"></i> <a href={blog} target="_blank">{blog}</a></p>
      );
    } else {
      return
    }
  },
  renderJoin: function(){
    var dateISO = this.props.user.created_at;
    var date = new Date(dateISO);

    var month = date.getMonth();
    var months = ["January" , "February" , "March" , "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = months[month];
    var day = date.getDate();
    var year = date.getFullYear();

    date = month + " " + day + ", " + year;

    if (dateISO){
      return (
        <p><i className="fa fa-2x fa-clock-o" aria-hidden="true"></i> <span>Joined on {date}</span></p>
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
          <div className="profile-details">
            {this.renderBio()}
            {this.renderLocation()}
            {this.renderCompany()}
            {this.renderEmail()}
            {this.renderBlog()}
            {this.renderJoin()}
          </div>
        </div>
      </div>
    )
  }
});

export default ProfileContent;
