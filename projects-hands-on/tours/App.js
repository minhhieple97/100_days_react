import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)
  const getToursData = async () => {
    try {
      setLoading(true)
      const res = await fetch(url)
      const data = await res.json()
      setLoading(false)
      setTours(data)
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }
  const handleRemoveTour = (id) => {
    const newTours = [...tours].filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  useEffect(() => {
    getToursData()
  }, [])
  if (tours.length === 0 && !loading) {
    return (
      <main>
        <h2>No Tours left</h2>
        <button className='btn' onClick={() => getToursData()}>
          Refresh
        </button>
      </main>
    )
  }
  return (
    <main>
      {loading && <Loading></Loading>}
      {Array.isArray(tours) && !loading && tours.length > 0 && (
        <>
          <h2>Our Tours</h2>
          <Tours handleRemoveTour={handleRemoveTour} tours={tours}></Tours>
        </>
      )}
    </main>
  )
}

export default App
