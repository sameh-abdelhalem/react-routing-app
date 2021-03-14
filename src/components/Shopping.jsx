import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Shopping.css";
import { Spinner } from "react-bootstrap";

const Shopping = () => {
  // state
  const [products, setProducts] = useState([]);

  // effect
  useEffect(() => {
    fetchProducts();
  }, []);

  // methods
  const fetchProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  };

  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {products.length ? (
              products.map((prod) => {
                return (
                  <div className="col-md-4" key={prod.id}>
                    <div className="card mb-4 shadow-sm">
                      <Link to={`/product/${prod.id}`}>
                        <img
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          height="300"
                          src={prod.image}
                          alt=""
                        />
                      </Link>

                      <div className="card-body">
                        <p className="card-text">{prod.title}</p>
                        <p className="card-text">{prod.category}</p>
                        <p className="card-text"> {prod.price} $</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <Link to={`/product/${prod.id}`}>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                View
                              </button>
                            </Link>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <Spinner animation="grow" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopping;
