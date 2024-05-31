import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../../zustand/authStore.ts";

const PrivateRoute = () => {
  const token = useAuthStore((state) => state.token);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
