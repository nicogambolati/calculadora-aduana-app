import { useContext, useEffect } from "react";
import { DollarExchangeContext } from "../context/DollarExchangeContext";

export const DollarExchangeRate = () => {
  const { exchange, setExchange } = useContext(DollarExchangeContext);

  useEffect(() => {
    setExchange(exchange);
  }, [exchange]);

  // Check if exchange is not null and has at least one element
  if (!exchange || exchange.length === 0) {
    return <div>Loading...</div>; // or any other appropriate message or component
  }

  // Format the fechaActualizacion date
  const formattedFechaActualizacion = new Date(
    exchange[0].fechaActualizacion
  ).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="col-12 col-md-6 dollar-exchange">
      <h2>Tipo de Cambio</h2>
      {exchange && exchange.length > 0 ? (
        exchange.map((rate) => (
          <div key={rate.casa}>
            <div className="d-flex ">
              <h4>{rate.nombre}:</h4>
              <h4>${rate.venta}</h4>
            </div>

            <br />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <h6>Fecha de actualizacion: {formattedFechaActualizacion}</h6>
    </div>
  );
};
