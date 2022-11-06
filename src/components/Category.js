import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { getCategoryById } from './Fetcher';


const Category = ({id, title, onCategoryClick}) => {
  const {CategoryId} = useParams();


const navigate = useNavigate
  const CartContext = useContext(CartContext)
  const {addProducts} = CartContext;

  

  const [Products, setProducts] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategoryById(CategoryId)
      setCategory(responseObject)
    }
    fetchData()
  }, [CategoryId])


  const RenderProducts = () => {
    return Products.map((p) => {
      <div key={p.id} {...p}>
      {p.title}
      </div>
    })
  }

  return( 
  <div>
     {Products.errorMessage && <div> Error; {Products.errorMessage}</div>}

{Products.data && RenderProducts()}
    <button onClick={() => addProducts({id, title })} ></button>
  </div>)
  
}


export default Category
