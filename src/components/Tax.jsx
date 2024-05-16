export const Tax = ({ tax, setTax, subTotal, setTotal }) => {
  const calculateTax = () => {
    let newtax = 0;
    if (subTotal > 50) {
      newtax = (subTotal - 50) * 0.5;
    }

    setTax(newtax);
    setTotal(subTotal + newtax);
  };
  return (
    <div className="d-flex flex-column align-items-center gap-3 ">
      <button onClick={calculateTax} className="btn btn-primary">Calcular Impuesto</button>
      <h6>Impuesto Aduanero: ${tax}</h6>
    </div>
  );
};
