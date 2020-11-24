const fs = require("fs");
const path = require("path");
const webp = require("webp-converter");
const imageController = {};

imageController.convertWebp = async (req, res, next) => {
  const { imageName, imgType, quality } = req.body;
  console.log("conversion to webp triggered");
  const result = webp.cwebp(
    path.resolve(__dirname, `../../src/components/App/images/${imageName}.${imgType}`),
    path.resolve(__dirname, `../../src/components/BetterImage/convertedImage${imageName}.webp`),
    `-q ${quality}`);


  res.locals.path = `/src/components/BetterImage/convertedImage${imageName}.webp`;
  console.log("res.locals ----->", res.locals.path);
  return next();
};


module.exports = imageController;

// imageController.convertWebp = async (req, res, next) => {
//   const { imageName, imgType, quality } = req.body;
//   console.log("conversion to webp triggered");
//   const result = await webp.cwebp(
//     path.resolve(__dirname, `../../src/components/App/images/${imageName}.${imgType}`),
//     path.resolve(__dirname, `../../public/img/${imageName}.webp`),
//     `-q ${quality}`
//   );
//   res.locals.instance = true;
//   return next();
// };

//test


// imageController.convertWebp = async (req, res, next) => {
//   const { imageName, imgType, quality } = req.body;
//   console.log("conversion to webp triggered");

//   const result = await webp.cwebp(
//     path.resolve(__dirname, `../../src/components/App/images/${imageName}.${imgType}`),
//     path.resolve(__dirname, `../../src/components/BetterImage/convertedImage/${imageName}.webp`),
//     `-q ${quality}`
//   );
//   console.log("path ---->", path.resolve(__dirname, `../../src/components/BetterImage/convertedImage/${imageName}.webp`))
//   let resultPath = path.resolve(__dirname, `../../src/components/BetterImage/convertedImage/${imageName}.webp`);
//   res.locals.path = resultPath;
//   console.log("result path in server side", res.locals.path);
//   return next();
// };
