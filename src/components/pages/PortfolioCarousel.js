import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../styles/portfolioCarousel.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';



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
      </Carousel.Item>
      <Carousel.Item>
      <a href="https://github.com/jessicamorse23/Team-Profile-Generator" target='#'>
        <img className="d-block w-95" src={require("../../assets/TeamProfiles.png")} 
        alt="Team Profile Generator" />
       
</a>
     
      </Carousel.Item>
      <Carousel.Item>
      <a href="https://jessicamorse23.github.io/WorkDayScheduler-Challenge5/" target='#'>
        <img
          className="d-block w-95"
          src={require('../../assets/WorkDayScheduler.png')}
          alt="Workday Scheduler"
        />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default PortfolioCarousel;
