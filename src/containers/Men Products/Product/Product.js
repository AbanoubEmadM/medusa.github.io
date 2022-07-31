import React from 'react'

const Product = (props) => {
  return (
    <div>
        <img src={props.img} />
        <p>{props.title} </p>
    </div>
  )
}

export default Product