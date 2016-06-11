import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import RepoCard from './RepoCard';


const RepoList = React.createClass({
  render: function(){
    var repos = this.props.repos;
    // console.log("repos",repos);
    var repoList = repos.map((repo, index) => {
      return (
        <div key={index}>
          <RepoCard
            onNewIssue={this.handleNewIssue}
            onShowIssues={this.handleShowIssues}
            viewIssues={this.viewIssues}
            repo={repo}
            onNewModal={this.props.onNewModal}
            onEditModal={this.props.onEditModal}
            onSetRepoName={this.props.onSetRepoName}
            onSetIssueNumber={this.props.onSetIssueNumber}
          />
        </div>
      )
    });

    return(
      <div className="repo-list">
        {repoList}
      </div>
    )
  }
});

export default RepoList;
