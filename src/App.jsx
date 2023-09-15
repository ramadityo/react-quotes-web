import { useState, useRef, useEffect } from 'react'
import {motion as m, AnimatePresence} from 'framer-motion'
import './main.css'


function App() {
  // const quoteRef = useRef(null);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const randomizeQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }

  useEffect(() => {
    randomizeQuote();
  }, []);

  const handleRandomQuote = () => {
    randomizeQuote();
  }
  

  return (
    <>
      <div className="main-container">
        <h1>React Quotes API</h1>
        <AnimatePresence mode='wait'>
          {quote && (
            <m.div
              key={quote.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}

              className="quotes-box">
              <div className="quote">{quote}</div>
              <div className="author">{author}</div>
            </m.div>
          )}
        </AnimatePresence>
          
        

        <button className='randomizeBtn' onClick={handleRandomQuote}> Randomize quote! </button>
      </div>
    </>
  )
}

export default App