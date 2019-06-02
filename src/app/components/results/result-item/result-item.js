import React from "react";

import './result-item.scss';
const ResultItem = props => {
  const { id, images } = props;

  return (
    <div className="item">
      <img key={id} src={images.fixed_width.url} className="gif" />
    </div>
  );
};

export default ResultItem;
