import { MouseEvent, useState } from "react";

const ListGroup = () => {
  const countries = ["Nepal", "India", "Japan", "china", "Bhutan"];
  const [currentIndex, setIndex] = useState(0);
  //   Event Handle
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
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
            onClick={() => setIndex(index)}
          >
            {country}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
