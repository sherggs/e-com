import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { getCategoryById } from './Fetcher';


const Category = ({id, title, onCategoryClick}) => {
  const {CategoryId} = useParams();


const navigate = useNavigate
  const CartContext = useContext(CartContext)
  const {addProducts} = CartContext;

  

  const [Category, setCategory] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategoryById(CategoryId)
      setCategory(responseObject)
    }
    fetchData()
  }, [CategoryId])

  return( 
  <div>
    <button onClick={() => addProducts({id, title })} ></button>
  </div>)
  
}


export default Category
