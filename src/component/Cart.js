import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length != 0 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length == 0 && (
          <Link to="/">
            <h1>Cart is empty. Go to home to add items to the cart.</h1>
          </Link>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
