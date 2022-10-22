import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ question }) => {
  const [showContent, setShowContent] = useState(false)
  return (
    <div className='question-content'>
      <div className='container-title'>
        <p className='question-title'>{question.title}</p>
        <div className='icons'>
          <span className='icon' onClick={() => setShowContent(!showContent)}>
            {showContent ? (
              <AiOutlineMinus></AiOutlineMinus>
            ) : (
              <AiOutlinePlus></AiOutlinePlus>
            )}
          </span>
        </div>
      </div>
      {showContent && <p className='question-info'>{question.info}</p>}
    </div>
  )
}

export default Question
