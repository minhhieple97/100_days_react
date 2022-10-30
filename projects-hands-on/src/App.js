import React, { useState } from 'react';
import data from './data';
function App() {
  const [line, setLine] = useState(0)
  const [para, setPara] = useState([])
  const handleGenerateLine = (e) => {
    e.preventDefault()
    let newPara = []
    const amount = parseInt(line)
    if (amount <= 0) setPara([data[0]])
    else if (amount > data.length - 1) newPara = data.slice(0, data.length - 1);
    else newPara = data.slice(0, amount);
    setPara(newPara)
  }
  return (
    <main className="section">
      <div className="section-title">
        <h2>tired of boring loram ipsum</h2>
      </div>
      <article className="section-center">
        <div className="top">
          <span className="input-title">
            Paragraphs:
          </span>
          <input type="number" onChange={(e) => setLine(e.target.value)} />
          <button className="btn btn-primary" onClick={() => handleGenerateLine()}>generate</button>
        </div>
        <div className="bottom">
          {para.map((el, index) => <p key={index} className="result">{el}</p>)}
        </div>
      </article>
    </main>
  )
}

export default App;
