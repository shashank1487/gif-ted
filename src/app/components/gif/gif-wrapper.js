import React from "react";
import GifPlayer from "react-gif-player";

import "./gif-wrapper.css";

const GifWrapper = props => {
  const { src, still } = props;
  return <GifPlayer gif={src} still={still} className="gif" />;
};

export default GifWrapper;
