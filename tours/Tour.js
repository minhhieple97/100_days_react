import React, { useState } from 'react'

const Tour = ({ tour, handleRemoveTour }) => {
  const [showAllText, setShowAllText] = useState(false)
  return (
    <article className='tour'>
      <img src={tour.image} alt='' className='img-tour' />
      <div className='tour-description'>
        <div className='tour-text'>
          <p className='tour-title'>{tour.name}</p>
          <p className='tour-price'>${tour.price}</p>
        </div>
        <>
          <span className='tour-info'>
            {showAllText ? tour.info : tour.info.slice(0, 200)}
          </span>
        </>
        {tour.info.length > 200 && (
          <>
            <span
              className='see-more'
              onClick={() => setShowAllText(!showAllText)}
            >
              ...{showAllText ? 'See less' : 'Read More'}
            </span>
          </>
        )}
      </div>
      <button
        className='btn btn-remove-tour'
        onClick={() => handleRemoveTour(tour.id)}
      >
        Not Interested
      </button>
    </article>
  )
}

export default Tour
