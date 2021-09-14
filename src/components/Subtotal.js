import React from "react";
import { useStateValue } from "./StateProvider";
import "./subtotal.css";
import { getBasketTotal } from "./Reducer";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :<strong> {value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type='checkbox' /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
