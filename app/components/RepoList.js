import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import IssueList from './IssueList';
import RepoCard from './RepoCard';


const RepoList = React.createClass({
  getInitialState: function(){
    return {
      showIssues: false
    };
  },
  // handleShowIssues: function(){
  //   console.log("hello")
  //   this.setState({
  //     showIssues: true,
  //   });
  // },
  // renderIssues: function(){
  //   var array = [{
  //     title: "Issue 1",
  //     createdby: "username",
  //     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  //   },
  //   {
  //     title: "Issue 2",
  //     createdby: "username",
  //     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  //   }];
  //
  //   var issueList = array.map((issue,index) => {
  //     return (
  //       <div key={index} className="issue-card">
  //         <div className="issue-details">
  //           <h3>{issue.title}</h3>
  //           <p>Created by {issue.createdby}</p>
  //           <p>Last updated on {issue.updated}</p>
  //         </div>
  //         <div className="issue-buttons">
  //           <button type="button">Edit</button>
  //           <button type="button">Close</button>
  //         </div>
  //       </div>
  //     )
  //   });
  //   if (this.state.showIssues){
  //     return (
  //       <div className="issue-container">
  //         {issueList}
  //       </div>
  //     );
  //   } else {
  //     return;
  //   };
  // },
  viewIssues: function(){
    if (this.state.showIssues){
      return (
        <IssueList />
      );
    } else {
      return;
    };
  },
  handleNewIssue: function(e){
    e.preventDefault();
    console.log(e.target.value);
    // var issue = {
    //   "title": "Test bug",
    //   "body": "I'm having a problem with this.",
    // };
    //
    // ajaxHelpers.createIssue(issue)
    // .then(function(response){
    //   console.log("create issue response", response);
    // });
  },
  render: function(){
    var repos = this.props.repos;
    console.log("repos",repos);
    var repoList = repos.map((repo, index) => {
      return (
        <div key={index}>
          <RepoCard
            onNewIssue={this.handleNewIssue}
            onShowIssues={this.handleShowIssues}
            viewIssues={this.viewIssues}
            repo={repo}
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
