import React from "react";

interface Props {
  items: string[];
  onClear: () => void;
  onRevert: () => void;
}
const Cart = ({ items, onClear,onRevert }: Props) => {
  return (
    <div>
      <h1>Items</h1>
      {items.map((item) => (
        <li>{item}</li>
      ))}

      <button onClick={onClear}>Clear</button>
      <button onClick={onRevert}>Revert</button>
    </div>
  );
};

export default Cart;
