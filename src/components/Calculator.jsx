import { useEffect, useState } from "react";

// import  DollarExchangeRate  from "./DollarExchangeRate";
import { Price } from "./Price";
import { Shipping } from "./Shipping";
import { Tax } from "./Tax";

export const Calculator = () => {
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    setSubTotal(price + shipping);
  }, [price, shipping]);

  return (
    <div className="card d-flex aligns-items-center justify-content-center card text-center w-50 mx-auto">
      <div className="card-body">
        <h2 className="card-title">Calculadora de Impuestos</h2>
        <div className="card-text d-flex flex-column gap-3">
          <Price price={price} setPrice={setPrice} />
          <Shipping shipping={shipping} setShipping={setShipping} />
          <h5 className="totals">SubTotal: ${subTotal}</h5>
          <Tax
            tax={tax}
            setTax={setTax}
            subTotal={subTotal}
            setTotal={setTotal}
          />
          <h3>Total: ${total}</h3>
        </div>
        {/* <DollarExchangeRate /> */}
      </div>
    </div>
  );
};
