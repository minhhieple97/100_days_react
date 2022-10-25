import React from 'react'

const ListCompany = ({ companies }) => {
  return (
    <ul>
      {companies.map((company) => (
        <li className='company'>
          <p key={company}>{company}</p>
        </li>
      ))}
    </ul>
  )
}

export default ListCompany
