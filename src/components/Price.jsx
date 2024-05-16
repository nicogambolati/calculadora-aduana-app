export const Price = ({ price, setPrice }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">USD</span>
      </div>
      <input
        type="number"
        className="form-control"
        aria-label="Amount (to the nearest dollar)"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        min="0"
      />
    </div>
  );
};
