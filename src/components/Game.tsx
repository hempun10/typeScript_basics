import { useState } from "react";
import Button from "./Button";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Jhon",
    },
  });
  const changeName = () => {
    setGame({ ...game, player: { name: "Himal" } });
  };
  return (
    <div>
      <Button children="Change Name" onClickhandle={changeName} />
    </div>
  );
};

export default Game;
