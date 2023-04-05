import React from "react";

interface Props {
  items: string[];
  onClear: () => void;
}
const Cart = ({ items, onClear }: Props) => {
  return (
    <div>
      <h1>Items</h1>
      {items.map((item) => (
        <li>{item}</li>
      ))}

      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default Cart;
