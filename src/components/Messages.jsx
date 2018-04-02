import React from 'react';
import './Messages.css';

class Messages extends React.Component {
  render(){
    return(
      <div className="message-text">
        <span>{this.props.currentMessage}</span>
      </div>
    );
  }
}

export default Messages;