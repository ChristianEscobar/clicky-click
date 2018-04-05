import React from 'react';
import Image from './Image';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';
import image8 from './images/8.png';
import image9 from './images/9.png';
import image10 from './images/10.png';
import image11 from './images/11.png';
import image12 from './images/12.png';


class Content extends React.Component {
  constructor(props) {
    super(props);

    // Populate array with images
    this.images = [image1, image2, image3, image4, image5, image6,
                  image7, image8, image9, image10, image11, image12];

    // Set state
    this.state = {
      imagesClicked: [],
      topScore: 0,
      currentScore: 0
    }

    // Bind functions
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick(event) {
    // Check if this image has already been clicked
    // If image has been clicked, reset score
    // Otherwise, add to score and shuffle images
    if(this.state.imagesClicked.includes(event.target.src)) {

      // The image has been clicked.
      // Reset game
      this.props.changeScore(0, this.state.topScore);

      this.props.changeMessage("You've already clicked on that image.  Sorry!");

      this.setState({
        imagesClicked: [],
        currentScore: 0
      });
    } else {
      let score = this.state.currentScore + 1;

      let currentTopScore = this.state.topScore;

      currentTopScore = (currentTopScore < score) ? score : currentTopScore;

      this.props.changeScore(score, currentTopScore); 
      
      this.props.changeMessage("Nice going!  Keep it up!");

      this.setState({
        imagesClicked: [...this.state.imagesClicked, event.target.src],
        topScore: currentTopScore,
        currentScore: score
      })
    }

    // Randomly sort array
    this.images.sort((a,b) => {return 0.5 - Math.random()});
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Image imageName={this.images[0]} imageClick={this.handleImageClick}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[1]} imageClick={this.handleImageClick}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[2]} imageClick={this.handleImageClick}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[3]} imageClick={this.handleImageClick}/>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Image imageName={this.images[4]} imageClick={this.handleImageClick}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[5]} imageClick={this.handleImageClick}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[6]} imageClick={this.handleImageClick}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[7]} imageClick={this.handleImageClick}/>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Image imageName={this.images[8]} imageClick={this.handleImageClick}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[9]} imageClick={this.handleImageClick}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[10]} imageClick={this.handleImageClick}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[11]} imageClick={this.handleImageClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;