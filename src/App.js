import React, { useEffect, useState } from 'react'

function App() {
  const [Results, setResults] = useState([])
useEffect(() => {
  fetch("http://localhost:3001/Categories")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setResults(data);
  })

  
}, [])


  return (
    <div>
      {
        Results.map(e => (
          <div key={e.id}> {e.title}</div>
        ))
      }
    </div>
  )
}

export default App