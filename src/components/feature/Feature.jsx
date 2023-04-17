import React from 'react'
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='gpt3-feature-container'>
      <div className="gpt3-feature-container-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3-feature-container-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature