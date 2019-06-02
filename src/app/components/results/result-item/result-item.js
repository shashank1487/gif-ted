import React from "react";

const ResultItem = props => {
  const { id, images } = props;

  return (
    <div className="item">
      <img key={id} src={images.fixed_width.url} className="gif" />
    </div>
  );
};

export default ResultItem;
