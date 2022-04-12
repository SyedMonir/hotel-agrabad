import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={'home'}>Home</Link>
            </li>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">
          Hotel Agrabad
        </Link>
      </div>
      <div className="navbar-end">
        <div className="form-control hidden sm:block ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="user"
                src="https://api.lorem.space/image/face?hash=33791"
              />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-3 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
          >
            <li>
              <button className="btn btn-outline btn-info btn-sm mb-1">
                Profile
              </button>
            </li>
            <li>
              <button className="btn btn-outline btn-error btn-sm">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
