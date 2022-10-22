import React from 'react'
import { useState } from 'react'
import Review from './Review'
import data from './data'
function App() {
  const [reviews, setReviews] = useState(data)
  return (
    <main>
      <section className='container'>
        <div className='review-intro'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review reviews={reviews}></Review>
      </section>
    </main>
  )
}

export default App
