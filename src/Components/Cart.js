import { useDispatch, useSelector } from "react-redux";
import { clearCarte, deleteCrate } from "../store/cartSlice";
import "../App.css";
function Cart() {
  const cart = useSelector((state) => state.cart);
  // const count = useSelector(state=>state.cart.count);
  // console.log(count);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((total, product) => {
    total += product.price * product.count;
    return total;
  }, 0);
  return (
    <div className="container mt-5">
      <div className="titel d-flex flex-row justify-content-between align-items-center">
        <h4>This is Item In Cart</h4>
        <input
          type="button"
          className="btn custom-bun btn-danger"
          value="Remove All Products"
          onClick={() => dispatch(clearCarte())}
        />
      </div>
      <div className="cartHight">
        {cart.length !== 0 ? (
          cart.map((product) => (
            <div
              key={product.id}
              className=" cart-content d-flex flex-row justify-content-between align-items-center mt-5"
            >
              <div className="img">
                {
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100px" }}
                  />
                }
              </div>
              <div className="info d-flex flex-column align-items-center">
                <h4>{product.title}</h4>
                <p className="m-2">Price :-{product.price}$</p>
                <p className="m-2 ">count :-{product.count}</p>
              </div>
              <div className=" deleteItems">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteCrate())}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h2 className="cart-empty text-danger">Cart is Empty</h2>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-end">
        <h3>Total Price:- {totalPrice.toFixed(2)}$</h3>
      </div>
    </div>
  );
}
export default Cart;
