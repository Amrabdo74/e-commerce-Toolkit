import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Productcat.css'
function Productcat() {
    const [limtProduct, setlimtProduct] = useState([]);
    const [buttons, setButton] = useState([]);
    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/men\'s clothing?limit=4')
            .then(res => res.json())
            .then(data => setlimtProduct(data));

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setButton(json))
    }, [])
    const specificCategory = (button)=>{
        fetch(`https://fakestoreapi.com/products/category/${button}?limit=4 `)
        .then(res=>res.json())
        .then(data => setlimtProduct(data));
   

    
    }




    const allButton = buttons.map((button) => {
        return (

            <button className="active"  key={button} onClick={(event)=>{
            
                
                
                
               
                specificCategory(button);

            }}>{button}</button>
        )
    })

    const fiveProduct = limtProduct.map((product) => {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id} >
                <div className="card" >
                    <Link to={`/product/${product.id}`}>
                        <div className="image">
                            <img src={product.image} alt={product.title} />
                        </div>
                    </Link>
                   
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="Featured">
                    <div className="custam title text-center">
                        <h2>All category</h2>
                        <div className="underline"></div>
                <div className="allButton d-flex justify-content-center align-items-center">
                    {allButton}</div>
                <div className="container">
                    <div className="row">
                        {fiveProduct}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Productcat;