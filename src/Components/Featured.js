//import { useEffect, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCrate } from "../store/cartSlice";
import { allProduct } from "../store/productSlice";
import "./Featured.css";
function Featured() {
  const dispatch = useDispatch();
  const product = useSelector((state)=> state.product)
  
  useEffect(() => {
      dispatch(allProduct());

  }, [dispatch]);
  const fourItems =
  product &&
  product.slice(-20,-16).map((product) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
          <div className="card">
            <a href={`/product/${product.id}`}>
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
            </a>
            <div className="content">
              <h5 className="header">{product.title}</h5>
              <span className="price">{product.price}$</span>
              <p className="category">{product.category}</p>
              <button className="btn btn-header my-3" onClick={()=>dispatch(addCrate(product))}>Add To Cart</button>
            </div>
          </div>
        </div>
      );
    });


  return (
    <>
      <div className="Featured">
        <div className="container">
          <div className="custam title text-center">
            <h2>featured products</h2>
            <div className="underline"></div>
          </div>
          <div className="row">{fourItems}</div>
        </div>
        <Link className="btn-product" to="/product">
          {" "}
          All Product{" "}
        </Link>
      </div>
    </>
  );
}
export default Featured;
