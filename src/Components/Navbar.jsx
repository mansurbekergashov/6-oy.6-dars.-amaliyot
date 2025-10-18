import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Navbar() {
  const { totalAmount } = useContext(GlobalContext);
  return (
    <header>
      <div className="container">
        <h2>
          <Link to="/">ContextStore</Link>
        </h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="header__card">
            <span className="header__card__indicator">{totalAmount}</span>
            <FaShoppingCart />
            <div className="hidden-card">
              {cart.length > 0 ? (
                cart.map((item)=>{
                    const {id, title, price, amount, image} = item
                    return <div key={id} className="hidden-cart__item">
                        <img src={image} alt="product" />
                    </div>

                })
              ) : (
                <p className="hidden__cart_info">Cart is empty</p>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
