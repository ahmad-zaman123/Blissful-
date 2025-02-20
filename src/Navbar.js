import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="relative z-50 bg-white">

{/* <Navbar bg="white" variant="light" expand="md">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav"> */}

      
      <nav className="flex justify-center py-4 space-x-5 relative">
        <Link to="/HOME" className="navbar-brand bg-pink-300 text-white p-2 rounded-xl">
          HOME
        </Link>
        <Link to="/SHOPALL" className="navbar-brand bg-pink-300 text-white p-2 rounded-xl">
          SHOP ALL
        </Link>

        {/* SHOP BY CATEGORY DROPDOWN */}
        <div className="relative group">
          <div
            to="/shop-by-category"
            className="navbar-brand bg-pink-300 text-white p-2 rounded-xl block"
          >
            SHOP BY CATEGORY
          </div>
          <div className="absolute top-full left-0 w-48 bg-pink-200 shadow-lg rounded-md hidden group-hover:block">
            <Link to="/SHOP-BY-CATEGORY/SERUMS" className="block px-4 py-2 text-white hover:bg-pink-300 border-b border-pink-300 no-underline">
              Serums
            </Link>
            <Link to="/shop-by-category/moisturisers" className="block px-4 py-2 text-white hover:bg-pink-300 border-b border-pink-300 no-underline">
              Moisturisers
            </Link>
            <Link to="/shop-by-category/cleansers" className="block px-4 py-2 text-white hover:bg-pink-300 border-b border-pink-300 no-underline">
              Cleansers
            </Link>
            <Link to="/shop-by-category/sunscreens" className="block px-4 py-2 text-white hover:bg-pink-300 no-underline">
              Sunscreens
            </Link>
          </div>
        </div>

        {/* SHOP BY SKIN CONCERN DROPDOWN */}
        <div className="relative group">
          <div
            to="/shop-by-skin-concern"
            className="navbar-brand bg-pink-300 text-white p-2 rounded-xl block"
          >
            SHOP BY SKIN CONCERN
          </div>
          <div className="absolute top-full left-0  w-48 bg-pink-200 shadow-lg rounded-md hidden group-hover:block">
            <Link to="/shop-by-skin-concern/breakouts_acne" className="block px-4 py-2 text-white hover:bg-pink-300 border-b border-pink-300 no-underline">
              Breakouts & Acne
            </Link>
            <Link to="/shop-by-skin-concern/dryness" className="block px-4 py-2 text-white hover:bg-pink-300 border-b border-pink-300 no-underline">
              Dryness
            </Link>
            <Link to="/shop-by-skin-concern/dark-spots" className="block px-4 py-2 text-white hover:bg-pink-300 border-b border-pink-300 no-underline">
              Dark Spots
            </Link>
            <Link to="/shop-by-skin-concern/healthy-aging" className="block px-4 py-2 text-white hover:bg-pink-300 no-underline">
              Healthy Aging
            </Link>
          </div>
        </div>

        <Link to="/BUNDLES" className="navbar-brand bg-pink-300 text-white p-2 rounded-xl">
          BUNDLES
        </Link>
        <Link to="/ABOUTUS" className="navbar-brand bg-pink-300 text-white p-2 rounded-xl">
          ABOUT US
        </Link>
        <Link to="/CONTACTUS" className="navbar-brand bg-pink-300 text-white p-2 rounded-xl">
          CONTACT US
        </Link>
      </nav>
      {/* </Navbar.Collapse>
            </Navbar> */}
    </div>
  );
}

export default Navbar;
