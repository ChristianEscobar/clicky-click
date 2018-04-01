import React from 'react';
import './Score.css';

class Score extends React.Component {

  render() {
    return(
      <div className="score-text">
        <span>Score: {this.props.currentScore} | Top Score: {this.props.topScore}</span>
      </div>
    );
  }
}

export default Score;