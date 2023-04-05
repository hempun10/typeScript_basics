import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import UpdateArr from "./components/UpdateArr";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import ExpandText from "./components/ExpandText";

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

      <div>
        <ExpandText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          aliquid corrupti soluta ipsam tempora repudiandae, dolore expedita
          veniam praesentium, ab in facere vero aut laborum excepturi vitae
          neque nam eveniet similique sed accusamus earum nulla? Adipisci
          aliquam nam earum deserunt aperiam, recusandae eius corporis error.
          Temporibus earum modi eos provident commodi odit doloremque est
          voluptatum vitae, ut omnis ullam iure alias quis dolor placeat
          aperiam. Doloribus alias repudiandae labore, amet harum maiores maxime
          illum soluta, porro tempore deleniti neque et, vitae fugit ipsam
          cumque quasi commodi debitis nam. Odit necessitatibus cumque ea
          accusamus enim labore ab itaque sit ipsum nostrum.
        </ExpandText>
      </div>
    </div>
  );
}

export default App;
