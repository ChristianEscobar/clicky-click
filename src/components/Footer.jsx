import React from 'react';
import './Footer.css';
import logo from '../logo.svg';

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer bg-primary">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </footer>
    );
  }
}

export default Footer