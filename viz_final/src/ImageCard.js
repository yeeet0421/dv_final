import React from 'react';
import { useState } from 'react';

const ImageCard = ({ imagePath, width, height, keyword }) => {
  return (
    <div className="row">
      <div className="col s12 m7" style={{ width: width * 0.48, height: height * 0.85 }}>
        <div className="card" style={{ width: width * 0.45, height: height * 0.9 }}>
          <div className="card-image">
            {/*<img src="images/sample-1.jpg"/>*/}
            <img src={imagePath} />
          </div>
          <div className="card-content">
            <span className="card-title">{keyword}_Video Title</span>
          </div>
          <div className="card-action">
            <p>Some Statistics</p>
            <a href="#">
              <img src="https://i.imgur.com/HhqZIBb.png" />
              Some descriptions with link
            </a>
            <p>Some Statistics</p>
            <a href="#">
              <img src="https://i.imgur.com/HhqZIBb.png" />
              Some descriptions with link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;