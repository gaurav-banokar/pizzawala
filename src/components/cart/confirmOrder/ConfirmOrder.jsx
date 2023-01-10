import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../redux/actions/orderActions.js";

// scss importation
import "./confirmOrder.scss";

const ConfirmOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);

  const { message, error } = useSelector((state) => state.order);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total
        )
      );
      if(message) {
      navigate("/paymentSuccess");
      }
      if(error) {
        setDisableBtn(false)
      }
    } else {
       alert("Online Payment is not available")
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      // navigate("/paymentsuccess");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      setDisableBtn(false);
    }
  }, [dispatch, message, error, navigate]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/paymentsuccess");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      setDisableBtn(false);
    }
  }, [dispatch, message, error, navigate]);

  return (
    <section className="confirmOrder_section allSection">
      <div className="confirmOrder_container allSectionContainer">
        <main>
          <h1>Confirm Order</h1>

          <form onSubmit={submitHandler}>
            <div>
              <label>Cash On Delivery</label>
              <input
                type="radio"
                name="payment"
                onChange={() => setPaymentMethod("COD")}
                required
              />
            </div>
            <div>
              <label>Online</label>
              <input
                type="radio"
                required
                name="payment"
                onChange={() => setPaymentMethod("Online")}
              />
            </div>

            <button disabled={disableBtn} type="submit">
              Place Order
            </button>
          </form>
        </main>
      </div>
    </section>
  );
};

export default ConfirmOrder;
