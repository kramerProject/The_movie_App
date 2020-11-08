import React from 'react';
import Img from './ozzy.jpg'

class Picture extends React.Component {

  render() {
    return (
      <div className="picture-container">
        <img id="personal-picture" src={Img} className="image-meme" alt="personal"></img>
        <p><strong>Your Photo</strong></p>
      </div>
    )
  }
}

export default Picture;