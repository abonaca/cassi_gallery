// src/components/POPOSSpace.js

import React from 'react'
import logo from '../logo.svg'
import '../stylesheets/POPOSSpace.css';

function POPOSSpace(props) {
  // add props here
  const { title, foreground, background, author, credits } = props
  return (
    <div className="POPOSSpace">
      <a href="#">
        <h3>{title}</h3>
        <div className="parent">
          <img className="background" src={`${process.env.PUBLIC_URL}images/${background}`} width="300" alt="Hello" />
          <img className="foreground" src={`${process.env.PUBLIC_URL}images/${foreground}`} width="300" alt="Hello" />
        </div>
      </a>
      <div>by: {author}</div>
      <div>image credits: {credits}</div>
    </div>
  )
}

export default POPOSSpace
