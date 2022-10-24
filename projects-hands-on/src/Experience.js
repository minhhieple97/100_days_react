import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const Experience = ({ experience }) => {
  return (
    <React.Fragment>
      {experience && (
        <div className='experience'>
          <div className='experience-detail' key={experience.id}>
            <div className='experience-top'>
              <p className='job-title'>{experience.title}</p>
              <p className='company-name'>{experience.company}</p>
              <p className='date-join'>{experience.dates}</p>
            </div>
            <div className='experience-bottom'>
              {experience.duties.map((impact, index) => (
                <div className='job-impact' key={index + 1}>
                  <span className='job-impact-icon'>
                    <FaAngleDoubleRight></FaAngleDoubleRight>
                  </span>
                  <span className='job-impact-description'>{impact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Experience
