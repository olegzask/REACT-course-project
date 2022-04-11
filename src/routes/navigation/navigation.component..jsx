import React, { ReactComponent } from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.css";

const CrwnLogo = () => {
  return <img src={require("../../assets/crown.svg")} alt="" />;
};

const Navigation = ({ categs }) => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {categs.map((el) => {
            return (
              <Link key={el.id} className="nav-link" to={el.href}>
                {el.title}
              </Link>
            );
          })}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
