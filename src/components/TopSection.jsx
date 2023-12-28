import React from 'react'
import hero_one from '../images/character1.png'
import hero_two from '../images/character2.png'

export default function TopSection({ submitted }) {
  const classCondition = document.getElementsByClassName('name-input').length === 0
  return (
    <div className="top-section">
      <h1 className={submitted && !classCondition ? 'second-fade-in' : null}>
        {!submitted || classCondition
          ? 'The Legend of Scrimba'
          : "A hero has risen! The hero's name is: "}
      </h1>
      <div className="image-container">
        <img
          className={!submitted || classCondition ? null : 'fade-out-and-in'}
          src={!submitted || classCondition ? hero_one : hero_two}
        />
      </div>
    </div>
  )
}
