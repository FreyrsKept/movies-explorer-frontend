import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { ROUTE_MAIN } from "../../utils/constants";

const ProtectedRoute = ({ isUserLoggedIn, children }) =>
  isUserLoggedIn ? children : <Navigate to={ROUTE_MAIN} replace />;

ProtectedRoute.propTypes = {
  isUserLoggedIn: PropTypes.bool,
  children: PropTypes.object,
};

export default ProtectedRoute;
