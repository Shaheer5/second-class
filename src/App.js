import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light fixed-top text-secondary bg-white">
        <div className="container-xxl">
          <a className="navbar-brand" href="#intro">
            <span className="fw-bold">
              <i className="spider fas fa-spider"></i>
              SpiderMan
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#topics">
                  About The Book
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reviews">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Get in Touch
                </a>
              </li>
              <li className="nav-item d-md-none">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item ms-2 d-none d-md-inline">
                <a className="btn btn-danger" href="#pricing">
                  buy now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="image">
        <img src="./image.jpg" alt="Spiderman background" />
      </section>
    </div>
  );
};

export default App;
