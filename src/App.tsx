import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  const countries = ["Nepal", "India", "Japan", "china", "Bhutan"];
  const heading = `Countries`;
  const handleSelectedItem = (item: string) => console.log(item);

  return (
    <div className="App">
      <ListGroup
        countries={countries}
        heading={heading}
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
