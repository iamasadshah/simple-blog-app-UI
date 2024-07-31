import React from "react";

const Head = () => {
  return (
    <>
      <header class="d-flex flex-wrap bg-dark  justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="fs-4 text-white">BlogEase</span>
        </a>
        <ul class="nav nav-pills ">
          <li class="nav-item">
            <a href="#" class="nav-link text-white">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white">
              Blogs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white">
              About
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Head;
