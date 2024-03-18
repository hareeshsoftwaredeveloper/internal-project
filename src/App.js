import React, { useState, useRef } from 'react'
import { libraries } from "./constants" 


const App = () => {

  const inputValue = useRef(null)
  const [originalLibrArray] = useState(libraries);

  const [librArray, setLibrarArray] = useState(libraries)

  const handleClick = () => {
    const searchTerm = inputValue.current.value.toLowerCase(); 
    
    if (searchTerm === '') {
      setLibrarArray(originalLibrArray);
    }
    
    else {
      setLibrarArray(originalLibrArray.filter(each => each.name.toLowerCase().includes(searchTerm)));
    }
    inputValue.current.value = '';
  };


  return (
    <div className='app'>
      <h1>React Libraries</h1>

      <input type='search' ref={inputValue}/>
      <button onClick={handleClick}>Search</button>
      {librArray.map(each =>(
        <div className='item-container'>
          <h3>{each.name} :</h3>
          <a href={each.url} target='_blank' rel="noreferrer" >{each.url}</a>
        </div>
     ))}

    </div>
  )
}

export default App 
