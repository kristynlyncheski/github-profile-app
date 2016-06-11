import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import IssueList from './IssueList';

const RepoCard = React.createClass({
  getInitialState: function(){
    return {
      showIssues: false,
      issueList: [],
    };
  },
  handleShowIssues: function(e){
    // console.log(e);
    this.setState({
      showIssues: true,
    });
    var that = this;
    ajaxHelpers.getIssues(this.props.repo.name)
    .then(function(response){
      console.log("get issues response", response);
      that.setState({
        issueList: response.data
      });
    });
  },
  viewIssues: function(){
    if (this.state.showIssues){
      return (
        <IssueList
          issues={this.state.issueList}
          repoName={this.props.repo.name}
        />
      );
    } else {
      return;
    };
  },
  render: function(){
    var repo = this.props.repo;
    return(
      <div className="repo-card-container" data-id={repo.id}>
        <div className="repo-card">
          <div className="repo-details">
            <h3>{repo.name}</h3>
            <p>Last updated on {repo.updated_at}</p>
            <p><a href={repo.html_url} target="_blank">View on GitHub</a></p>
          </div>
          <div className="repo-buttons">
            <button type="button" value={repo.id} onClick={this.props.onNewIssue}>New Issue</button>
            <button type="button" onClick={this.handleShowIssues}>View Issues</button>
          </div>
        </div>
        {this.viewIssues()}
      </div>
    )
  }
});

export default RepoCard;
