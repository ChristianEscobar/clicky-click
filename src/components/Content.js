import React from 'react';

class Content extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-3">Col 1</div>
          <div className="col-3">Col 2</div>
          <div className="col-3">Col 3</div>
          <div className="col-3">Col 4</div>
        </div>
        <div className="row">
          <div className="col-3">Col 1</div>
          <div className="col-3">Col 2</div>
          <div className="col-3">Col 3</div>
          <div className="col-3">Col 4</div>
        </div>
        <div className="row">
          <div className="col-3">Col 1</div>
          <div className="col-3">Col 2</div>
          <div className="col-3">Col 3</div>
          <div className="col-3">Col 4</div>
        </div>
      </div>
    );
  }
}

export default Content;