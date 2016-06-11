import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

const IssueCard = React.createClass({
  getInitialState: function(){
    return{
      issueState: this.props.issue.state,
    };
  },
  renderCloseBtn: function(){
    var state = this.state.issueState;
    // console.log(state);

    if (state === "closed") {
      return <button type="button" value="open" onClick={this.handleStateChange}>Open Issue</button>
    } else if (state === "open"){
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

    ajaxHelpers.changeIssue(stateChange,repoName,issueNumber)
    .then(function(response){
      // console.log("state change issue response", response);
    });

    if (this.state.issueState === "closed"){
      this.setState({
        issueState: "open"
      });
    } else if (this.state.issueState === "open"){
      this.setState({
        issueState: "closed"
      });
    };
  },
  render: function(){
    var issue = this.props.issue;
    return (
      <div className="issue-card">
        <div className="issue-details">
          <h3>{issue.title}</h3>
          <p>({this.state.issueState})</p>
          <p>Created on {issue.created_at}</p>
          <p>{issue.body}</p>
        </div>
        <div className="issue-buttons">
          <button type="button" onClick={this.props.onEditModal}>Edit Issue</button>
          {this.renderCloseBtn()}
        </div>
      </div>
    );
  }
});

export default IssueCard;
