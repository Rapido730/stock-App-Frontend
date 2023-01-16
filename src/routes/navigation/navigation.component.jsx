import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";

import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "../../store/user/user.action";
import Dolo from "../../assests/DOLO65.png";

const Navigation = () => {
  const dispatch = useDispatch();
  const CurrentUserdata = useSelector((state) => state.user.CurrentUser);
  let CurrentUser = null;
  if (CurrentUserdata != null) {
    const token = CurrentUserdata.tokens[0];
    CurrentUser = CurrentUserdata;
  }

  const signOutHandler = () => {
    dispatch(SetCurrentUser(null));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img class="logo-resize" src={Dolo} alt="DOLO650" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              {CurrentUser ? (
                <div className="my-auto row">
                  <Link className="nav-link">
                    {CurrentUser.name}{" "}
                    <span className="sr-only">(current)</span>
                  </Link>
                  <Link className="nav-link" to="/signin">
                    <span className="mt-5" onClick={signOutHandler}>
                      Sign Out
                    </span>
                  </Link>
                </div>
              ) : (
                <div className="navbar-nav ml-auto">
                  <Link className="app-link" to="/signin">
                    Sign In
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
