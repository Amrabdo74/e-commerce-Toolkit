import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCrate } from "../store/cartSlice";

function ProductIdDetailes(){
    const dispatch = useDispatch();
    const pram =useParams(); 
    const [product,setProduct]=useState([]);
    const api_url = "https://fakestoreapi.com/products"
    useEffect(() => {
        fetch(`${api_url}/${pram.ProductId}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    },[])

     return(
        <>
          <div className="card container   border-0 mt-5 " >
                    <a href={`/product/${product.id}`}>
                        <div className="image">
                            <img src={product.image} alt={product.title} />
                        </div>
                    </a>
                    <div className="content">
                        <h5 className="header">{product.title}</h5>
                        <h5 className="price">{product.price}$</h5>
                        <span className="price">{product.description}$</span>
                        <p className="category">{product.category}</p>
                        <button className="btn btn-header my-3" onClick={()=>dispatch(addCrate(product))}>Add To Cart</button>
                    </div>
                </div>
        </>
    )
}
export default ProductIdDetailes;