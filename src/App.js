import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import JumboTron from './components/JumboTron';
import Navigation from './components/Navigation';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentScore: 0,
      topScore: 0,
      currentMessage: "Click on any image to start the game!"
    }

    this.updateScore = this.updateScore.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  updateScore(score, hiScore) {
    this.setState({
      currentScore: score,
      topScore: hiScore
    });
  }

  updateMessage(newMessage) {
    this.setState({
      currentMessage: newMessage
    });
  }

  render() {
    return (
      <div className="App">
        <Navigation message={this.state.currentMessage} score={this.state.currentScore} topScore={this.state.topScore}/>
        <JumboTron />
        <Content changeMessage={this.updateMessage} changeScore={this.updateScore} />
        <Footer />
      </div>
    );
    /*}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );*/
  }
}

export default App;
