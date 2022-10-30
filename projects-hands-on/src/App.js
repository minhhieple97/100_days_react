import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import people from './data';
function App() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (index < 0) setIndex(() => {
      return people.length - 1
    })
    else if (index > people.length - 1) setIndex(() => {
      return 0;
    })
    const idInterval = setInterval(() => {
      setIndex(prevState => prevState + 1);
    }, 5000)
    return () => clearInterval(idInterval)
  }, [index])
  console.log({ index })
  return <section className="section">
    <div className="title">
      <h2>
        <span>/</span>
        Reviews
      </h2>
    </div>
    <div className="section-center">
      {people.map((el, personIndex) => {
        const { name, title, quote, image } = el;
        let position = 'nextSlide';
        if (personIndex === index) {
          position = 'activeSlide';
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = 'lastSlide';
        }
        return <article key={personIndex} className={`slider-info ${position}`}>
          <img src={image} alt="" className="slider-img" />
          <p className="slider-name">{name}</p>
          <p className="slider-title">{title}</p>
          <p className="slider-quote">{quote}</p>
          <FaQuoteRight className="icon"></FaQuoteRight>
        </article>
      })}
      <button className="prev">
        <FiChevronLeft onClick={() => setIndex(index - 1)}></FiChevronLeft>
      </button>
      <button className="next">
        <FiChevronRight onClick={() => setIndex(index + 1)}></FiChevronRight>
      </button>
    </div>

  </section >;
}

export default App;
