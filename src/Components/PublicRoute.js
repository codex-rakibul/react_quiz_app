import React from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

export default function PublicRoute() {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to="/login" />;
}
