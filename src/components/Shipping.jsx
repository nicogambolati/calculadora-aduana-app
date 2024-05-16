export const Shipping = ({ shipping, setShipping }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Envio</span>
      </div>
      <input
        type="number"
        className="form-control"
        aria-label="Shipping cost"
        value={shipping}
        onChange={(e) => setShipping(parseFloat(e.target.value))}
        min="0"
      />
    </div>
  );
};
