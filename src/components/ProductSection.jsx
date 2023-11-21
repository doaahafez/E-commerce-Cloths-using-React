import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { getProducts } from '../API/Products';

export default function ProductSection() {
  // console.log("form product section "+cartCount)

  const [products,setproducts]=useState([])
 
useEffect(()=>{
   ( async()=>{
    const data = await getProducts()
    setproducts(data)
   })(); 
},[])
     return (
       <>
       <div className='container py-5'>
         <div className='row g-2'>
           {
             products?.map(product=>(
               <div className='col-md-6 col-lg-4 ' key={product?.id}>
                   <ProductCard 
                   
                   id={product.id}
                   image={product.image}
                   title={product.title} 
                   desc={product.description} 
                   price={product.price} />
                   
               </div>
             ))
           }
         </div>
       </div>
       </>
     )
}
