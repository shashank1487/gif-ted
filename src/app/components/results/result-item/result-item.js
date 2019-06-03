import React from "react";
import GifWrapper from "../../gif/gif-wrapper";

import "react-gif-player/dist/gifplayer.min.css";
import './result-item.scss';
const ResultItem = props => {
  const { id, images } = props;

  return (
    <div className="item">
      <GifWrapper
        key={id}
        src={images.original.url}
        still={images["480w_still"].url}
      />
    </div>
  );
};

export default ResultItem;
