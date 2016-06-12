import React from 'react';
import {Link, IndexLink} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';
import RepoList from '../components/RepoList';
import IssueFormContainer from '../containers/IssueFormContainer';

const Repos = React.createClass({
  getInitialState: function(){
    return {
      repoList: [],
      showModal: false,
    };
  },
  componentDidMount: function(){
    var that = this;
    ajaxHelpers.getRepos()
    .then(function(response){
      // console.log("repo list response", response);
      that.setState({
        repoList: response.data,
      });
    });
  },
  showNewModal: function(){
    this.setState({
      showModal: true,
      formType: 'new'
    });
  },
  showEditModal: function(){
    this.setState({
      showModal: true,
      formType: 'edit'
    });
  },
  hideModal: function(){
    this.setState({
      showModal: false
    });
  },
  renderModal: function(){
    if (this.state.showModal){
      return (
        <IssueFormContainer
          formType={this.state.formType}
          onHideModal={this.hideModal}
          repoName={this.state.repoName}
          issue={this.state.issue}
        />
      );
    } else {
      return
    };
  },
  setRepoName: function(name){
    this.setState({
      repoName: name
    });
  },
  setIssue: function(issue){
    this.setState({
      issue: issue
    });
    console.log(issue)
  },
  render: function(){
    return(
      <div className="right-container repos-container">
        {this.renderModal()}
        <div className="inner-container">
          <IndexLink to="/" activeClassName="active-nav">
            <div className="close-button">x</div>
          </IndexLink>
          <h2>{this.props.userInfo.login}'s repos</h2>
          <RepoList
            repos={this.state.repoList}
            onNewModal={this.showNewModal}
            onEditModal={this.showEditModal}
            onSetRepoName={this.setRepoName}
            onSetIssue={this.setIssue}
          />
        </div>
      </div>
    );
  }
});

export default Repos;
