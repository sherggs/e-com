import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCategoryById } from './Fetcher';

const Category = ({id, title, onCategoryClick}) => {
  const {CategoryId} = useParams();
  const [Category, setCategory] = useState(Category)
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategoryById(CategoryId)
      setCategory(responseObject)
    }
    fetchData()
  }, [CategoryId])

  return( <div> </div>)
  
}


export default Category
