import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, handleRemoveTour }) => {
  return (
    <section className='tours'>
      <div className='line-tours'></div>
      {tours.map((tour) => {
        return (
          <Tour
            key={tour.id}
            tour={tour}
            handleRemoveTour={handleRemoveTour}
          ></Tour>
        )
      })}
    </section>
  )
}

export default Tours
