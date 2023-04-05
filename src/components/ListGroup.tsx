import { MouseEvent, useState } from "react";
import styled from "styled-components";
interface Props {
  countries: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

const ListGroup = ({ countries, heading, onSelectedItem }: Props) => {
  const [currentIndex, setIndex] = useState(0);
  //   Event Handle
  //   const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {countries.length == 0 && <p>No records found</p>}
      <ul className="list-group">
        {countries.map((country, index) => (
          <li
            className={
              currentIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setIndex(index);
              onSelectedItem(country);
            }}
          >
            {country}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
