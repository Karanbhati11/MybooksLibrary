import React, { useState } from "react";
const BookComponent = (props) => {
  const { image, title, author, src } = props;
  const HandleClick = () => {
    window.open(src);
  };
  return (
    <>
      <div>
        <article className="b123" onClick={HandleClick}>
          <img src={image} alt="" className="image12" />
          <h2>{title}</h2>
          <h3>{author}</h3>
        </article>
      </div>
    </>
  );
};

export default BookComponent;
