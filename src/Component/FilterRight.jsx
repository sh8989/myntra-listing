import React, { useEffect, useState } from 'react'
import Product from './Product';
import axios from 'axios';
import Load from './Load';

export default function FilterRight({ page,itemSorting,checkedCategories,checkedBrand,priceFrom,priceTo,discountFrom,discountTo }) {
    const [product,setProduct] =useState([])
    const [loading,setLoading] =useState(true)

    useEffect(()=>{

        axios.get('https://wscubetech.co/ecommerce-api/products.php',{
            params: {
                page : page,
                limit : 12,
                sorting :itemSorting,
                name : '',
                price_from : priceFrom,
                price_to : priceTo,
                discount_from : discountFrom,
                discount_to : discountTo,
                rating : '',
                brands : checkedBrand.toString(),
                categories : checkedCategories.toString(),
            }
        })
        .then((success)=>{
         setProduct(success.data.data)
          setLoading(false)
        })

        .catch((error)=>{
          
        })
      
    },[itemSorting,checkedCategories,checkedBrand,page,priceFrom,priceTo,discountFrom,discountTo]);

  return (
    <>
        <div className="row5mtc2">
          { loading
          ?
          <>
           <Load/>
           <Load/>
           <Load/>
           <Load/>
           <Load/>
           <Load/>
           <Load/>
           <Load/>
           <Load/>
           <Load/>
           <Load/>
           <Load/>
          </> 
          :
          product.map((v,i)=>{
            return(
                <Product data={v}/> 
            )
            })
          }			
		</div>
        
    </>
  )
}
