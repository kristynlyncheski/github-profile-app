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
    if (state === "closed") {
      return <button className="issue-btn" type="button" value="open" onClick={this.handleStateChange}>Open</button>
    } else if (state === "open"){
      return <button className="issue-btn" type="button" value="close" onClick={this.handleStateChange}>Close</button>
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
  handleEditModal: function(){
    this.props.onSetRepoName(this.props.repoName);
    this.props.onSetIssue(this.props.issue);
    this.props.onEditModal();
  },
  render: function(){
    var issue = this.props.issue;

    var date = new Date(issue.created_at);
    var month = date.getMonth();
    var months = ["January" , "February" , "March" , "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = months[month];
    var day = date.getDate();
    var year = date.getFullYear();

    date = month + " " + day + ", " + year;

    return (
      <div className="issue-card">
        <div className="issue-details">
          <h3>{issue.title}</h3>
          <p><span className="italic">({this.state.issueState})</span> &nbsp; Created on {date}</p>
          <p className="issue-body">{issue.body}</p>
        </div>
        <div className="issue-buttons">
          <button className="issue-btn" type="button" onClick={this.handleEditModal}>Edit</button>
          {this.renderCloseBtn()}
        </div>
      </div>
    );
  }
});

export default IssueCard;
