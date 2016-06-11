import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

const IssueCard = React.createClass({
  renderCloseBtn: function(){
    var issue = this.props.issue;

    // console.log(issue);
    if (issue.state === "closed") {
      return <button type="button" value="open" onClick={this.handleStateChange}>Open Issue</button>
    } else {
      return <button value="close" type="button" onClick={this.handleStateChange}>Close Issue</button>
    };
  },
  handleStateChange: function(e){
    e.preventDefault();
    var issueNumber = this.props.issue.number;
    var repoName = this.props.repoName;
    var stateChange = {
      state: e.target.value,
    };

    ajaxHelpers.changeIssueState(stateChange,repoName,issueNumber)
    .then(function(response){
      console.log("state change issue response", response);
    });
  },
  render: function(){
    var issue = this.props.issue;
    return (
      <div className="issue-card">
        <div className="issue-details">
          <h3>{issue.title}</h3>
          <p>({issue.state})</p>
          <p>Created on {issue.created_at}</p>
          <p>{issue.body}</p>
        </div>
        <div className="issue-buttons">
          <button type="button">Edit Issue</button>
          {this.renderCloseBtn()}
        </div>
      </div>
    );
  }
});

export default IssueCard;
