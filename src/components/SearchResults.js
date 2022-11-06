    import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getProductsByQuery } from './Fetcher';

    const SearchResults = () => {
        const [Products, setProducts] = useState([]);

        const [SearchParams] = useSearchParams;
        const query = SearchParams.get('s')

        useEffect(() => {
            const fetchData = async () => {
              const responseObject = await getProductsByQuery(query)
              setProducts(responseObject)
            }
            fetchData()
          }, [query])
        
          const RenderProducts = () => {
            if(Products.length > 0){
              return Products.map((p) => {
                <div key={p.id} {...p}>
                {p.title}
                </div>
              })
            }
            else {
              return <div> No result found sorry!</div>
            }
            }
           
    return (
        <>
        {Products.errorMessage && <div> Error; {Products.errorMessage}</div>}

        {RenderProducts()}
        </>
    )
    }

    export default SearchResults