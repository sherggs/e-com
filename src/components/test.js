/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

const test = () => {

    const [Driver, setDriver] = useState([])
    
    async function Driven() {
        const request = await fetch("http://google.com")
        const response = await request.json()
        setDriver(response.name)
    };

 useEffect(() => {
   Driven()
 

 }, [])
 

    

  return (
    <>
    {Driver.map(drive => (
        <div
        key = {drive.key} 
        header = {drive.header}
        ></div>
    ))}


    </>
  )
}

export default test