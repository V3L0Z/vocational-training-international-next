"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-blue-950 h-8 min-h-8 max-h-8">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <p className="text-white">Connect With Us Today!</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-slate-800">Home</a>
              </li>
              <li>
                <a className="text-slate-800">About</a>
              </li>
              <li>
                <a className="text-slate-800">Certifications</a>
              </li>
              <li>
                <a className="text-slate-800">Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/globe-dark.svg"
              alt="#"
              height={50}
              width={50}
            />
            <h1 className="font-bold text-xl text-black">
              Vocational Training
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/" className="text-slate-800">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-slate-800">
                About
              </a>
            </li>
            <li>
              <a href="/certifications" className="text-slate-800">
                Certifications
              </a>
            </li>
            <li>
              <a href="/contact" className="text-slate-800">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary text-white shadow-md shadow-gray-400">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
