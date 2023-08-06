import React from 'react'

const Product = ({ data, onOrderClick }) => {
  return (
    <div className='main-container'>
      {data.map((item) => {
        return (
          <div className='product-container' key={item.id} >
            <div className='product'>
              <div className='product-body'>
                <h5 className='product-title'>{item.name}</h5>
                <span className='product-description'>{item.description}</span>
              </div>
              <img src={item.image} alt='images' />
              <span className='product-price'>Price: €{item.price}</span>
              <button className='product-btn-order' onClick={() => onOrderClick(item)}>Order</button>
            </div>
          </div>
        )
      }
      )}
    </div>
  )
};

export default Product;
