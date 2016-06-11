import React from 'react';
import {Link, IndexLink} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';
import RepoList from '../components/RepoList';

const Repos = React.createClass({
  getInitialState: function(){
    return {
      repoList: [],
    };
  },
  componentDidMount: function(){
    var that = this;
    ajaxHelpers.getRepos()
    .then(function(response){
      console.log("repo list response", response);
      that.setState({
        repoList: response.data,
      });
    });
  },
  render: function(){
    return(
      <div className="right-container repos-container">
        <div className="inner-container">
          <IndexLink to="/" activeClassName="active-nav">
            <div className="close-button">x</div>
          </IndexLink>
          <h2>kristynlyncheski's repos</h2>
          <RepoList
            repos={this.state.repoList}
          />
        </div>
      </div>
    );
  }
});

export default Repos;
