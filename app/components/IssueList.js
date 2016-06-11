import React from 'react';
import IssueCard from './IssueCard';

const IssueList = React.createClass({
  renderIssues: function(){
    var issues = this.props.issues;

    if (issues.length > 0){
      var issueList = issues.map((issue,index) => {
        return (
          <div key={index}>
            <IssueCard
              issue={issue}
              repoName={this.props.repoName}
            />
          </div>
        )
      });
      return issueList;
    } else if (issues.length === 0){
      return (
        <div className="issue-card">
          There are currently no issues for this repo.
        </div>
      )
    };
  },
  render: function(){
    return (
      <div className="issue-container">
        {this.renderIssues()}
      </div>
    )
  }
});

export default IssueList;
