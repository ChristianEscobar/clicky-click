import React from 'react';
import './Score.css';

class Score extends React.Component {
  render() {
    return(
      <div className="score-text">
        <span>Score: 0 | Top Score: 0</span>
      </div>
    );
  }
}

export default Score;