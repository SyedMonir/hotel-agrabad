import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);
const Header = () => {
  const [users, setUsers] = useState({});
  // console.log(users.uid);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setUsers(user);
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUsers({});
        toast.success('Sign-out successful.');
      })
      .catch((error) => {
        toast.error(error.errorMessage);
      });
  };

  return (
    <div className="navbar bg-base-300">
      <Toaster />
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
        <div className="form-control hidden sm:block mr-4 ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex="0"
            className="btn btn-ghost btn-circle avatar placeholder mr-4 online"
          >
            <div className="w-12 bg-neutral-focus text-neutral-content rounded-full">
              <span className="text-base">
                {users.email ? users.email.slice(0, 2) : '?'}
              </span>
            </div>
          </label>

          <ul
            tabIndex="0"
            className="mt-3 p-3 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
          >
            {users.uid && (
              <li>
                <button className="btn btn-outline btn-info btn-sm mb-1">
                  Profile
                </button>
              </li>
            )}
            {users.uid ? (
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline btn-error btn-sm"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to={'/login'}>
                  <button className="btn btn-outline btn-error btn-sm w-full">
                    Login
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
