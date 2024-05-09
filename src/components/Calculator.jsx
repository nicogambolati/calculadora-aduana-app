import { useEffect, useState } from "react";
import DollarExchangeRate from "./DollarExchangeRate";

export const Calculator = () => {
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [tax, settax] = useState(0);

  useEffect(() => {
    setSubTotal(price + shipping);
  }, [price, shipping]);

  const calculateTax = () => {
    let newtax = 0;
    if (subTotal > 50) {
      newtax = (subTotal - 50) * 0.5;
    }

    settax(newtax);
    setTotal(subTotal + newtax);
  };

  return (
    <div>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
        Shipping:
        <input
          type="number"
          value={shipping}
          onChange={(e) => setShipping(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
      SubTotal: ${subTotal}
      </label>
      <br />
      <br />
      <br />
      <button onClick={calculateTax}>Calculate Tax</button>
      <br />
      <label>Tax: ${tax}</label>
      <br />
      <br />
      <br />
      Total: ${total}
      <br />
      <br />
      <br />
      <DollarExchangeRate />
    </div>
  );
};
