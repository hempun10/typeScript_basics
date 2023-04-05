import React from "react";

interface Props {
  itemCount: number;
}
const Nav = ({ itemCount }: Props) => {
  return (
    <div>
      <h1>Navbar: {itemCount}</h1>
    </div>
  );
};

export default Nav;
