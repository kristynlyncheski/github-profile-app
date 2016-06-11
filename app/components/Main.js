import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import Profile from '../containers/Profile';

const Main = React.createClass({
  getInitialState: function(){
    return {
      userInfo: [],
    };
  },
  componentDidMount: function(){
    var that = this;
    ajaxHelpers.getUser()
    .then(function(response){
      // console.log("profile response", response);
      that.setState({
        userInfo: response.data,
      });
    });
  },
  render: function(){
    return(
      <div className="container">
        <Profile
          userInfo={this.state.userInfo}
        />
        {React.cloneElement(this.props.children,
          {userInfo: this.state.userInfo}
        )}
      </div>
    )
  }
});

export default Main;
