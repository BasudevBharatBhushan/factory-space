import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAdmin } from "../helper";

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const checkAuth = async () => {
      const auth = await isAdmin();
      setIsAuthenticated(auth);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin" />;
};

export default PrivateRoute;
