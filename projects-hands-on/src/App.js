import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
import { useEffect } from 'react'

function App() {
  const [dataMenu, setDataMenu] = useState(items)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const memo = {}
    const categories = items.reduce(
      (acc, el) => {
        if (!(el.category in memo)) {
          acc.push(el.category)
        }
        memo[el.category] = true
        return acc
      },
      ['All']
    )
    setCategories(categories)
  }, [])
  const handleFilterByMenu = (category) => {
    if (category === 'All') return setDataMenu(items)
    const newData = items.filter((el) => el.category !== category)
    setDataMenu(newData)
  }

  return (
    <main>
      <section className='menu-section section'>
        <div className='menu-title'>
          <h2>our Menu</h2>
          <div className='underline'></div>
        </div>
        <div className='menu-categories'>
          <Categories
            handleFilterByMenu={handleFilterByMenu}
            categories={categories}
          ></Categories>
        </div>
        <div className='menu-details section-center'>
          <Menu menu={dataMenu}></Menu>
        </div>
      </section>
    </main>
  )
}

export default App
