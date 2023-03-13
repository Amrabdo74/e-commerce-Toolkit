import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar(props) {
    const cart = useSelector(state=>state.cart)
    return (
        <>
            <nav  className="navbar navbar-expand-lg auto">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Home">
                        {/* <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> */}
                        E-Commerce
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                             
                            <Link className="nav-link active cart p-2" to="/Cart" >Cart {cart.length}</Link>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;