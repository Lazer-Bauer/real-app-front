import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";
const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light bg-light"
      aria-label="Third navbar example"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          real <i className="bi bi-geo-fill"></i> app
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" href="#">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/my-cards" className="nav-link">
                My Cards
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            {user ? (
              <li className="nav-item">
                <NavLink to={"/sign-out"} className="nav-link">
                  Sign out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/sign-up" className="nav-link" href="#">
                    Sign up
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to={"/sign-in"} className="nav-link" href="#">
                    Sign in
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/sign-up-biz" className="nav-link">
                    Sign Up Biz
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
