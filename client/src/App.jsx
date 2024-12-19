import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Layout from "./layout/Layout";

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
    <>
      <Toaster />
      <Routes>
        {homeRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute element={Component} />}
          />
        ))}
        {viewRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute element={Component} />}
          />
        ))}
        {MailboxRoute.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute element={Component} />}
          />
        ))}
        {navigatorRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute element={Component} />}
          />
        ))}
        {administrationRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute element={Component} />}
          />
        ))}

        {publicRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
};

export default App;
