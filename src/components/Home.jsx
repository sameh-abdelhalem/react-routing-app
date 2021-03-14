import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1>Welcome to our E-Shop</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <p>
          <Link to="/shopping" className="btn btn-success my-2">
            Our Products
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Home;
