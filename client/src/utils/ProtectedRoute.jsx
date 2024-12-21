import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../common/Loader";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { user, isAuthLoading } = useAuth();

  if (isAuthLoading) {
    return <Loader />;
  }

  return user ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default ProtectedRoute;
