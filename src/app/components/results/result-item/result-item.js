import React from "react";

const ResultItem = props => {
  const { id, images } = props;
  return (
    <div className="item">
      <img key={id} src={images.original.url} />
    </div>
  );
};

export default ResultItem;
