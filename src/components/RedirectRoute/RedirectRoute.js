import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const RedirectRoute = ({ loggedIn, children }) =>
  loggedIn ? <Navigate to="/movies" replace /> : children;

RedirectRoute.propTypes = {
  isUserLoggedIn: PropTypes.bool,
  children: PropTypes.object,
};

export default RedirectRoute;
