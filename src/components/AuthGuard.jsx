import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = ({ children, requireAuth = true }) => {
  const user = useSelector((store) => store.user);
  const location = useLocation();

  console.log("AuthGuard:", {
    user: !!user,
    requireAuth,
    pathname: location.pathname,
    isLoginPage: location.pathname === "/login",
  });

  // If user is logged in and trying to access login page, redirect to home
  if (user && location.pathname === "/login") {
    console.log("Redirecting logged-in user from login to home");
    return <Navigate to="/" replace />;
  }

  // If authentication is required but user is not logged in, redirect to login
  if (requireAuth && !user) {
    console.log("Redirecting unauthenticated user to login");
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // If no authentication required and user is logged in, allow access
  // If authentication required and user is logged in, allow access
  console.log("AuthGuard: Allowing access");
  return children;
};

export default AuthGuard;
