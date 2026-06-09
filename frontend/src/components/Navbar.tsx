import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

const Navbar = () => {
  const authState = useSelector((state: any) => state.authReducer);
  const dispatch: any = useDispatch();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className="flex justify-between sticky top-0 p-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200 items-center">
        <h2 className="cursor-pointer uppercase font-semibold tracking-wide text-slate-800">
          <Link to="/"> Task Manager </Link>
        </h2>
        <ul className="hidden md:flex gap-4 uppercase font-medium">
          {authState.isLoggedIn ? (
            <>
              <li className="bg-primary text-white hover:bg-primary-dark font-medium rounded-xl shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <Link to="/tasks/add" className="block w-full h-full px-4 py-2">
                  {" "}
                  <i className="fa-solid fa-plus"></i> Add task{" "}
                </Link>
              </li>
              <li
                className="py-2 px-3 cursor-pointer text-slate-600 hover:bg-slate-100 transition rounded-xl"
                onClick={handleLogoutClick}
              >
                Logout
              </li>
            </>
          ) : (
            <li className="py-2 px-3 cursor-pointer text-primary hover:bg-primary/10 transition rounded-xl">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
        <span className="md:hidden cursor-pointer" onClick={toggleNavbar}>
          <i className="fa-solid fa-bars"></i>
        </span>

        {/* Navbar displayed as sidebar on smaller screens */}
        <div
          className={`absolute md:hidden right-0 top-0 bottom-0 transition ${isNavbarOpen === true ? "translate-x-0" : "translate-x-full"} bg-slate-50/95 backdrop-blur-md shadow-xl border-l border-slate-200 w-screen sm:w-9/12 h-screen`}
        >
          <div className="flex">
            <span
              className="m-4 ml-auto cursor-pointer text-slate-700"
              onClick={toggleNavbar}
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
          <ul className="flex flex-col gap-4 uppercase font-medium text-center">
            {authState.isLoggedIn ? (
              <>
                <li className="bg-primary text-white hover:bg-primary-dark font-medium transition py-2 px-3 rounded-xl shadow-sm">
                  <Link to="/tasks/add" className="block w-full h-full">
                    {" "}
                    <i className="fa-solid fa-plus"></i> Add task{" "}
                  </Link>
                </li>
                <li
                  className="py-2 px-3 cursor-pointer text-slate-600 hover:bg-slate-100 transition rounded-xl"
                  onClick={handleLogoutClick}
                >
                  Logout
                </li>
              </>
            ) : (
              <li className="py-2 px-3 cursor-pointer text-primary hover:bg-primary/10 transition rounded-xl">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
