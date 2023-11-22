import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
        WeWentParty
        </a>

   
        <span className="ml-auto">{currentUser?.username}</span>
        {currentUser ? (
          <span className="ml-2" onClick={logout}>
            logout
          </span>
        ) : (
          <span>
            <a href="/login">login</a>
          </span>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
