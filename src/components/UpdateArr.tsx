import { useState } from "react";
import Button from "./Button";
const UpdateArr = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const addTag = () => {
    setTags([...tags, "Excited"]);
  };
  console.log(tags);
  return (
    <>
      <Button children="Add Text" onClickhandle={addTag} />
    </>
  );
};

export default UpdateArr;
