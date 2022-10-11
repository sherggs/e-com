import React, { useEffect, useState } from 'react'
import Category from './components/Category'

function App() {
  const [Results, setResults] = useState([])   //restAPI call
useEffect(() => {
  fetch("http://localhost:3001/Categories")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setResults(data);
  })

  
}, [])

const RenderCategories = () => {
  return Results.map(c => 
    <Category key = {c.id} id = {c.id} title = {c.title} />
  )
}


  return (
    <>
    <header>
      Store 
    </header>
    <section>
      <article>
      <div>
      {
        RenderCategories()
      }
    </div>
      </article>
    </section>
    <footer>
      footer
    </footer>
    </>
  )
}

export default App