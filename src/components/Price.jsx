export const Price = ({ price, setPrice }) => {
  return (
    <label>
      Precio usd:
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
    </label>
  );
};
