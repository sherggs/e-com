    import React, { useEffect, useState } from 'react'
    import { useNavigate } from 'react-router-dom'

    const Search = () => {
        const navigate = useNavigate();

        const [SearchTerm, setSearchTerm] = useState('')


        useEffect(() => {
           const delay = setTimeout(() => {
                if(SearchTerm){
                    navigate('/search?s=' + SearchTerm)
                }
                
            },500);
          return () => clearTimeout(delay);
        }, [SearchTerm, navigate])
        

        const HandleChange = e => {
            setSearchTerm(e.target.value)
        }
    return (
        <div id='search'>
        <label>
        <input type="text" name="search" onChange={HandleChange}> </input>

        </label>
        </div>
    )
    }

    export default Search




// const [Name, setName] = useState([])

// async function LoadNews(){
//     await Response = fetch("https://localhost:3001")
//     await Request = Response.json()
//     setName(Request.Articles)
// }

// useEffect(() => {
//   LoadNews;
// }, [])

// return (
//     {Name.map( e =>(
//         <div 
        
//         key={e.id}
//         names = {e.name}
//         values = {e.value}
//         path = {e.Url}

//         /> 
        
//     )}}

//     practicing mappping
)