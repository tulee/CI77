import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [words, setWords] = useState(0)
  const [text, setText] = useState('')
  let timeout
  function handleInput(e){
    setText(e.target.value)
  }

  function countWords(text){
    const arr = text.split(' ')
    setWords(arr.filter(e => e!== '').length)
  }

  useEffect(() => {

    timeout = setTimeout(()=> {countWords(text)}, 500)

    return () => clearTimeout(timeout)
  },[text])

  return (
    <div className='container'>
      <textarea  id='textInput' value={text} onChange={handleInput}/>
      <div className='countWords'>Word(s): {words}</div>
    </div>
  );
}

export default App;
