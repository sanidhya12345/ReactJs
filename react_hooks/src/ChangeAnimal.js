/** @format */

import React, { useState } from "react";
let url = "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg";
export const ChangeAnimal = () => {
  const [image, setImage] = useState(url);
  const changeAnimalImage = () => {
    let catURL =
      "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg";
    let dogURL =
      "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg";
    let result = image === catURL ? dogURL : catURL;
    setImage(result);
  };
  return (
    <div>
      <div>
        <img src={image} alt=""></img>
      </div>
      <button onClick={changeAnimalImage}>Change</button>
    </div>
  );
};
