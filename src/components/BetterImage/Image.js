import React from 'react'

export default function Image({ src }) {
  console.log("src in Image component:", src);



  return (
    <div>

      <img src={require('/Users/macintosh/Desktop/Codesmith GitHub/BetterImage.JS' + src)} alt="image"></img>
    </div>
  )
}

///Users/macintosh / Desktop / Codesmith GitHub / BetterImage.JS / build / img / bigPNG.webp


