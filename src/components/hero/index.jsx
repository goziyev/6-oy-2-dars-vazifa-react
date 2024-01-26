
import React from "react";
import Button from "../button";
 import './hero.css'
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-texts">
        <h1>Join a Community of Achievers</h1>
        <p>Begin your learning journey today!</p>
        <Button />
      </div>
      <div className="hero-img">
            <img src="../../assets/hero.jpg" alt="" />
      </div>
    </div>
  );
}
