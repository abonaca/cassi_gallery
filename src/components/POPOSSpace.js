// src/components/POPOSSpace.js

import React from 'react'
import logo from '../logo.svg'
import '../stylesheets/POPOSSpace.css';

function POPOSSpace(props) {
  // add props here
  const { title, image, author, credits } = props
  return (
    <div className="POPOSSpace">
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      <h3>{title}</h3>
      <div>by: {author}</div>
      <div>image credits: {credits}</div>
    </div>
  )
}

export default POPOSSpace
