import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <section className='accordition'>
        <article className='questions-content'>
          <div className='questions-title'>
            <h3>Questions And Answers About Login</h3>
          </div>
          <div className='question-list'>
            {data.map((question) => (
              <SingleQuestion question={question}></SingleQuestion>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
