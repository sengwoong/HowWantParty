import React, { useContext } from "react";
import { Link ,useNavigate} from "react-router-dom"; // Link 추가
import { AuthContext } from "../context/authContext";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutBtn = () => {
    logout();
    navigate('/home')
  };

  return (
    <div className="border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/home"> {/* Link로 변경 */}
          WeWentParty
        </Link>

        <span className="ml-auto">{currentUser?.user.email}</span>
        {currentUser ? (
          <span className="ml-2" onClick={logoutBtn}>
            Logout
          </span>
        ) : (
          <span>
            <Link to="/login">Login</Link> {/* Link로 변경 */}
          </span>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
