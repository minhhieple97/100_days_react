import React, { useState, useEffect } from 'react'
import ListCompany from './ListCompany'
import ListExperience from './Experience'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(false)
  const [companies, setCompanies] = useState([])
  const [target, setTarget] = useState(0)
  const getExperienceData = async () => {
    try {
      setLoading(true)
      const res = await fetch(url)
      const data = await res.json()
      const companies = data.map((el) => el.company)
      setExperiences(data)
      setCompanies(companies)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const handleChangeCompany = (id) => {
    const target = experiences.findIndex((el) => el.id === id)
    setTarget(target)
  }

  useEffect(() => {
    getExperienceData()
  }, [])

  return (
    <main className='section'>
      <div className='section-header'>
        <h2>Experience</h2>
        <div className='underline'></div>
        {loading && <h2>Loadding...</h2>}
      </div>
      <article className='section-center'>
        <div className='list-company'>
          <ListCompany companies={companies}></ListCompany>
        </div>
        <div className='list-experience'>
          <ListExperience
            experience={experiences[target]}
            handleChangeCompany={handleChangeCompany}
          ></ListExperience>
        </div>
      </article>
    </main>
  )
}

export default App
