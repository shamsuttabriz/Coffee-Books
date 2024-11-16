import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `font-bold ${
            isActive ? "text-warning" : "hover:text-warning duration-150"
          }`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-bold ${
            isActive ? "text-warning" : "hover:text-warning duration-150"
          }`
        }
        to="/coffees"
      >
        Coffees
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-bold ${
            isActive ? "text-warning" : "hover:text-warning duration-150"
          }`
        }
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    </>
  );
  return (
    <div className="navbar backdrop-blur-xl bg-white/30 z-50 fixed">
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
            className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-[1] mt-3 w-52 pl-8 text-lg font-medium py-4 shadow gap-2"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold ml-4">
          CoffeeBooks
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-8 text-lg font-medium">
          {links}
        </ul>
      </div>
    </div>
  );
}
