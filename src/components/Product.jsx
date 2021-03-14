import React from "react";

const Product = ({ match }) => {
  return <div>id:{match.params.id}</div>;
};

export default Product;
