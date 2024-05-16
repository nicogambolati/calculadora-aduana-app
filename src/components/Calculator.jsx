import { useContext, useEffect, useState } from "react";

import { Price } from "./Price";
import { Shipping } from "./Shipping";
import { Tax } from "./Tax";
import { DollarExchangeContext } from "../context/DollarExchangeContext";

export const Calculator = () => {
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    setSubTotal(price + shipping);
  }, [price, shipping]);

  const { exchange } = useContext(DollarExchangeContext);

  const tarjetaRate = exchange?.find((rate) => rate.casa === 'tarjeta');
  const tarjetaVenta = tarjetaRate ? tarjetaRate.venta : 0;

  // Calculate total in pesos using the formula: total * tarjetaVenta
  const totalPesos = total * tarjetaVenta;
  // Format totalPesos as a currency
  const formattedTotalPesos = totalPesos.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

  return (
    <div className="card d-flex aligns-items-center justify-content-center card text-center w-50 mx-auto">
      <div className="card-body">
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
          <h3>Total en dolares: {total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>

          <h3>Total en pesos (USD Tarjeta): {formattedTotalPesos}</h3>

        </div>
        <hr />
      </div>
    </div>
  );
};
