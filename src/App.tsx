import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVibisble, setAlertVisible] = useState(false);
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
      {alertVibisble && (
        <Alert
          children={<span>Alert</span>}
          oncloseEvent={() => setAlertVisible(false)}
        />
      )}
      <Button
        children="My Button"
        color="danger"
        onClickhandle={() => setAlertVisible(true)}
      />
    </div>
  );
}

export default App;
