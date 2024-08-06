import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <header className="d-flex flex-wrap bg-dark  justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4 text-white">BlogEase</span>
        </a>
        <ul className="nav nav-pills ">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link text-white">
              About
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Head;
