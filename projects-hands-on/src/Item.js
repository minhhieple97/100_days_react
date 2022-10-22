import React from 'react'

const Item = ({ item }) => {
  return (
    <article className='item'>
      <img src={item.img} alt='' className='item-img' />
      <div className='item-text'>
        <div className='item-info'>
          <p className='item-title'>{item.title}</p>
          <p className='title-price'>${item.price}</p>
        </div>
        <div className='underline-title'></div>
        <p className='item-description'>{item.desc}</p>
      </div>
    </article>
  )
}

export default Item
