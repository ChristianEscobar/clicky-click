import React from 'react';
import './Score.css';

class Score extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      score: 0,
      topScore: 0,
    }
  }

  render() {
    return(
      <div className="score-text">
        <span>Score: 0 | Top Score: 0</span>
      </div>
    );
  }
}

export default Score;