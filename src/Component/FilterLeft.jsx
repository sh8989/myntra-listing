import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function FilterLeft({setCheckedCategoories,checkedCategories,checkedBrand,setCheckedBrand,setPricefrom,setPriceTo,setDiscountFrom,setDiscountTo }) {

    const [categories,setCategoories] = useState([]);
    const [brands,setBrands] = useState([]);
    

        useEffect(()=>{
                axios.get('https://wscubetech.co/ecommerce-api/categories.php')
                .then((success)=>{
                 setCategoories(success.data.data)
                })
                
                .catch((error)=>{
                    
                })
            
        },[]);



         useEffect(()=>{

            axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then((success)=>{
             setBrands(success.data.data)
            })

            .catch((error)=>{
                
            })
          
        },[]);

        let filtercatgories= (value) =>{

            if(checkedCategories.includes(value)){
                const final = checkedCategories.filter((v,i)=>{
                    if(v!=value){
                     return v;  
                }
            })
              setCheckedCategoories(final)
             console.log(final)  
            }
            else{
                let final = [value,...checkedCategories]
                setCheckedCategoories(final)
                console.log(final)
            }
           
        }
        let filterBrand= (value) =>{

            if(checkedBrand.includes(value)){
                const final = checkedBrand.filter((v,i)=>{
                    if(v!=value){
                     return v;  
                }
            })
            setCheckedBrand(final)
             console.log(final)  
            }
            else{
                let final = [value,...checkedBrand]
                setCheckedBrand(final)
                console.log(final)
            }
           
        }
        let filterPrice =(from,to)=>{
            setPricefrom(from);
            setPriceTo(to);
        }
        let filterDiscount =(from,to)=>{
            setDiscountFrom(from);
            setDiscountTo(to);
        }
  return (
    <div className="row5mtc1">
            <h4>Categories</h4>
            <div className="row5mtc1cell">
                

                {
                        categories.map((v,i)=>{
                            return(
                                 <div className="input"  key={i} >
                                     <input id={v.slug} type="checkbox"  className="space" onClick={()=>filtercatgories(v.slug)} />
                                     
                                     <label  className='labw' htmlFor={v.slug}>
                                      <div className='labw'>{v.name}</div>
                                     </label>
                                    
                                 </div>
                            )
                        })
                    }
                
                
            </div>
            <h4>Brand</h4>
            <div className="row5mtc1cell">
                
                {
                        brands.map((v,i)=>{
                            return(
                                <div className="input"  key={i} >
                                    <input id={v.slug} type="checkbox"  className="space" onClick={()=>filterBrand(v.slug)} />
                                    
                                    <label  className='labw' htmlFor={v.slug}>
                                     <div className='labw'>{v.name}</div>
                                    </label>
                                
                                </div>
                            )
                        })
                    }
            </div>
            <h4>Price</h4>
            <div className="row5mtc1cellpd">
                
                <div className="input" onClick={()=>filterPrice(0,250)}>
                    <input type="radio" name="Tshirts" className="space" id='price1'/>
                    <label  className='labw' htmlFor='price1'>
                      <div className='labw'>Rs. 0 To Rs. 250</div>
                    </label>
                </div>
                <div className="input"  onClick={()=>filterPrice(251,500)}>
                    <input type="radio" name="Tshirts" className="space" id='price2'/>
                    <label  className='labw' htmlFor='price2'>
                      <div className='labw'>Rs. 251 To Rs. 500</div>
                    </label>
                </div>
                <div className="input"  onClick={()=>filterPrice(501,1000)}>
                    <input type="radio" name="Tshirts" className="space" id='price3'/>
                    <label  className='labw' htmlFor='price3'>
                      <div className='labw'>Rs. 501 To Rs. 1000</div>
                    </label>
                </div>
                <div className="input"  onClick={()=>filterPrice(1000,'')}>
                    <input type="radio" name="Tshirts" className="space" id='price4'/>
                    <label  className='labw' htmlFor='price4'>
                      <div className='labw'>Rs. 1000 and above</div>
                    </label>
                </div>
               
            </div>
            <h4>Discount</h4>
            <div className="row5mtc1cellpd">
                
                <div className="input" onClick={()=>filterDiscount(0,10)}>
                    <input type="radio" name="discount" className="space" id='discount1'/>
                    <label  className='labw' htmlFor='discount1'>
                      <div className='labw'> 10% and above</div>
                    </label>
                </div>
                <div className="input"  onClick={()=>filterDiscount(11,20)}>
                    <input type="radio" name="discount" className="space" id='discount2'/>
                    <label  className='labw' htmlFor='discount2'>
                      <div className='labw'> 20% and above</div>
                    </label>
                </div>
                <div className="input"  onClick={()=>filterDiscount(21,30)}>
                    <input type="radio" name="discount" className="space" id='discount3'/>
                    <label  className='labw' htmlFor='discount3'>
                      <div className='labw'> 30% and above</div>
                    </label>
                </div>
                <div className="input"  onClick={()=>filterDiscount(31,40)}>
                    <input type="radio" name="discount" className="space" id='discount4'/>
                    <label  className='labw' htmlFor='discount4'>
                      <div className='labw'> 40% and above</div>
                    </label>
                </div>
            </div>
           
    </div>
  )
}
