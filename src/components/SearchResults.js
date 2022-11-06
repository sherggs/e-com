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
            return Products.map((p) => {
              <div key={p.id} {...p}>
              {p.title}
              </div>
            })
          }
    return (
        <>
        {Products.errorMessage && <div> Error; {Products.errorMessage}</div>}

        {Products.data && RenderProducts()}
        </>
    )
    }

    export default SearchResults