import React from 'react'

const ListCompany = ({ companies }) => {
  return (
    <ul>
      {companies.map((company) => (
        <div className='company'>
          <li key={company}>{company}</li>
          <div className='underline-company'></div>
        </div>
      ))}
    </ul>
  )
}

export default ListCompany
