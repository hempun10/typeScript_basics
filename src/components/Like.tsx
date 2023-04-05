import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onhandleClick: () => void;
}

const Like = ({ onhandleClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toogleClick = () => {
    setStatus(!status);
    onhandleClick();
  };
  return (
    <>
      {!status ? (
        <AiOutlineHeart onClick={toogleClick} size={20} />
      ) : (
        <AiFillHeart onClick={toogleClick} color="#A52A2A" size={20} />
      )}
    </>
  );
};

export default Like;
