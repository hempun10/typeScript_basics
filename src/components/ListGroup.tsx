import { MouseEvent } from "react";
const ListGroup = () => {
  const countries = ["Nepal", "India", "Japan", "china", "Bhutan"];
  const handleClick = (event: MouseEvent) =>
    console.log(event.target.addEventListener);

  return (
    <>
      <h1>List</h1>
      {countries.length == 0 && <p>No records found</p>}
      <ul className="list-group">
        {countries.map((country, index) => (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {country}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
