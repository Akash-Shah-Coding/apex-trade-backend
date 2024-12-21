import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Layout from "./layout/Layout";
import Loader from "./common/Loader";

import {
  homeRoutes,
  viewRoutes,
  navigatorRoutes,
  publicRoutes,
  MailboxRoute,
  administrationRoutes,
} from "./routeConfig";
import "./app.css";
import "./css/style.css";

// Protected Route Component
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const loggedInUser = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);

  if (isLoading) {
    return <Loader />;
  }

  return loggedInUser ? (
    <Layout>
      <Element {...rest} />
    </Layout>
  ) : (
    <Navigate to="/signin" replace />
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Toaster position="top-right" />
      <Routes>
        {[...homeRoutes, ...viewRoutes, ...MailboxRoute, ...navigatorRoutes, ...administrationRoutes].map(
          ({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={<ProtectedRoute element={Component} />}
            />
          )
        )}
        {publicRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
