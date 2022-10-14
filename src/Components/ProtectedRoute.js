import React from "react";
import { Navigate } from "react-router-dom";
import useIsAuthenticated from "../Utils/useIsAuthenticated";

function ProtectedRoute({ children }) {
  const isAuthenticated = useIsAuthenticated();

  return <>{isAuthenticated ? children : <Navigate to="/Login" replace />}</>;
}

export default ProtectedRoute;
