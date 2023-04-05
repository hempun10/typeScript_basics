import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import UpdateArr from "./components/UpdateArr";
import Nav from "./components/Nav";
import Cart from "./components/Cart";

function App() {
  const [alertVibisble, setAlertVisible] = useState(false);
  const countries = ["Nepal", "India", "Japan", "china", "Bhutan"];
  const heading = `Countries`;
  const handleSelectedItem = (item: string) => console.log(item);
  const [items, setItems] = useState(["Apple", "BoAt", "Chewingum"]);

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

      <Like onhandleClick={() => console.log("Clicked")} />
      <UpdateArr />

      <Nav itemCount={items.length} />
      <Cart
        items={items}
        onRevert={() => setItems(["Apple", "BoAt", "Chewingum"])}
        onClear={() => setItems([])}
      />
    </div>
  );
}

export default App;
