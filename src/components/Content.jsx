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

    // Randomly sort array
    this.images.sort((a,b) => {return 0.5 - Math.random()});
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Image imageName={this.images[0]}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[1]}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[2]}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[3]}/>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Image imageName={this.images[4]}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[5]}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[6]}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[7]}/>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Image imageName={this.images[8]}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[9]}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[10]}/>
          </div>
          <div className="col-3">
            <Image imageName={this.images[11]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;