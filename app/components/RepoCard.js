import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import IssueList from './IssueList';
import IssueFormContainer from '../containers/IssueFormContainer';

const RepoCard = React.createClass({
  getInitialState: function(){
    return {
      showIssues: false,
      issueList: [],
      issuesLoading: false,
    };
  },
  handleShowIssues: function(e){
    // console.log(e);

    this.setState({
      issuesLoading: true,
      showIssues: true,
    });
    var that = this;
    ajaxHelpers.getIssues(this.props.repo.name)
    .then(function(response){
      console.log("get issues response", response);
      that.setState({
        issueList: response.data,
        issuesLoading:false
      });
    });
  },
  handleCloseIssues: function(){
    this.setState({
      showIssues: false
    });
  },
  viewIssues: function(){
    if (this.state.showIssues && this.state.issuesLoading){
      return (
        <div className="issue-container">
          <div className="issue-cards">
            <div className="issue-card-container">
              <div className="issue-card">
                LOADING ISSUES!
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.state.showIssues){
      return (
        <IssueList
          issues={this.state.issueList}
          repoName={this.props.repo.name}
          onCloseIssues={this.handleCloseIssues}
          onEditModal={this.props.onEditModal}
          onSetRepoName={this.props.onSetRepoName}
          onSetIssue={this.props.onSetIssue}
        />
      );
    } else {
      return;
    };
  },
  handleNewModal: function(){
    this.props.onNewModal();
    this.props.onSetRepoName(this.props.repo.name);
    this.props.onSetIssue();
  },
  render: function(){
    var repo = this.props.repo;

    var date = new Date(repo.updated_at);
    var month = date.getMonth();
    var months = ["January" , "February" , "March" , "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = months[month];
    var day = date.getDate();
    var year = date.getFullYear();

    date = month + " " + day + ", " + year;

    return(
      <div className="repo-card-container" data-id={repo.id}>
        <div className="repo-card">
          <div className="repo-details">
            <h3>{repo.name}</h3>
            <p className="repo-updated">Last updated on {date}</p>
            <p><a href={repo.html_url} target="_blank">View on GitHub</a></p>
          </div>
          <div className="repo-buttons">
            <button className="repo-btn" type="button" value={repo.id} onClick={this.handleNewModal}>New Issue</button>
            <button className="repo-btn" type="button" onClick={this.handleShowIssues}>View Issues</button>
          </div>
        </div>
        {this.viewIssues()}
      </div>
    )
  }
});

export default RepoCard;
