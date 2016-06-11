import React from 'react';

const IssueForm = React.createClass({
  render: function(){
    return (
      <div className="modal">
        <div className="close-button" onClick={this.props.onHideModal}>x</div>
        <div className="modal-contents">
          <div>Popup {this.props.type}</div>
        </div>
      </div>
    )
  }
});

export default IssueForm;
