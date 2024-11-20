import React from 'react'

export default function Product({ data }) {
  return (
                <div  class="row5mtc2img">
                     <div>
                        <img src={data.image} />
                     </div>
                     <h5>{data.name}</h5>
                     <p>{data.description}</p>
                     <span><b>Rs. {data.price}</b>    ({data.discount_percentage}% off)</span>
                 </div>
  )
}
