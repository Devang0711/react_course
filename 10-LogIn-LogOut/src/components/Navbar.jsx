import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/">Home</Link>
      <div>
        {user ? (
          <>
            <span className="mr-4">Hello, {user.username}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-500 px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
