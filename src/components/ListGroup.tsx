const ListGroup = () => {
  const countries = ["Nepal", "India", "Japan", "china", "Bhutan"];
  return (
    <>
      <h1>List</h1>
      {countries.length == 0 && <p>No records found</p>}
      <ul className="list-group">
        {countries.map((country, index) => (
          <li className="list-group-item" key={index}>
            {country}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
