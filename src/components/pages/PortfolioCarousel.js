import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../styles/portfolioCarousel.css"

const captionStyle = {
  color: "#0058b6",
  backgroundColor: "AliceBlue", 
  // padding: "2rem",
}

function PortfolioCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <a href="https://jessicamorse23.github.io/Playlist-Producer/" target='#'>
        <img
          className="d-block w-95"
          src={require('../../assets/PlaylistProducer.png')}
          alt="Playlist Producer"
        />
        </a>
        <Carousel.Caption>
          <h3 style={captionStyle}>Playlist Producer</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href="https://github.com/jessicamorse23/Team-Profile-Generator" target='#'>
        <img className="d-block w-95" src={require("../../assets/TeamProfiles.png")} 
        alt="Team Profile Generator" />
       
</a>
        <Carousel.Caption>
          <h3 style={captionStyle}>Team Profile Generator</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href="https://jessicamorse23.github.io/WorkDayScheduler-Challenge5/" target='#'>
        <img
          className="d-block w-95"
          src={require('../../assets/WorkDayScheduler.png')}
          alt="Workday Scheduler"
        />
        </a>

        <Carousel.Caption>
          <h3 style={captionStyle}>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PortfolioCarousel;
