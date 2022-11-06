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