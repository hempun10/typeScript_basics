import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

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
      <Alert children={<span>Alert</span>} />
    </div>
  );
}

export default App;
