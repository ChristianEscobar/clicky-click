import React from 'react';
import './Navigation.css';
import Messages from './Messages';
import Score from './Score';

class Navigation extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Fixed top</a>
        <Messages message={`This is a test`}/>
        <Score currentScore={this.props.score} topScore={this.props.topScore}/> 
      </nav>
    );
  }
}

export default Navigation