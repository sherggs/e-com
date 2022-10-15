import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Category from './components/Category'
// import { Fetcher } from './components/Fetcher'


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
    <Category key = {c.id} id = {c.id} title = {c.title} onCategoryClick={() => HandleCategoryClick(c.id)} />
  )
//Looping instead of mapping 
  // const Categories = [];
  // for (let i = 0; i < Results.length; i++){
  //   Categories.push( <Category key = {Results[i].id} id = {Results[i].id} title = {Results[i].title} />)
  // }
  // return categories;
}

const HandleCategoryClick = id => {
  alert("id: " +id)
}


  return (
    <>
    <header>
      Store 
    </header>
    <section>
      <nav>
      <div>
      {
        RenderCategories()
      }
    </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </section>
    <footer>
      <Link to="/Home">Home </Link>
    </footer>
    </>
  )
}

export default App