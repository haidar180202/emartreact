import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-white py-3 shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" to="/">
            HAIDAR SHOP
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/products" class="nav-link" href="#">
                  Products
                </Link>
              </li>
              
              <li class="nav-item">
                <Link to="/about" class="nav-link" href="#">
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact" class="nav-link" href="#">
                  Contact
                </Link>
              </li>

            </ul>

            <div className="buttons">
                <Link to="/login" className="btn btn-outline-dark">
                   <i className="fa fa-sign-in me-1"></i> Login
                </Link>

                <Link to="/register" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-user-plus me-1 "></i> Register
                </Link>

                <Link to="/cart" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-shopping-cart me-1"></i> Cart(0)
                </Link>

            </div>

            {/* <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
