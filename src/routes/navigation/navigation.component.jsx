// import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";
// import { ReactComponent as AppLogo } from "../../assests/logo.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { SetCurrentUser } from "../../store/user/user.action";
// import { Fetch_Task_List } from "../../store/tasks/tasks.action";

const Navigation = () => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/signin">
                signin <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
    // <Fragment>
    //   <div className="navigation">
    //     <div className="logo-container">
    //       {/*<AppLogo className="logo" />*/}
    //       <Link className="app-link" to="/">
    //       <span>logo</span>
    //       </Link>
    //     </div>
    //     <div className="app-link-conatiner">
    //       {CurrentUser ? (
    //         <Link className="app-link" to="/signin">
    //           <span onClick={signOutHandler}>Sign Out</span>
    //         </Link>
    //       ) : (
    //         <Link className="app-link" to="/signin">
    //           Sign In
    //         </Link>
    //       )}
    //     </div>
    //   </div>
    // <div>
    //
    // </div>
    // </Fragment>
  );
};

export default Navigation;
