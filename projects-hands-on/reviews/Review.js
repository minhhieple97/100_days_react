import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = ({ reviews }) => {
  const [target, setTarget] = useState(0)
  const handleUpdateTarget = (type) => {
    let newTarget = null
    if (type === 'DEC') {
      target === 0 ? (newTarget = reviews.length - 1) : (newTarget = target - 1)
    } else if (type === 'INC') {
      target === reviews.length - 1 ? (newTarget = 0) : (newTarget = target + 1)
    }
    setTarget(newTarget)
  }
  const handleRandomTarget = () =>
    setTarget(getRandomInt(0, reviews.length - 1))

  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  return (
    <article className='review'>
      <div className='review-info'>
        <div className='img-container'>
          <img src={reviews[target].image} alt='' className='review-img' />
          <span className='quote-icon'>
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <p className='review-name'>{reviews[target].name}</p>
        <p className='review-job'>{reviews[target].job}</p>
        <p className='review-text'>{reviews[target].text}</p>
      </div>

      <div className='review-icon'>
        <FaChevronLeft
          className='icon-left'
          onClick={() => handleUpdateTarget('DEC')}
        ></FaChevronLeft>
        <FaChevronRight
          className='icon-right'
          onClick={() => handleUpdateTarget('INC')}
        ></FaChevronRight>
      </div>
      <button className='random-btn' onClick={() => handleRandomTarget()}>
        Surprise Me
      </button>
    </article>
  )
}

export default Review
