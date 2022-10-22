import React, { useEffect, useState } from 'react'

function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <div className='container'>
      <button
        className='btn'
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        Toggle
      </button>
      {toggle && <Item></Item>}
    </div>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size: {size}</h2>
    </div>
  )
}

export default App
