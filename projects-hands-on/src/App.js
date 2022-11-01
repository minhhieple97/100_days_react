import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'
const App = () => {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  const handleSubmitColor = (e) => {
    try {
      e.preventDefault()
      const list = new Values(color).all(10)
      console.log({ list })
      setList(list)
    } catch (error) {
      setError(true)
    }

  }
  return <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={(e) => handleSubmitColor(e)} >
        <input type="text" placeholder="#f15025" className={`${error ? 'error' : null}`} value={color} onChange={(e) => setColor(e.target.value)} />
        <button className="btn" type="submit">Submit</button>
      </form>
    </section>
    <section className="colors">
      {list.map((el, index) => <SingleColor key={index} {...el}></SingleColor>)}
    </section>
  </>
}

export default App
