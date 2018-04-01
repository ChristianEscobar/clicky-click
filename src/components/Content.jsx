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
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Image imageName={image1}/>
          </div>
          <div className="col-3">
            <Image imageName={image2}/>
          </div>
          <div className="col-3">
            <Image imageName={image3}/>
          </div>
          <div className="col-3">
            <Image imageName={image4}/>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Image imageName={image5}/>
          </div>
          <div className="col-3">
            <Image imageName={image6}/>
          </div>
          <div className="col-3">
            <Image imageName={image7}/>
          </div>
          <div className="col-3">
            <Image imageName={image8}/>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Image imageName={image9}/>
          </div>
          <div className="col-3">
            <Image imageName={image10}/>
          </div>
          <div className="col-3">
            <Image imageName={image11}/>
          </div>
          <div className="col-3">
            <Image imageName={image12}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;