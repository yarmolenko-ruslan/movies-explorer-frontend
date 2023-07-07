import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ loggedIn, children }) =>
  loggedIn ? children : <Navigate to="/" replace />;

ProtectedRoute.propTypes = {
  isUserLoggedIn: PropTypes.bool,
  children: PropTypes.object,
};

export default ProtectedRoute;
