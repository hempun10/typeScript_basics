import { useState } from "react";
import Button from "./Button";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["mushroom"],
  });
  const addToppings = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };
  return (
    <>
      <Button children="Add Toopings" onClickhandle={addToppings} />
    </>
  );
};

export default Pizza;
