import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data)
  const [target, setTarget] = useState(0)
  return <section className="section">
    <div className="title">
      <h2>
        <span>/</span>
        Reviews</h2>
    </div>
    {/* <div className="slider-center"> */}
    <div className="button-container left">
      <button className="btn">
        <FiChevronLeft></FiChevronLeft>
      </button>
    </div>
    <article className="slider-info">
      <div className="slider-content">
        <img src={people[target].image} alt="" className="slider-img" />
        <p className="slider-name">{people[target].name}</p>
        <p className="slider-title">{people[target].title}</p>
        <p className="slider-quote">{people[target].quote}</p>
        <span className="slider-icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>

    </article>
    <div className="button-container right">
      <button className="btn">
        <FiChevronRight></FiChevronRight>
      </button>
    </div>
    {/* </div> */}
  </section >;
}

export default App;
