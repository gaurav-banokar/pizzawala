import React from "react";
import "./cart.scss";
import { Link } from "react-router-dom";

import newpizza2 from "../../assets/newpizza2.png";
import newpizza3 from "../../assets/newpizza3.png";
import newpizza4 from "../../assets/newpizza4.png";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button className="btn" onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button className="btn" onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const dispatch = useDispatch();

  const {
    cartItems: { tomatoPizza, vegMasalaPizza, spicyPizza },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const increment = (item) => {
    switch (item) {
      case 1:
        if (tomatoPizza.quantity >= 1)
          dispatch({ type: "tomatoPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      case 2:
        if (vegMasalaPizza.quantity >= 1)
          dispatch({ type: "vegMasalaPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      case 3:
        if (spicyPizza.quantity >= 1) dispatch({ type: "spicyPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "tomatoPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

   const decrement = (item) => {
    switch (item) {
      case 1:
        if (tomatoPizza.quantity === 1) {
          dispatch({ type: "tomatoPizzaZeroState" });
          dispatch({ type: "calculatePrice" });
          break;
        }

        if (tomatoPizza.quantity > 1)
          dispatch({ type: "tomatoPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      // case 2
      case 2:
        if (vegMasalaPizza.quantity === 1) {
          dispatch({ type: "vegMasalaPizzaZeroState" });
          dispatch({ type: "calculatePrice" });
          break;
        }
        if (vegMasalaPizza.quantity > 1)
          dispatch({ type: "vegMasalaPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (spicyPizza.quantity === 1) {
          dispatch({ type: "spicyPizzaZeroState" });
          dispatch({ type: "calculatePrice" });
          break;
        }
        if (spicyPizza.quantity > 1) dispatch({ type: "spicyPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        if (tomatoPizza.quantity > 1)
          dispatch({ type: "tomatoPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  return (
    <section className="cart allSection">
      <div className="cartSection allSectionContainer">
      <h1>Cart</h1>

      <main>
        {tomatoPizza.quantity < 1 ? (
          ""
        ) : (
          <CartItem
            title={"Tomato Pizza"}
            img={newpizza2}
            value={tomatoPizza.quantity}
            increment={() => increment(1)}
            decrement={() => decrement(1)}
          />
        )}
        {vegMasalaPizza.quantity < 1 ? (
          ""
        ) : (
          <CartItem
            title={"Veg Masala Pizza"}
            img={newpizza3}
            value={vegMasalaPizza.quantity}
            increment={() => increment(2)}
            decrement={() => decrement(2)}
          />
        )}

        {spicyPizza.quantity < 1 ? (
          ""
        ) : (
          <CartItem
            title={"Spicy Pizza"}
            img={newpizza4}
            value={spicyPizza.quantity}
            increment={() => increment(3)}
            decrement={() => decrement(3)}
          />
        )}
        {tomatoPizza.quantity < 1 &&
        vegMasalaPizza.quantity < 1 &&
        spicyPizza.quantity < 1 ? (
          ""
        ) : (
          <article>
            <div>
              <h4>Sub Total</h4>
              <p>₹ {subTotal}</p>
            </div>
            <div>
              <h4>Tax</h4>
              <p>₹ {tax}</p>
            </div>
            <div>
              <h4>Shipping Charges</h4>
              <p>₹ {shippingCharges}</p>
            </div>
            <div>
              <h4>Total</h4>
              <p>₹ {total}</p>
            </div>
            <Link to="/shipping">Checkout</Link>
          </article>
        )}
      </main>
      </div>
    </section>
  );
};

export default Cart;
