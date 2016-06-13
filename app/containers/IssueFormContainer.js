import React from 'react';
import IssueForm from '../components/IssueForm';

const IssueFormContainer = React.createClass({
  render: function(){
    return (
      <div className="modal-container">
        <IssueForm
          formType={this.props.formType}
          onHideModal={this.props.onHideModal}
          repoName={this.props.repoName}
          issue={this.props.issue}
        />
      </div>
    )
  }
});

export default IssueFormContainer;
