import React from 'react'

const ListCompany = ({ companies, handleChangeCompany, target }) => {
  return (
    <ul className='list-company'>
      {companies.map((company, index) => (
        <li
          className={`company ${index === target && 'active-btn'}`}
          key={company}
          onClick={() => handleChangeCompany(company)}
        >
          {company}
        </li>
      ))}
    </ul>
  )
}

export default ListCompany
