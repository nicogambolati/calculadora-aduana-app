import { useState, useEffect } from "react";

function DollarExchangeRate() {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dolarapi.com/v1/dolares");
        const data = await response.json();
        setExchangeRate(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dollar Exchange Rate:</h2>
      {exchangeRate && exchangeRate.length > 0 ? (
        exchangeRate.map((rate) => (
          <div key={rate.casa}>
            <div className="d-flex">
              <label>{rate.nombre}:</label>
              <label>${rate.venta}</label>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DollarExchangeRate;
