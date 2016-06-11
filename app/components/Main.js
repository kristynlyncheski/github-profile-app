import React from 'react';
import Profile from '../containers/Profile'

const Main = React.createClass({
  render: function(){
    return(
      <div className="container">
        <Profile />
        {this.props.children}
      </div>
    )
  }
});

export default Main;
