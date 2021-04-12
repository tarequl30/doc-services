import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid ">
        {/* <a class="navbar-brand" href="#">
          Navbar
        </a> */}
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
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 p-3 me-5">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                All Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Contact US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
