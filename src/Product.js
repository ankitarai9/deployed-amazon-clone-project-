import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
// import Date from "./Date";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const  btnClick=()=> {
    window.open("https://amazon-product-tracker.herokuapp.com/");
  }



  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs</small>
          <small> {price}</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
       

        <button onClick={addToBasket}>Add to Basket</button>
        <button onClick={btnClick}>Price tracker</button>
      </div>
      
    </div>
  );
}

export default Product;
