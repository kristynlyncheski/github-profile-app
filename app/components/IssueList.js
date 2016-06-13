import React from 'react';
import IssueCard from './IssueCard';

const IssueList = React.createClass({
  renderIssues: function(){
    var issues = this.props.issues;
    if (issues.length > 0){
      var issueList = issues.map((issue,index) => {
        return (
          <div key={index} className="issue-card-container">
            <IssueCard
              issue={issue}
              repoName={this.props.repoName}
              onEditModal={this.props.onEditModal}
              onSetRepoName={this.props.onSetRepoName}
              onSetIssue={this.props.onSetIssue}
            />
          </div>
        )
      });
      return issueList;
    } else if (issues.length === 0){
      return (
        <div className="issue-card">
          <p>There are currently no issues for this repo.</p>
        </div>
      )
    };
  },
  render: function(){
    return (
      <div className="issue-container">
        <div className="close-button-issues" onClick={this.props.onCloseIssues}>x</div>
        <div className="issue-cards">
          {this.renderIssues()}
        </div>
      </div>
    );
  }
});

export default IssueList;
