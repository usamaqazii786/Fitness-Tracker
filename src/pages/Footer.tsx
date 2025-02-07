import React from 'react';

export default function Footer() {
  return (
    <>
   <footer className="text-center shadow bg-body-tertiary text-lg-start">
  {/* Copyright */}
  <div className="px-4 pt-5 text-center bg-white d-flex flex-column flex-md-row text-md-start justify-content-between px-xl-5">
    {/* Copyright */}
    <div className="mb-0 text-black mb-md-0">
      Copyright © 2025. All rights reserved.
    </div>
    {/* Copyright */}
    {/* Right */}
    <div>
      <a href="#!" className="text-black me-4">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#!" className="text-black me-4">
        <i className="fab fa-twitter" />
      </a>
      <a href="#!" className="text-black me-4">
        <i className="fab fa-google" />
      </a>
      <a href="#!" className="text-black">
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
    {/* Right */}
  </div>
  {/* Copyright */}
</footer>
    </>
  )
}
