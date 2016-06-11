import React from 'react';
import IssueForm from '../components/IssueForm';

const IssueFormContainer = React.createClass({
  renderForm: function(){
    if (this.props.formType === "new"){
      return (
        <IssueForm
          formType={this.props.formType}
          onHideModal={this.props.onHideModal}
        />
      );
    } else if (this.props.formType === "edit"){
      return (
        <IssueForm
          formType={this.props.formType}
          onHideModal={this.props.onHideModal}
        />
      );
    };
  },
  render: function(){
    return (
      <div className="modal-container">
        {this.renderForm()}
      </div>
    )
  }
});

export default IssueFormContainer;
