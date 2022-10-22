import React from 'react'
import Item from './Item'

const Menu = ({ menu }) => {
  return (
    <React.Fragment>
      {menu.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </React.Fragment>
  )
}

export default Menu
