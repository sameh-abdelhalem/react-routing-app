import React from "react";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Product = ({ match }) => {
  //state
  const [product, setProduct] = useState(null);

  // effect
  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // methods
  const fetchProduct = async () => {
    await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  return (
    <>
      {product ? (
        <div className="products">
          <div className="card mb-3 p-4">
            <div className="row no-gutters">
              <div className="col-md-4 d-flex justify-content-center">
                <img className="img-fluid w-50" src={product.image} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"> {product.title} </h5>
                  <div>
                    <p className="card-text"> {product.category} </p>
                  </div>
                  <div>
                    <p className="card-text my-3 text-muted">
                      {product.description}
                    </p>
                  </div>
                  <div>
                    <p className="card-text">Price : {product.price} $</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner animation="grow" />
      )}
    </>
  );
};

export default Product;
