import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1>Routing App</h1>
        <p className="lead text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          maiores maxime quos dicta quia earum magnam esse temporibus nam quas.
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

export default About;
