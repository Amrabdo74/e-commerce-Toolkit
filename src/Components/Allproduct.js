import { Link } from "react-router-dom";
import { useEffect } from "react";
import { allProduct } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { electronicsCategory, jeweleryCategory,menCategory,womenCategory} from "../store/productSlice";
import { addCrate } from "../store/cartSlice";

function Allproduct() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProduct());
  }, [dispatch]);

  const fiveProduct = product.map((product) => {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
        <div className="card">
          <Link to={`/product/${product.id}`}>
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
          </Link>
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
        <div className="allButton d-flex justify-content-center align-items-center">
          {}
          <button className="active" onClick={() => {dispatch(electronicsCategory())}}>electronics</button>
          <button className="active" onClick={() => {dispatch(jeweleryCategory())}}>jewelery</button>
          <button className="active" onClick={() => {dispatch(menCategory())}}>men's clothing</button>
          <button className="active" onClick={() => {dispatch(womenCategory())}}>women's clothing"</button>
        </div>
        <div className="container">
          <div className="custam title text-center">
            <h2>All Product</h2>
            <div className="underline"></div>
          </div>
          <div className="row allProducts">{fiveProduct?fiveProduct:console.log("kkfk")}</div>
        </div>
      </div>
    </>
  );
}
export default Allproduct;
