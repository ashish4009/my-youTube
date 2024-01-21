import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const list = ["All", "Fav", "Kids", "sports", "adventure", "social"];
  return (
    <div className="flex">
      {/* {list.map((e) => {
        console.log(e);
        <Buttons name={e} />;
      })} */}
      <Buttons name="All" />
      <Buttons name="Fav" />
      <Buttons name="Kids" />
      <Buttons name="Sports" />
      <Buttons name="Adventure" />
      <Buttons name="Social" />
      <Buttons name="Love" />
      <Buttons name="Surprise" />
      <Buttons name="Blog" />
      <Buttons name="Shorts" />
      <Buttons name="Bharat" />
    </div>
  );
};

export default ButtonList;
