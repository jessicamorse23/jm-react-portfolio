import React from "react";
import "../styles/about.css";

const aboutP = {
  color: "#0058b6",
  backgroundColor: "white", 
}

export default function About() {
return ( 
  <div className="about">
    <h1 className="d-flex justify-content-center" id="about"> A Little Bit About Me </h1>
    <p className="aboutP" style={aboutP}>I always want to try to learn something new. In my life I have been an English teach - middle school and community college - a corporate event planner anad manager, and a successful business owner. I like to think I am creative and a problem solver. I have always been curious about what makes things work, and when I had the opportunity to take some time to learn about code, I took it! It's been an adventure for sure:  I have had highs and lows, but I have definitely enjoyed this journey so far. When I started learning how to code, I was sure I'd love the front end development the most. I am a very visual person, and I like to make things "look pretty." Imagine my surprise to discover I actually really enjoy back end development, too. I really enjoyed working with database servers MySql and MongoDB. </p>
  </div>
);
}