export const Shipping = ({shipping, setShipping}) => {
  return (
    <label>
    Envio:
    <input
      type="number"
      value={shipping}
      onChange={(e) => setShipping(parseInt(e.target.value))}
    />
  </label>
  )
}
