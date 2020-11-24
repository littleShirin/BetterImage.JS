import React, { useEffect, useState } from "react";
import Image from './Image';


function BetterImage(props) {
  /////////////////* HOISTED VARIABLES *///////////////////////////

  const { resize, source, quality, format } = props;
  const [imgData, setImgData] = useState('');


  let resizedImageWidth;
  let resizedImageHeight;

  //////////////////* HELPER fUNCTIONS *///////////////////
  ////////////////////* import all images in optimized folder */////////////////////
  let images = {};

  function importAll(r) {
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });

    return images;
  }






  //////////////////////////* Extract Image Name * ////////////////////

  let fileName = source.split('/').pop();
  let imgType = fileName.split('.').pop();
  let imgName = fileName.split('.').shift();
  imgName = imgName.replace(/\.(.*)\.(.*)/, "");

  //////////////////* MAIN fUNCTIONS *///////////////////
  /////////////////////////* Image Resize Functionality *////////////////////////
  function resizeFunc(string) {
    let foundX = false;
    let num1 = "";
    let num2 = "";

    for (let i = 0; i < string.length; i++) {
      if (string[i] !== "x" && foundX === false) {
        num1 = num1.concat(string[i]);
      } else if (string[i] === "x") {
        foundX = true;
      } else if (string[i] !== "x" && foundX === true) {
        num2 = num2.concat(string[i]);
      }
    }
    resizedImageHeight = Number(num1);
    resizedImageWidth = Number(num2);
    return;
  }

  ////////////////* Convert Image Format to WEBP Functionality */////////////////

  useEffect(() => {

    fetch("/api/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageName: `${imgName}`,
        imgType: `${imgType}`,
        quality: `${quality}`,
      }),
    }).then(res => res.json())
      .then(data => {
        setImgData(data);
        console.log("set data in state", imgData);
      })

  }, [imgData])







  // resizeFunc(resize);


  return (
    <div>
      <Image src={imgData} />
    </div>
  );
} // end of functional component

export default BetterImage;



