import React from 'react';

const IssueForm = React.createClass({
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
