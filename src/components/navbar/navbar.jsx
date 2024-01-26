import React, { Component } from 'react'
import Button from '../button'
import './navbar.css'


export default class Navbar extends Component {
  render() {
    return (
      <nav>
          <div className="logo">
              <a href="#">LOGO</a>
          </div>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">About</a></li>
              <Button/>
          </ul>
          <Button/>
      </nav>
    )
  }
}
