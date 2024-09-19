import { Link } from 'react-router-dom';
import { logout } from '../lib/auth';

function NavBar({ user, onLogout }) {
  const handleLogout = () => {
    logout();
    onLogout();
  };

  const loggedIn = Boolean(user);

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
        Job Seeker App
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
        </div>

        <div className="navbar-end">
          {loggedIn ? (
            <>
              <span className="navbar-item has-text-grey">
                {user.email}
              </span>
              <Link className="navbar-item" to="/jobs/new">
                Post Job
              </Link>
              <a className="navbar-item" onClick={handleLogout}>
                Logout
              </a>
            </>
          ) : (
            <Link className="navbar-item" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;