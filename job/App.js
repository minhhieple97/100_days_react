import React, { useState, useEffect } from 'react'
import ListCompany from './ListCompany'
import Experience from './Experience'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(false)
  const [target, setTarget] = useState(0)
  const getExperienceData = async () => {
    try {
      setLoading(true)
      const res = await fetch(url)
      const data = await res.json()
      setExperiences(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const handleChangeCompany = (company) => {
    const target = experiences.findIndex((el) => el.company === company)
    setTarget(target)
  }

  useEffect(() => {
    getExperienceData()
  }, [])
  if (loading)
    return (
      <main className='section'>
        <h2 className='loading'>Loadding...</h2>
      </main>
    )
  return (
    <main className='section job-center'>
      <div className='section-header'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <article className='section-center'>
        <ListCompany
          companies={experiences.map((el) => el.company)}
          handleChangeCompany={handleChangeCompany}
          target={target}
        ></ListCompany>
        <div className='list-experience'>
          <Experience experience={experiences[target]}></Experience>
        </div>
      </article>
    </main>
  )
}

export default App
