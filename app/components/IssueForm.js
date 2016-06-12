import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

const IssueForm = React.createClass({
  componentDidMount: function(){
    if (this.props.issue){
      this.refs.title.value = this.props.issue.title;
      this.refs.body.value = this.props.issue.body;
    };
  },
  renderBtnText: function(){
    if (this.props.formType === "new"){
      return "New Issue";
    } else if (this.props.formType === "edit"){
      return "Changes";
    };
  },
  handleSubmit(e){
    e.preventDefault();
    if (this.refs.title.value && this.refs.body.value){
      var newIssue = {
        title: this.refs.title.value,
        body: this.refs.body.value,
      };
      this.props.onHideModal();
    };

    var repoName = this.props.repoName;
    var issueNumber = this.props.issueNumber;

    if (this.props.formType === "new"){
      ajaxHelpers.createIssue(newIssue,repoName)
      .then(function(response){
        // console.log("create issue response", response);
      });
    } else if (this.props.formType === "edit"){
      ajaxHelpers.changeIssue(newIssue,repoName,issueNumber)
      .then(function(response){
        console.log("edit issue response", response);
      });
    };
  },
  render: function(){
    return (
      <div className="modal">
        <div className="close-button" onClick={this.props.onHideModal}>x</div>
        <div className="modal-contents">
          <input type="text" ref="title" placeholder="Title"/>
          <br />
          <textarea ref="body" name="body" rows="8" cols="40" placeholder="Describe your issue..."></textarea>
          <br />
          <button type="button" ref="submitIssue" onClick={this.handleSubmit}>Submit {this.renderBtnText()}</button>
        </div>
      </div>
    )
  }
});

export default IssueForm;
