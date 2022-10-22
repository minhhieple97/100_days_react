import React from 'react'

const Categories = ({ categories, handleFilterByMenu }) => {
  return (
    <ul>
      {categories.map((el) => (
        <li key={el} onClick={() => handleFilterByMenu(el)}>
          {el}
        </li>
      ))}
    </ul>
  )
}

export default Categories
