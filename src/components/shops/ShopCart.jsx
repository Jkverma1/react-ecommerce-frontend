import React, { useState } from "react";

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const ImgAPI = "http://3.129.65.105:8080/products/images";

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div key={shopItems} className="box">
            <div className="product mtop">
              <div className="img shopImg-container">
                {/* <span className="discount">{shopItems.discount}% Off</span> */}
                <img
                  src={`${ImgAPI}/${shopItems.image_dir}/${shopItems.image_count}`}
                  alt=""
                />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{shopItems.name}</h3>
                {/* <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div> */}
                <div className="price">
                  <h4>${shopItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(shopItems)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
