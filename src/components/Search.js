    import React from 'react'
    import { useNavigate } from 'react-router-dom'

    const Search = () => {
        const navigate = useNavigate();

        const HandleChange = e => {
            navigate('/search?s=' + e.target.value)
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