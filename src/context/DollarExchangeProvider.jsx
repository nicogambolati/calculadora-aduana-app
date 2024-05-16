import { useEffect, useState } from "react";
import { DollarExchangeContext } from "./DollarExchangeContext";

export const DollarExchangeProvider = ({ children }) => {
  const [exchange, setExchange] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dolarapi.com/v1/dolares");
        const data = await response.json();
        setExchange(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DollarExchangeContext.Provider value={{ exchange, setExchange }}>
      {children}
    </DollarExchangeContext.Provider>
  );
};
