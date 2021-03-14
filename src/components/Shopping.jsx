import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// states
// const [products, setProducts] = useState([]);

const Shopping = () => {
  useEffect(() => {
    console.log("hello");
    return () => {
      //   fetchProducts();
    };
  }, []);

  // methods
  //   const fetchProducts = async () => {
  //     await fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((json) => setProducts(json));
  //   };
  return (
    <>
      <div>shopping cart</div>
      <Link to="/product/1">product1</Link>
      <Link to="/product/2">product2</Link>
      <Link to="/product/3">product3</Link>
    </>
  );
};

export default Shopping;
