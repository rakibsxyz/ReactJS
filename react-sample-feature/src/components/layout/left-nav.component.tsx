import React from "react";
import { Link, withRouter } from "react-router-dom";

const LeftNav = (props: any) => {
  const [activeNav, setActiveNav] = React.useState<string>();

  const navChange = (value: string) => {
    setActiveNav(value);
  };
  React.useEffect(() => {
    const currentNav = props.location.pathname.split("/");
    if (currentNav && currentNav.length > 1) {
      setActiveNav(currentNav[1]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              className={`nav-link ${
                activeNav === "monster" ? "active" : null
              }`}
              to={"/monster"}
              onClick={() => navChange("monster")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-home"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Monster
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                activeNav === "json-data" ? "active" : null
              }`}
              to={"/json-data"}
              onClick={() => navChange("json-data")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-file"
                aria-hidden="true"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
              Json Data Source
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeNav === "hooks" ? "active" : null}`}
              to={"/hooks"}
              onClick={() => navChange("hooks")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-shopping-cart"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Hooks
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                activeNav === "cascading-dropdown" ? "active" : null
              }`}
              to={"/cascading-dropdown"}
              onClick={() => navChange("cascading-dropdown")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-users"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Cascading
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(LeftNav);
